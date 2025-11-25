/**
 * Script to delete a creator from the database
 * Usage: node scripts/delete-creator.js <username>
 * 
 * Note: This script requires VITE_SUPABASE_URL and VITE_SUPABASE_SERVICE_ROLE_KEY
 * (or VITE_SUPABASE_ANON_KEY if your RLS policies allow deletion)
 */

import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { readFileSync } from 'fs'

// Load environment variables from .env file
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const envPath = join(__dirname, '../.env')

try {
  const envContent = readFileSync(envPath, 'utf-8')
  const envVars = {}
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim()
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...valueParts] = trimmed.split('=')
      if (key && valueParts.length > 0) {
        envVars[key.trim()] = valueParts.join('=').trim().replace(/^["']|["']$/g, '')
      }
    }
  })
  Object.assign(process.env, envVars)
} catch (error) {
  console.warn('Could not read .env file, using process.env')
}

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseKey = process.env.VITE_SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Error: Missing Supabase environment variables')
  console.error('Required: VITE_SUPABASE_URL and VITE_SUPABASE_SERVICE_ROLE_KEY (or VITE_SUPABASE_ANON_KEY)')
  console.error('\nPlease set these in your .env file or as environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function deleteCreator(username) {
  try {
    console.log(`\n🔍 Checking if creator "${username}" exists...`)
    
    // First, check if creator exists
    const { data: creator, error: fetchError } = await supabase
      .from('creators')
      .select('id, username, display_name')
      .eq('username', username)
      .single()

    if (fetchError) {
      if (fetchError.code === 'PGRST116') {
        console.log(`❌ Creator "${username}" not found in database`)
        return false
      }
      throw fetchError
    }

    if (!creator) {
      console.log(`❌ Creator "${username}" not found in database`)
      return false
    }

    console.log(`✅ Found creator: ${creator.display_name || creator.username} (ID: ${creator.id})`)
    console.log(`\n🗑️  Deleting creator "${username}"...`)

    // Delete the creator
    const { error: deleteError } = await supabase
      .from('creators')
      .delete()
      .eq('username', username)

    if (deleteError) {
      console.error('❌ Error deleting creator:', deleteError)
      throw deleteError
    }

    console.log(`✅ Successfully deleted creator "${username}" from database`)
    return true
  } catch (error) {
    console.error('❌ Failed to delete creator:', error)
    throw error
  }
}

// Get username from command line arguments
const username = process.argv[2]

if (!username) {
  console.error('Usage: node scripts/delete-creator.js <username>')
  console.error('Example: node scripts/delete-creator.js miamartin_1')
  process.exit(1)
}

// Run the deletion
deleteCreator(username)
  .then((success) => {
    if (success) {
      console.log('\n✨ Done!')
      process.exit(0)
    } else {
      process.exit(1)
    }
  })
  .catch((error) => {
    console.error('\n❌ Script failed:', error)
    process.exit(1)
  })


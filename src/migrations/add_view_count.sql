-- Migration: Add view_count to creators table and create increment function
-- Run this in your Supabase SQL Editor

-- Step 1: Add view_count column to creators table
ALTER TABLE creators 
ADD COLUMN IF NOT EXISTS view_count INTEGER DEFAULT 0;

-- Step 2: Create index for better performance
CREATE INDEX IF NOT EXISTS idx_creators_view_count ON creators(view_count DESC);

-- Step 3: Create RPC function to increment view count atomically
CREATE OR REPLACE FUNCTION increment_creator_view_count(creator_id UUID)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE creators
  SET view_count = COALESCE(view_count, 0) + 1
  WHERE id = creator_id;
END;
$$;

-- Step 4: Grant execute permission to authenticated and anon users
GRANT EXECUTE ON FUNCTION increment_creator_view_count(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION increment_creator_view_count(UUID) TO anon;

-- Step 5: Update the view if you have one (v_creators)
-- If you're using a view, you might need to recreate it to include view_count
-- This is optional and depends on your database setup


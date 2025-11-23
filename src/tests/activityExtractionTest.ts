/**
 * Activity Extraction System - Test Suite
 * Run this to test the activity extraction functionality
 */

import { extractActivitiesFromBio, getActivityDescription, generateActivitySummary, getExtractionStats } from '../utils/activityExtractor';

// Test bios with different scenarios
const testBios = [
  {
    name: "Multiple Activities",
    bio: "Hey! I offer b/g, g/g content, custom videos, sexting sessions, and dick ratings. No PPV - everything included! 💕",
    expected: ["1on1", "Lesbian", "Custom Content", "Sexting", "Dick Rating (Cock Rating)", "No ppv"]
  },
  {
    name: "Services Only",
    bio: "Available for video calls, custom content, and sexting. DM me for rates!",
    expected: ["Video Calls", "Custom Content", "Sexting"]
  },
  {
    name: "Sexual Acts",
    bio: "I do anal, blowjob videos, squirting content, and toy play. Subscribe to see it all!",
    expected: ["Anal", "Blowjob", "Squirting", "Toys"]
  },
  {
    name: "Body Types & Appearance",
    bio: "Petite Asian girl with tattoos and piercings. Natural redhead with small tits.",
    expected: ["Petite Skinny", "Asian", "Tattooed Girl", "Piercing (Pierced Nipples)", "Redhead (Gingers)", "Small Tits"]
  },
  {
    name: "Lifestyle & Interests",
    bio: "Fitness model and yoga instructor. Also a gamer girl who streams! College student content.",
    expected: ["Fitness (Gym Girl)", "Yoga", "Gamer Girl", "Streamer", "College Girl (Student)"]
  },
  {
    name: "BDSM & Fetish",
    bio: "Femdom mistress into BDSM, bondage, and kink. Foot fetish content available.",
    expected: ["Femdom & Mistress", "BDSM (Bondage)", "Fetish & Foot Fetish"]
  },
  {
    name: "No Activities (Generic)",
    bio: "Just a regular creator making awesome content. Subscribe to see more!",
    expected: []
  },
  {
    name: "False Positive Test (should NOT match 'anal')",
    bio: "I love analyzing data and being analytical. I'm a financial analyst.",
    expected: []
  },
  {
    name: "Aliases Test",
    bio: "Girl x girl content, one on one videos, 3way scenes, and strap-on action!",
    expected: ["Lesbian", "1on1", "3sums", "Pegging"]
  },
  {
    name: "Mixed Case & Variations",
    bio: "G/G CONTENT, Boy Girl Videos, THREESOME, custom requests, NO PPV!!!",
    expected: ["Lesbian", "1on1", "3sums", "Custom Content", "No ppv"]
  },
  {
    name: "Real Bio Example 1",
    bio: "💕 Hey babes! Your fav latina MILF here! I offer custom content, video calls, and sexting. All my content is included - no paywalls! Subscribe for b/g, solo, and toy content. Tattooed thick girl with big tits. 🔥",
    expected: ["Latina", "MILF (Mom)", "Custom Content", "Video Calls", "Sexting", "No ppv", "1on1", "Solo", "Toys", "Tattooed Girl", "Thick", "Big Tits (Busty Boobs)"]
  },
  {
    name: "Real Bio Example 2",
    bio: "Petite college girl ❤️ Amateur content only. G/G and solo videos. Fitness enthusiast and yoga lover. Dick ratings available! DM me 💬",
    expected: ["Petite Skinny", "College Girl (Student)", "Amateur", "Lesbian", "Solo", "Fitness (Gym Girl)", "Yoga", "Dick Rating (Cock Rating)"]
  }
];

// Run tests
export function runActivityExtractionTests() {
  console.log("🧪 Activity Extraction Test Suite\n");
  console.log("=" .repeat(80));
  
  let passed = 0;
  let failed = 0;
  
  testBios.forEach((test, index) => {
    console.log(`\nTest ${index + 1}: ${test.name}`);
    console.log("-".repeat(80));
    console.log(`Bio: "${test.bio}"`);
    console.log();
    
    const extracted = extractActivitiesFromBio(test.bio);
    
    console.log("Extracted Activities:");
    if (extracted.length === 0) {
      console.log("  (none)");
    } else {
      extracted.forEach(activity => {
        console.log(`  ✓ ${activity} - ${getActivityDescription(activity)}`);
      });
    }
    
    console.log();
    console.log("Expected Activities:");
    if (test.expected.length === 0) {
      console.log("  (none)");
    } else {
      test.expected.forEach(activity => {
        console.log(`  • ${activity}`);
      });
    }
    
    console.log();
    
    // Check if results match expected
    const extractedSet = new Set(extracted);
    const expectedSet = new Set(test.expected);
    
    const missing = test.expected.filter(a => !extractedSet.has(a));
    const extra = extracted.filter(a => !expectedSet.has(a));
    
    if (missing.length === 0 && extra.length === 0) {
      console.log("✅ PASSED");
      passed++;
    } else {
      console.log("❌ FAILED");
      failed++;
      
      if (missing.length > 0) {
        console.log(`  Missing: ${missing.join(", ")}`);
      }
      if (extra.length > 0) {
        console.log(`  Extra: ${extra.join(", ")}`);
      }
    }
    
    // Show activity summary
    if (extracted.length > 0) {
      console.log();
      console.log("Activity Summary:");
      console.log(`  "${generateActivitySummary(extracted)}"`);
    }
  });
  
  console.log("\n" + "=".repeat(80));
  console.log(`\n📊 Test Results: ${passed} passed, ${failed} failed out of ${testBios.length} tests`);
  console.log();
  
  if (failed === 0) {
    console.log("🎉 All tests passed!");
  } else {
    console.log("⚠️  Some tests failed. Review the results above.");
  }
  
  return { passed, failed, total: testBios.length };
}

// Test extraction statistics
export function testExtractionStats() {
  console.log("\n" + "=".repeat(80));
  console.log("📈 Extraction Statistics Test\n");
  
  const mockCreators = testBios.map(test => ({ bio: test.bio }));
  const stats = getExtractionStats(mockCreators);
  
  console.log(`Total Creators: ${stats.totalCreators}`);
  console.log(`Creators with Activities: ${stats.creatorsWithActivities}`);
  console.log(`Total Activities Extracted: ${stats.totalActivities}`);
  console.log(`Average Activities per Creator: ${stats.averageActivitiesPerCreator.toFixed(2)}`);
  console.log();
  console.log("Most Common Activities:");
  stats.mostCommonActivities.forEach((item, index) => {
    console.log(`  ${index + 1}. ${item.activity} (${item.count} occurrences)`);
  });
}

// Interactive test function
export function testSingleBio(bio: string) {
  console.log("\n🔍 Single Bio Test\n");
  console.log("=" .repeat(80));
  console.log(`Bio: "${bio}"`);
  console.log();
  
  const activities = extractActivitiesFromBio(bio);
  
  if (activities.length === 0) {
    console.log("❌ No activities detected");
    return activities;
  }
  
  console.log(`✅ Detected ${activities.length} activities:\n`);
  
  activities.forEach((activity, index) => {
    console.log(`${index + 1}. ${activity}`);
    console.log(`   Description: ${getActivityDescription(activity)}`);
    console.log();
  });
  
  console.log("Summary:");
  console.log(`"${generateActivitySummary(activities)}"`);
  
  return activities;
}

// Run all tests when imported
if (typeof window !== 'undefined') {
  console.log("Activity Extraction Test Suite Loaded");
  console.log("Run tests with:");
  console.log("  runActivityExtractionTests() - Run all tests");
  console.log("  testExtractionStats() - Test statistics");
  console.log("  testSingleBio('your bio here') - Test single bio");
}


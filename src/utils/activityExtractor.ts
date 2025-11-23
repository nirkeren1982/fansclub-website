import { activityKeywordMap } from '@/data/activityKeywords';

/**
 * Extract activities from creator bio using keyword matching
 * Returns array of standardized activity category names
 */
export function extractActivitiesFromBio(bio: string | null | undefined): string[] {
  if (!bio || typeof bio !== 'string') return [];
  
  const bioLower = bio.toLowerCase();
  const foundActivities = new Set<string>();
  
  // Iterate through all activity keywords
  Object.entries(activityKeywordMap).forEach(([, activityData]) => {
    const allKeywords = [...activityData.keywords, ...activityData.aliases];
    
    // Check if any keyword exists in bio
    const hasKeyword = allKeywords.some(keyword => {
      // Escape special regex characters
      const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      
      // Use word boundaries for accurate matching
      // Allow for common variations with slashes, hyphens, etc.
      const regex = new RegExp(`\\b${escapedKeyword}\\b`, 'i');
      return regex.test(bio);
    });
    
    if (hasKeyword) {
      foundActivities.add(activityData.category);
    }
  });
  
  return Array.from(foundActivities).sort();
}

/**
 * Get user-friendly description for an activity
 */
export function getActivityDescription(activity: string): string {
  const descriptions: Record<string, string> = {
    "Anal": "anal content and videos",
    "Lesbian": "girl-on-girl content",
    "1on1": "one-on-one boy-girl content",
    "3sums": "threesome content",
    "4sums": "foursome content",
    "Blowjob": "oral content",
    "BDSM (Bondage)": "BDSM and bondage content",
    "Fetish & Foot Fetish": "fetish and foot content",
    "Femdom & Mistress": "femdom and mistress content",
    "Sexting": "sexting sessions and messaging",
    "Dick Rating (Cock Rating)": "dick rating services",
    "Joi": "JOI (jerk off instruction) videos",
    "Squirting": "squirting content",
    "Pregnant": "pregnancy content",
    "Lactation": "lactation content",
    "Cosplay": "cosplay content",
    "Roleplay": "roleplay scenarios",
    "POV": "POV (point of view) content",
    "Solo": "solo content and masturbation",
    "Toys": "toy play and sex toy content",
    "No ppv": "no paywalls - all content included",
    "Custom Content": "custom personalized content",
    "Video Calls": "video calls and live sessions",
    "Amateur": "authentic amateur content",
    "Petite Skinny": "petite and slim body type",
    "Thick": "thick and curvy body type",
    "BBW (Chubby & Fat)": "BBW and plus-size content",
    "Big Tits (Busty Boobs)": "big tits and busty content",
    "Small Tits": "small tits content",
    "Big Ass": "big ass content",
    "Tattooed Girl": "tattooed content",
    "Piercing (Pierced Nipples)": "piercing and body modification content",
    "Gamer Girl": "gamer girl content",
    "Fitness (Gym Girl)": "fitness and gym content",
    "Yoga": "yoga content",
    "Asian": "Asian creators",
    "Latina": "Latina creators",
    "Black (Ebony)": "Black/Ebony creators",
    "Arab": "Arab creators",
    "Blonde": "blonde content",
    "Brunette": "brunette content",
    "Redhead (Gingers)": "redhead content",
    "Teen (Young)": "teen (18+) content",
    "MILF (Mom)": "MILF content",
    "College Girl (Student)": "college girl content",
    "Cheerleader": "cheerleader content",
    "Shemale": "trans content",
    "Ahegao": "ahegao content",
    "Alt": "alternative style content",
    "ASMR": "ASMR content",
    "Bikini Barista": "bikini content",
    "Bimbo": "bimbo style content",
    "Bisexual": "bisexual content",
    "Braces": "braces content",
    "Celebrity": "celebrity content",
    "Cheap": "affordable subscription",
    "Couple": "couples content",
    "Crossdresser (Sissy)": "crossdressing content",
    "Cuckold & Hotwife": "cuckold and hotwife content",
    "Curly Hair": "curly hair content",
    "E-girls": "e-girl content",
    "Exhibitionist": "exhibitionist and public content",
    "FBB": "female bodybuilder content",
    "Femboy": "femboy content",
    "Flight Attendant (Air Hostess)": "flight attendant content",
    "Gay": "gay content",
    "Goth": "goth content",
    "Granny": "mature/granny content",
    "Gymnast": "gymnast content",
    "Hairy": "hairy/natural content",
    "Hentai": "hentai and anime content",
    "Hijab": "hijab content",
    "Hmong": "Hmong content",
    "Incest": "taboo roleplay content",
    "Korea": "Korean content",
    "Ladyboy": "ladyboy content",
    "Latex": "latex content",
    "Lingerie": "lingerie content",
    "Massage": "massage content",
    "Midget": "petite stature content",
    "Military": "military content",
    "Mom Daughter": "mom/daughter roleplay",
    "Muslim": "Muslim content",
    "Pegging": "pegging content",
    "Persian": "Persian content",
    "Pornstar": "professional pornstar",
    "Qos": "QOS content",
    "Swinger": "swinger lifestyle content",
    "Teacher": "teacher roleplay content",
    "Tiktoker": "TikTok creator",
    "Trans": "transgender content",
    "Twins": "twin content",
    "UFC": "UFC fighter content",
    "Waifu": "anime waifu content",
    "Youtuber": "YouTube creator",
    "Streamer": "live streaming content"
  };
  
  return descriptions[activity] || activity.toLowerCase().replace(/[()]/g, '').trim() + " content";
}

/**
 * Generate natural language summary of activities
 */
export function generateActivitySummary(activities: string[]): string {
  if (activities.length === 0) return "";
  if (activities.length === 1) return getActivityDescription(activities[0]);
  if (activities.length === 2) {
    return `${getActivityDescription(activities[0])} and ${getActivityDescription(activities[1])}`;
  }
  
  const lastActivity = activities[activities.length - 1];
  const otherActivities = activities.slice(0, -1);
  return `${otherActivities.map(a => getActivityDescription(a)).join(", ")}, and ${getActivityDescription(lastActivity)}`;
}

/**
 * Get activity icon/emoji for visual representation
 */
export function getActivityIcon(activity: string): string {
  const icons: Record<string, string> = {
    "Anal": "🔥",
    "Lesbian": "💕",
    "1on1": "👫",
    "3sums": "👥",
    "4sums": "👥",
    "Blowjob": "💋",
    "BDSM (Bondage)": "⛓️",
    "Fetish & Foot Fetish": "👠",
    "Femdom & Mistress": "👑",
    "Sexting": "💬",
    "Dick Rating (Cock Rating)": "⭐",
    "Joi": "🎬",
    "Squirting": "💦",
    "Pregnant": "🤰",
    "Lactation": "🍼",
    "Cosplay": "🎭",
    "Roleplay": "🎬",
    "POV": "📹",
    "Solo": "💃",
    "Toys": "🎁",
    "No ppv": "✨",
    "Custom Content": "🎨",
    "Video Calls": "📞",
    "Amateur": "🎥",
    "Fitness (Gym Girl)": "💪",
    "Yoga": "🧘",
    "Gamer Girl": "🎮",
    "Asian": "🌸",
    "Latina": "🌹",
    "Cheap": "💰",
    "Couple": "💑",
    "Streamer": "📡",
    "Tiktoker": "📱",
    "Youtuber": "🎬"
  };
  
  return icons[activity] || "✨";
}

/**
 * Get activity color for styling (Tailwind CSS classes)
 */
export function getActivityColor(activity: string): string {
  // Sexual acts - red/pink
  if (["Anal", "Blowjob", "Lesbian", "1on1", "3sums", "4sums", "Squirting"].includes(activity)) {
    return "bg-red-100 text-red-700 border-red-300";
  }
  
  // Services - blue
  if (["Sexting", "Dick Rating (Cock Rating)", "Custom Content", "Video Calls", "Joi"].includes(activity)) {
    return "bg-blue-100 text-blue-700 border-blue-300";
  }
  
  // BDSM/Fetish - purple
  if (["BDSM (Bondage)", "Fetish & Foot Fetish", "Femdom & Mistress", "Pegging"].includes(activity)) {
    return "bg-purple-100 text-purple-700 border-purple-300";
  }
  
  // Special features - green
  if (["No ppv", "Cheap", "Amateur"].includes(activity)) {
    return "bg-green-100 text-green-700 border-green-300";
  }
  
  // Body types - orange
  if (["Petite Skinny", "Thick", "BBW (Chubby & Fat)", "Big Tits (Busty Boobs)", "Big Ass", "Small Tits"].includes(activity)) {
    return "bg-orange-100 text-orange-700 border-orange-300";
  }
  
  // Appearance - yellow
  if (["Tattooed Girl", "Piercing (Pierced Nipples)", "Blonde", "Brunette", "Redhead (Gingers)", "Hairy"].includes(activity)) {
    return "bg-yellow-100 text-yellow-700 border-yellow-300";
  }
  
  // Lifestyle - teal
  if (["Fitness (Gym Girl)", "Yoga", "Gamer Girl", "Student", "Teacher", "Military"].includes(activity.replace("College Girl (Student)", "Student"))) {
    return "bg-teal-100 text-teal-700 border-teal-300";
  }
  
  // Ethnicity - indigo
  if (["Asian", "Latina", "Black (Ebony)", "Arab", "Persian", "Korea", "Hmong", "Muslim"].includes(activity)) {
    return "bg-indigo-100 text-indigo-700 border-indigo-300";
  }
  
  // Age/Role - pink
  if (["Teen (Young)", "MILF (Mom)", "College Girl (Student)", "Granny"].includes(activity)) {
    return "bg-pink-100 text-pink-700 border-pink-300";
  }
  
  // Default - gray
  return "bg-gray-100 text-gray-700 border-gray-300";
}

/**
 * Convert activity to URL-friendly slug
 */
export function activityToSlug(activity: string): string {
  return activity
    .toLowerCase()
    .replace(/[()&]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Validate if activity exists in our master list
 */
export function isValidActivity(activity: string): boolean {
  return Object.values(activityKeywordMap).some(data => data.category === activity);
}

/**
 * Get extraction statistics for debugging
 */
export function getExtractionStats(creators: Array<{ bio: string | null }>): {
  totalCreators: number;
  creatorsWithActivities: number;
  totalActivities: number;
  averageActivitiesPerCreator: number;
  mostCommonActivities: Array<{ activity: string; count: number }>;
} {
  const activityCounts: Record<string, number> = {};
  let creatorsWithActivities = 0;
  let totalActivities = 0;
  
  creators.forEach(creator => {
    const activities = extractActivitiesFromBio(creator.bio);
    if (activities.length > 0) {
      creatorsWithActivities++;
      totalActivities += activities.length;
      
      activities.forEach(activity => {
        activityCounts[activity] = (activityCounts[activity] || 0) + 1;
      });
    }
  });
  
  const mostCommonActivities = Object.entries(activityCounts)
    .map(([activity, count]) => ({ activity, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);
  
  return {
    totalCreators: creators.length,
    creatorsWithActivities,
    totalActivities,
    averageActivitiesPerCreator: creatorsWithActivities > 0 
      ? totalActivities / creatorsWithActivities 
      : 0,
    mostCommonActivities
  };
}


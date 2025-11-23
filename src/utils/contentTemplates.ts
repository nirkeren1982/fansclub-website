import type { Creator } from '@/lib/api';
import { generateActivitySummary, getActivityDescription } from './activityExtractor';

/**
 * Generate creator overview paragraph
 */
export function generateCreatorOverview(creator: Creator): string {
  const name = creator.display_name || creator.username;
  const username = creator.username;
  const price = creator.subscription_price;
  const categories = creator.categories || [];
  const activities = creator.activities || [];
  
  let overview = `${name} (@${username}) is `;
  
  // Add verification status
  if (creator.is_verified) {
    overview += "a verified ";
  } else {
    overview += "an ";
  }
  
  // Add categories
  if (categories.length > 0) {
    const categoryText = categories.slice(0, 3).join(", ");
    overview += `OnlyFans creator specializing in ${categoryText} content`;
  } else {
    overview += "OnlyFans content creator";
  }
  
  // Add activities if available
  if (activities.length > 0) {
    overview += `. ${name} offers ${generateActivitySummary(activities)}`;
  }
  
  // Add subscription info
  if (price !== null && price !== undefined) {
    if (price === 0) {
      overview += `. Subscribe for FREE to access exclusive content`;
    } else {
      overview += `. Subscribe for $${price.toFixed(2)}/month to access exclusive content`;
    }
  }
  
  // Highlight no PPV if applicable
  if (activities.includes("No ppv")) {
    overview += " with no paywalls or additional charges";
  }
  
  overview += ".";
  
  return overview;
}

/**
 * Generate content style description
 */
export function generateContentStyleDescription(creator: Creator): string {
  const name = creator.display_name || creator.username;
  const categories = creator.categories || [];
  const activities = creator.activities || [];
  const photosCount = creator.photos_count || 0;
  const videosCount = creator.videos_count || 0;
  
  let description = `## What to Expect from ${name}'s OnlyFans\n\n`;
  
  description += `${name} creates diverse content `;
  
  if (activities.length > 0) {
    description += `featuring ${generateActivitySummary(activities)}. `;
  } else if (categories.length > 0) {
    description += `in the ${categories.slice(0, 3).join(", ")} categories. `;
  }
  
  description += "\n\n### Content Highlights:\n\n";
  
  // List activities as bullet points
  if (activities.length > 0) {
    activities.slice(0, 6).forEach(activity => {
      description += `• **${activity}**: ${getActivityDescription(activity)}\n`;
    });
  }
  
  // Add content stats
  if (photosCount > 0 || videosCount > 0) {
    description += `• **Content Library**: `;
    const contentParts = [];
    if (photosCount > 0) contentParts.push(`${photosCount}+ photos`);
    if (videosCount > 0) contentParts.push(`${videosCount}+ videos`);
    description += contentParts.join(" and ") + "\n";
  }
  
  // Add categories
  if (categories.length > 0) {
    description += `• **Categories**: ${categories.join(", ")}\n`;
  }
  
  // Add interaction note
  description += `• **Personal Touch**: Direct interaction with subscribers\n`;
  
  return description;
}

/**
 * Generate activity section (NEW)
 */
export function generateActivitySection(creator: Creator): string {
  const activities = creator.activities || [];
  
  if (activities.length === 0) return "";
  
  const name = creator.display_name || creator.username;
  
  let section = `## Content & Services Offered\n\n`;
  section += `${name} provides a variety of content and services for subscribers:\n\n`;
  
  activities.forEach(activity => {
    section += `### ${activity}\n`;
    section += `${getActivityDescription(activity).charAt(0).toUpperCase() + getActivityDescription(activity).slice(1)}.\n\n`;
  });
  
  return section;
}

/**
 * Generate subscription guide
 */
export function generateSubscriptionGuide(creator: Creator): string {
  const name = creator.display_name || creator.username;
  const price = creator.subscription_price;
  const activities = creator.activities || [];
  const hasNoPPV = activities.includes("No ppv");
  const hasCustom = activities.includes("Custom Content");
  const hasSexting = activities.includes("Sexting");
  const hasVideoCalls = activities.includes("Video Calls");
  
  let guide = `## Subscription Information\n\n`;
  
  // Price info
  if (price !== null && price !== undefined) {
    if (price === 0) {
      guide += `### FREE Subscription\n\n`;
      guide += `${name}'s OnlyFans is completely FREE to subscribe! Get instant access to exclusive content without paying a monthly fee.\n\n`;
    } else {
      guide += `### Subscription Price: $${price.toFixed(2)}/month\n\n`;
      guide += `Subscribe to ${name}'s OnlyFans for just $${price.toFixed(2)} per month and unlock exclusive content.\n\n`;
    }
  }
  
  guide += `### What's Included:\n\n`;
  
  // Standard inclusions
  guide += `✓ Full access to ${name}'s exclusive content library\n`;
  guide += `✓ Regular updates and new content\n`;
  guide += `✓ Direct messaging with ${name}\n`;
  
  // Activity-based inclusions
  if (hasNoPPV) {
    guide += `✓ **No paywalls** - all content included in subscription\n`;
  }
  
  if (activities.length > 0) {
    guide += `✓ ${generateActivitySummary(activities).charAt(0).toUpperCase() + generateActivitySummary(activities).slice(1)}\n`;
  }
  
  guide += `✓ Cancel anytime - no long-term commitment\n\n`;
  
  // Additional services
  if (hasCustom || hasSexting || hasVideoCalls) {
    guide += `### Additional Services:\n\n`;
    if (hasCustom) guide += `• Custom content requests available\n`;
    if (hasSexting) guide += `• Sexting sessions offered\n`;
    if (hasVideoCalls) guide += `• Video call sessions available\n`;
    guide += `\n`;
  }
  
  guide += `### How to Subscribe:\n\n`;
  guide += `1. Click the "View on OnlyFans" button above\n`;
  guide += `2. Create an OnlyFans account if you don't have one\n`;
  guide += `3. Subscribe to ${name}'s profile\n`;
  guide += `4. Enjoy exclusive content immediately!\n`;
  
  return guide;
}

/**
 * FAQ item interface
 */
export interface FAQ {
  question: string;
  answer: string;
}

/**
 * Generate FAQs
 */
export function generateFAQs(creator: Creator): FAQ[] {
  const name = creator.display_name || creator.username;
  const username = creator.username;
  const price = creator.subscription_price;
  const activities = creator.activities || [];
  const hasNoPPV = activities.includes("No ppv");
  const hasCustom = activities.includes("Custom Content");
  
  const faqs: FAQ[] = [];
  
  // Activity types FAQ
  if (activities.length > 0) {
    faqs.push({
      question: `What types of content does ${username} offer?`,
      answer: `${name} offers ${generateActivitySummary(activities)} for subscribers.`
    });
  }
  
  // No PPV FAQ
  if (hasNoPPV) {
    faqs.push({
      question: `Does ${username} charge extra for content?`,
      answer: `No, ${name} includes all content in the subscription with no paywalls or PPV charges.`
    });
  }
  
  // Custom content FAQ
  if (hasCustom) {
    faqs.push({
      question: `Does ${username} create custom content?`,
      answer: `Yes, ${name} offers custom personalized content. Send a direct message to discuss your custom request.`
    });
  }
  
  // Subscription price FAQ
  faqs.push({
    question: `How much does ${username}'s OnlyFans cost?`,
    answer: price === 0 
      ? `${name}'s OnlyFans is completely FREE to subscribe!` 
      : `${name}'s subscription costs $${price?.toFixed(2)}/month.`
  });
  
  // Verification FAQ
  if (creator.is_verified) {
    faqs.push({
      question: `Is ${username} verified?`,
      answer: `Yes, ${name} is a verified creator on OnlyFans, ensuring authenticity and quality.`
    });
  }
  
  // Content update FAQ
  faqs.push({
    question: `How often does ${username} post?`,
    answer: `${name} regularly updates their OnlyFans with new content. Subscribe to see the latest posts and updates.`
  });
  
  // Interaction FAQ
  faqs.push({
    question: `Can I message ${username} directly?`,
    answer: `Yes, subscribers can send direct messages to ${name} on OnlyFans for personal interaction.`
  });
  
  // Cancel FAQ
  faqs.push({
    question: `Can I cancel my subscription to ${username}?`,
    answer: `Yes, you can cancel your subscription at any time. There are no long-term commitments.`
  });
  
  return faqs;
}

/**
 * Generate stats highlights
 */
export function generateStatsHighlights(creator: Creator): Array<{
  label: string;
  value: string;
  icon: string;
}> {
  const stats = [];
  
  // Subscription price
  if (creator.subscription_price !== null && creator.subscription_price !== undefined) {
    stats.push({
      label: "Subscription",
      value: creator.subscription_price === 0 ? "FREE" : `$${creator.subscription_price.toFixed(2)}/mo`,
      icon: "💰"
    });
  }
  
  // Likes
  if (creator.likes_count && creator.likes_count > 0) {
    stats.push({
      label: "Likes",
      value: creator.likes_count.toLocaleString(),
      icon: "❤️"
    });
  }
  
  // Photos
  if (creator.photos_count && creator.photos_count > 0) {
    stats.push({
      label: "Photos",
      value: creator.photos_count.toLocaleString(),
      icon: "📷"
    });
  }
  
  // Videos
  if (creator.videos_count && creator.videos_count > 0) {
    stats.push({
      label: "Videos",
      value: creator.videos_count.toLocaleString(),
      icon: "🎥"
    });
  }
  
  // Verification
  if (creator.is_verified) {
    stats.push({
      label: "Status",
      value: "Verified",
      icon: "✓"
    });
  }
  
  // Activities count
  if (creator.activities && creator.activities.length > 0) {
    stats.push({
      label: "Services",
      value: `${creator.activities.length} types`,
      icon: "✨"
    });
  }
  
  return stats;
}

/**
 * Generate why subscribe section
 */
export function generateWhySubscribe(creator: Creator): string[] {
  const name = creator.display_name || creator.username;
  const activities = creator.activities || [];
  const reasons = [];
  
  // Verification
  if (creator.is_verified) {
    reasons.push(`Verified creator - authentic ${name} content`);
  }
  
  // No PPV
  if (activities.includes("No ppv")) {
    reasons.push("No paywalls or hidden charges - all content included");
  }
  
  // Content variety
  if (activities.length > 3) {
    reasons.push(`Diverse content offering ${activities.length}+ different types`);
  }
  
  // Regular updates
  if (creator.photos_count && creator.photos_count > 50) {
    reasons.push("Extensive content library with regular updates");
  }
  
  // Personal interaction
  if (activities.includes("Sexting") || activities.includes("Custom Content")) {
    reasons.push("Direct personal interaction and custom requests");
  }
  
  // Free or affordable
  if (creator.subscription_price === 0) {
    reasons.push("Completely FREE to subscribe");
  } else if (creator.subscription_price && creator.subscription_price < 10) {
    reasons.push(`Affordable subscription at just $${creator.subscription_price.toFixed(2)}/month`);
  }
  
  // Engagement
  if (creator.likes_count && creator.likes_count > 10000) {
    reasons.push(`Highly popular with ${creator.likes_count.toLocaleString()}+ likes`);
  }
  
  // Default reasons if not enough specific ones
  if (reasons.length < 3) {
    reasons.push(`Exclusive content from ${name}`);
    reasons.push("Cancel anytime - no commitment");
    reasons.push("Instant access after subscribing");
  }
  
  return reasons.slice(0, 6);
}

/**
 * Generate SEO meta description
 */
export function generateMetaDescription(creator: Creator): string {
  const name = creator.display_name || creator.username;
  const username = creator.username;
  const price = creator.subscription_price;
  const activities = creator.activities || [];
  const categories = creator.categories || [];
  
  let description = `${name} (@${username}) OnlyFans`;
  
  // Add price
  if (price === 0) {
    description += " - FREE subscription";
  } else if (price) {
    description += ` - $${price.toFixed(2)}/month`;
  }
  
  // Add activities
  if (activities.length > 0) {
    description += `. Offers ${activities.slice(0, 3).join(", ")} content`;
  } else if (categories.length > 0) {
    description += `. ${categories.slice(0, 2).join(", ")} creator`;
  }
  
  // Add verification
  if (creator.is_verified) {
    description += ". Verified creator";
  }
  
  // Add stats
  if (creator.likes_count && creator.likes_count > 1000) {
    description += ` with ${creator.likes_count.toLocaleString()}+ likes`;
  }
  
  description += ". Subscribe now on FansClubOnly.";
  
  // Truncate to 160 characters
  if (description.length > 160) {
    description = description.substring(0, 157) + "...";
  }
  
  return description;
}

/**
 * Generate page title
 */
export function generatePageTitle(creator: Creator): string {
  const name = creator.display_name || creator.username;
  const username = creator.username;
  const price = creator.subscription_price;
  
  let title = `${name} (@${username}) OnlyFans`;
  
  if (price === 0) {
    title += " - FREE";
  } else if (price) {
    title += ` - $${price.toFixed(2)}/mo`;
  }
  
  if (creator.is_verified) {
    title += " ✓";
  }
  
  title += " | FansClubOnly";
  
  return title;
}


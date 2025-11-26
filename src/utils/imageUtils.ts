/**
 * Get the proxied image URL for a creator
 * This hides the external source URL from users
 * Uses the API proxy route that fetches HQ images from the database
 */
export function getCreatorImageUrl(username: string | null | undefined): string {
  if (!username) {
    return getDefaultImageUrl();
  }

  // Use API proxy route to hide external source URLs
  // The proxy will fetch profile_image_url_hq (or fallback to profile_image_url) from database
  return `/api/creator-image/${encodeURIComponent(username)}`;
}

/**
 * Get default fallback image URL
 */
export function getDefaultImageUrl(): string {
  // Use og-default.jpg as fallback if placeholder doesn't exist
  return "/og-default.jpg";
}

/**
 * Get image URL with fallback
 */
export function getCreatorImageWithFallback(
  username: string | null | undefined,
  fallbackUrl?: string | null
): string {
  if (username) {
    return getCreatorImageUrl(username);
  }
  return fallbackUrl || getDefaultImageUrl();
}

/**
 * Handle image load error - try fallback options
 * This is used in the onError handler of img tags
 * First tries original profile_image_url, then placeholder
 */
export function handleImageError(
  event: React.SyntheticEvent<HTMLImageElement>,
  username: string | null | undefined,
  fallbackUrl?: string | null
): void {
  const img = event.currentTarget;
  const currentSrc = img.src;
  
  // If we were trying the proxy URL and it failed, try the original URL
  if (currentSrc.includes('/api/creator-image/') && fallbackUrl) {
    img.src = fallbackUrl;
    return;
  }
  
  // If original URL also failed, use placeholder
  img.src = getDefaultImageUrl();
}


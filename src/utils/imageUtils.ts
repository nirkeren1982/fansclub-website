/**
 * Get creator profile image URL
 * Uses existing /images/ folder (images are already there)
 * When HQ images are added to /images-hq/, they'll be used automatically
 */
export function getCreatorImageUrl(username: string | null | undefined): string {
  if (!username) {
    return getDefaultImageUrl();
  }

  // Use existing images folder - images are already stored there
  return `/images/${username}.webp`;
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
 * Handle image load error - tries fallback locations
 * Fallback chain: HQ extensions → LQ folder → original URL → placeholder
 */
export function handleImageError(
  event: React.SyntheticEvent<HTMLImageElement>,
  username: string | null | undefined,
  fallbackUrl?: string | null
): void {
  const img = event.currentTarget;
  const currentSrc = img.src;
  
  if (!username) {
    img.src = getDefaultImageUrl();
    return;
  }

  try {
    const url = new URL(currentSrc, window.location.origin);
    const pathname = url.pathname;
    const currentExt = pathname.split('.').pop()?.split('?')[0] || 'webp';
    const extensions = ['webp', 'jpg', 'jpeg', 'png'];
    const currentIndex = extensions.indexOf(currentExt);
    
    // If trying HQ images folder - fallback to LQ images folder
    if (pathname.includes('/images-hq/')) {
      // Try other extensions in HQ first
      if (currentIndex < extensions.length - 1) {
        const nextExt = extensions[currentIndex + 1];
        img.src = `/images-hq/${username}.${nextExt}`;
        return;
      }
      // All HQ extensions tried, use LQ images folder
      img.src = `/images/${username}.webp`;
      return;
    }
    
    // If trying LQ images folder - try other extensions
    if (pathname.includes('/images/') && !pathname.includes('/images-hq/')) {
      if (currentIndex < extensions.length - 1) {
        const nextExt = extensions[currentIndex + 1];
        img.src = `/images/${username}.${nextExt}`;
        return;
      }
      // All LQ extensions tried, try original URL from database
      if (fallbackUrl) {
        img.src = fallbackUrl;
        return;
      }
    }
    
    // Final fallback to placeholder
    img.src = getDefaultImageUrl();
  } catch (error) {
    // URL parsing failed - try LQ images directly, then placeholder
    img.src = `/images/${username}.webp`;
  }
}


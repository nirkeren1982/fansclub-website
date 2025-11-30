/**
 * Get creator profile image URL
 * Tries: profile_images_hq → images → placeholder
 * Just like the public/images folder structure
 */
export function getCreatorImageUrl(username: string | null | undefined): string {
  if (!username) {
    return getDefaultImageUrl();
  }

  // Try profile_images_hq folder first (HQ images from DB column)
  return `/profile_images_hq/${username}.webp`;
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
 * Fallback chain: profile_images_hq extensions → images folder → original URL → placeholder
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
    
    // If trying profile_images_hq folder - try alternative extensions first
    if (pathname.includes('/profile_images_hq/')) {
      if (currentIndex < extensions.length - 1) {
        const nextExt = extensions[currentIndex + 1];
        img.src = `/profile_images_hq/${username}.${nextExt}`;
        return;
      }
      // All HQ extensions tried, fallback to /images/ folder (LQ)
      img.src = `/images/${username}.webp`;
      return;
    }
    
    // If trying /images/ folder - try other extensions
    if (pathname.includes('/images/') && !pathname.includes('/profile_images_hq/')) {
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
    // URL parsing failed - try /images/ folder directly, then placeholder
    img.src = `/images/${username}.webp`;
  }
}


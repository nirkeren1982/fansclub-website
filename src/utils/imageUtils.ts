/**
 * Get creator profile image URL from high-quality images folder
 * Tries common image extensions: webp, jpg, jpeg, png
 * Falls back to low-quality images folder, then to default image
 */
export function getCreatorImageUrl(username: string | null | undefined): string {
  if (!username) {
    return getDefaultImageUrl();
  }

  // Try high-quality images first
  // The browser will try to load these, and if 404, the onError handler will catch it
  // We'll use webp first as it's most common for scraped images
  return `/images-hq/${username}.webp`;
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
 * Handle image load error by trying alternative extensions and fallback locations
 * This is used in the onError handler of img tags
 * Tries: HQ images (different extensions) → LQ images → placeholder
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

  // Extract current extension from src
  const currentPath = new URL(currentSrc, window.location.origin).pathname;
  const currentExt = currentPath.split('.').pop()?.split('?')[0] || '';
  
  // Try alternative extensions for HQ images
  const extensions = ['webp', 'jpg', 'jpeg', 'png'];
  const currentIndex = extensions.indexOf(currentExt);
  
  if (currentPath.includes('/images-hq/')) {
    // We're trying HQ images - try next extension
    if (currentIndex < extensions.length - 1) {
      const nextExt = extensions[currentIndex + 1];
      img.src = `/images-hq/${username}.${nextExt}`;
      return;
    }
    // All HQ extensions tried, fallback to LQ images
    img.src = `/images/${username}.webp`;
    return;
  }
  
  if (currentPath.includes('/images/')) {
    // We're trying LQ images - try next extension
    if (currentIndex < extensions.length - 1) {
      const nextExt = extensions[currentIndex + 1];
      img.src = `/images/${username}.${nextExt}`;
      return;
    }
    // All LQ extensions tried, try original URL if provided
    if (fallbackUrl) {
      img.src = fallbackUrl;
      return;
    }
  }
  
  // All options exhausted, use placeholder
  img.src = getDefaultImageUrl();
}


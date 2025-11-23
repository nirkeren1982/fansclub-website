/**
 * Get creator profile image URL from local images folder
 * Tries common image extensions: jpg, jpeg, png, webp
 * Falls back to default image if not found
 */
export function getCreatorImageUrl(username: string | null | undefined): string {
  if (!username) {
    return getDefaultImageUrl();
  }

  // Try common image extensions
  // The browser will try to load these, and if 404, the onError handler will catch it
  // We'll use webp first as it's most common for scraped images
  const extensions = ['webp', 'jpg', 'jpeg', 'png'];
  
  // Return the first extension (webp) - browser will handle 404 fallback
  // The actual fallback logic is handled in the component's onError handler
  return `/images/${username}.webp`;
}

/**
 * Get default fallback image URL
 */
export function getDefaultImageUrl(): string {
  return "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop";
}

/**
 * Handle image load error by trying alternative extensions
 * This is used in the onError handler of img tags
 */
export function handleImageError(
  event: React.SyntheticEvent<HTMLImageElement>,
  username: string | null | undefined
): void {
  const img = event.currentTarget;
  const currentSrc = img.src;
  
  if (!username) {
    img.src = getDefaultImageUrl();
    return;
  }

  // Extract current extension from src
  const currentExt = currentSrc.split('.').pop()?.split('?')[0] || '';
  
  // Try alternative extensions
  const extensions = ['webp', 'jpg', 'jpeg', 'png'];
  const currentIndex = extensions.indexOf(currentExt);
  
  if (currentIndex < extensions.length - 1) {
    // Try next extension
    const nextExt = extensions[currentIndex + 1];
    img.src = `/images/${username}.${nextExt}`;
  } else {
    // All extensions tried, use default
    img.src = getDefaultImageUrl();
  }
}


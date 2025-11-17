# Typography System Documentation

## Overview
Complete typography system with desktop and mobile responsive sizes.

---

## Typography Scale

### Desktop Sizes

| Element | Size | Font Weight | Color | Usage |
|---------|------|-------------|-------|-------|
| **H1** | 70px | 900 (Black) | hsl(195 100% 42%) | "Creator Search Engine" |
| **H2** | 50px | 700 (Bold) | #000000 (Black) | "Find Creators Fast" |
| **H3** | 38px | 700 (Bold) | #000000 (Black) | "Trending Creators", Creator Username |
| **H4** | 22px | 600 (Semi-bold) | hsl(0 0% 45%) | Subheadings, descriptions |
| **H5** | 18px | 500 (Medium) | Current color | Placeholder text, labels |
| **Body** | 16px | 400 (Regular) | Current color | Header navigation |
| **Footer** | 14px | 400 (Regular) | Current color | Footer text |
| **Bio** | 12px | 400 (Regular) | hsl(0 0% 45%) | Creator bio text |

### Mobile Sizes

| Element | Size | Font Weight | Color | Usage |
|---------|------|-------------|-------|-------|
| **H1** | 42px | 900 (Black) | hsl(195 100% 42%) | "Creator Search Engine" |
| **H2** | 32px | 700 (Bold) | #000000 (Black) | "Find Creators Fast" |
| **H3** | 28px | 700 (Bold) | #000000 (Black) | "Trending Creators", Creator Username |
| **H4** | 18px | 600 (Semi-bold) | hsl(0 0% 45%) | Subheadings, descriptions |
| **H5** | 16px | 500 (Medium) | Current color | Placeholder text, labels |
| **Body** | 14px | 400 (Regular) | Current color | Header navigation |
| **Footer** | 14px | 400 (Regular) | Current color | Footer text |
| **Bio** | 11px | 400 (Regular) | hsl(0 0% 45%) | Creator bio text |

---

## Implementation

### Tailwind Classes

All typography uses custom Tailwind classes defined in `tailwind.config.ts`:

```tsx
// Desktop
text-h1-desktop    // 70px
text-h2-desktop    // 50px
text-h3-desktop    // 38px
text-h4-desktop    // 22px
text-h5-desktop    // 18px
text-body-desktop  // 16px
text-bio-desktop   // 12px

// Mobile
text-h1-mobile     // 42px
text-h2-mobile     // 32px
text-h3-mobile     // 28px
text-h4-mobile     // 18px
text-h5-mobile     // 16px
text-body-mobile   // 14px
text-bio-mobile    // 11px
```

### Responsive Usage

```tsx
// Example: Responsive heading
<h1 className="text-h1-mobile md:text-h1-desktop">
  Creator Search Engine
</h1>

// Example: Responsive body text
<p className="text-body-mobile md:text-body-desktop">
  Header navigation text
</p>
```

---

## Component Usage

### Header
- **Font Size:** 16px (desktop), 14px (mobile)
- **Implementation:** `text-base` class
- **Location:** Navigation links

### Footer
- **Font Size:** 14px (all sizes)
- **Implementation:** `text-sm md:text-base` class
- **Location:** All footer text

### Hero Section
- **H1:** "Creator Search Engine" - 70px desktop, 42px mobile
- **H2:** "Find Creators Fast" - 50px desktop, 32px mobile
- **H4:** "Search by name..." - 22px desktop, 18px mobile
- **H5:** Placeholder text - 18px desktop, 16px mobile

### Trending Creators
- **H3:** "Trending Creators" - 38px desktop, 28px mobile
- **H4:** "Discover the most popular..." - 22px desktop, 18px mobile

### Creator Profile Page
- **H3:** Creator username - 38px desktop, 28px mobile
- **P:** Creator bio - 12px desktop, 11px mobile
- **Color:** hsl(0 0% 45%) for bio text

---

## Color Palette

### Primary Colors
- **Primary Blue:** `hsl(195 100% 42%)` - Used for H1 "Creator Search Engine"
- **Black:** `#000000` - Used for H2, H3 headings
- **Gray:** `hsl(0 0% 45%)` - Used for H4, bio text

### CSS Variables
- `--muted-foreground`: `hsl(0 0% 45%)` - Used for muted text
- `--foreground`: Default text color

---

## Mobile Responsiveness

### Scaling Strategy
- **Desktop to Mobile ratio:** ~60-70% reduction
- **H1:** 70px → 42px (60% of desktop)
- **H2:** 50px → 32px (64% of desktop)
- **H3:** 38px → 28px (74% of desktop)
- **H4:** 22px → 18px (82% of desktop)

### Breakpoints
- **Mobile:** Default (< 768px)
- **Desktop:** `md:` breakpoint (≥ 768px)

---

## Files Modified

1. **tailwind.config.ts** - Added custom fontSize definitions
2. **Header.tsx** - Updated to 16px font size
3. **Footer.tsx** - Updated to 14px font size
4. **Hero.tsx** - Updated H1, H2, H4, H5 typography
5. **TrendingCreators.tsx** - Updated H3, H4 typography
6. **CreatorProfile.tsx** - Updated H3 username, P bio typography

---

## Testing

### Desktop View
- Verify all headings display at correct sizes
- Check color accuracy (blue, black, gray)
- Ensure proper font weights

### Mobile View
- Test responsive scaling
- Verify text remains readable
- Check line heights and spacing

---

## Notes

- All pixel sizes are for desktop by default
- Mobile sizes are automatically scaled down
- Colors use HSL format for consistency
- Font weights follow semantic hierarchy
- Line heights optimized for readability

---

**Last Updated:** November 17, 2024


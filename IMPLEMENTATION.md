# Xiaomi S12 Ultra - Interactive Landing Page

## Features Implemented

✅ Full-screen video background (100vw x 100vh)
✅ Video autoplay with muted audio, no controls
✅ GSAP ScrollTrigger for video playback sync with scroll (optimized with frame throttling)
✅ Lenis smooth scroll implementation with reduced sensitivity
✅ Dark overlay on video
✅ Typography overlays:
   - Top-left: "Xiaomi | S12 Ultra"
   - Center: "Crafted Beyond Limits"
✅ Advanced scroll tracking system:
   - Vertical progress bar (left side)
   - Circular percentage indicator (top right)
   - Current section tracker
   - Scroll position in pixels (bottom right)
✅ Real-time viewport-based animations:
   - AnimatedSection component with multiple animation types
   - Fade, slideUp, slideLeft, slideRight, scale, blur effects
   - Animations trigger when elements enter viewport
   - Re-trigger on scroll (once: false)
✅ Framer Motion animations throughout
✅ Four sections:
   - Hero: Full-screen video with scroll animation
   - Features: Specifications grid with staggered animations
   - Coming Soon: Call-to-action banner
   - Footer: Complete Xiaomi footer with links
✅ TailwindCSS styling with responsive design
✅ Performance optimized with `preload="metadata"` and frame throttling
✅ Hover effects with orange accent colors

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- TailwindCSS 4
- GSAP + ScrollTrigger
- Lenis (Smooth Scroll)
- Framer Motion

## Running the Project

### Development
```bash
pnpm dev
```
Visit http://localhost:3000

### Production Build
```bash
pnpm build
pnpm start
```

## How It Works

1. **Video Scroll Sync**: As you scroll through the hero section (300vh height), the video playback progresses from 0% to 100% using GSAP ScrollTrigger.

2. **Smooth Scroll**: Lenis provides buttery-smooth scrolling with easing.

3. **Sticky Video**: The video stays pinned at the top while scrolling through the extended container.

4. **Animations**: Framer Motion handles fade-in effects for text overlays and feature cards.

## File Structure

```
src/
├── app/
│   ├── page.tsx          # Main landing page with video scroll
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
public/
└── S12_Ultra_AdXiaomi.mp4  # Video asset
```

## Customization

- Adjust scroll height: Change `h-[300vh]` in page.tsx
- Modify scroll duration: Update Lenis `duration` parameter
- Change video: Replace the video file in `/public` and update the src path
- Edit features: Modify the features array in the specifications section

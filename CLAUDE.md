# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**davie** - Cinematographer portfolio website for David

This is a static HTML/CSS/JavaScript portfolio showcasing four different design concepts for a cinematographer's website. The site will eventually be connected to a CMS, but currently uses placeholder images from Unsplash. Designed to be hosted on GitHub Pages.

## Project Structure

```
davie/
├── index.html          # Main landing page - navigation to all 4 designs
├── design1.html        # Horizontal scrolling rows (Miles Jay inspired)
├── design2.html        # Movie grid with 4 columns (Instagram inspired)
├── design3.html        # Full-screen slider with touch navigation
├── design4.html        # Photobook spread layout (NEEDS REWORK)
├── package.json        # Project metadata and scripts
├── README.md           # Project documentation and deployment instructions
└── CLAUDE.md           # This file
```

## Design Concepts

### Design 1: Horizontal Rows
- **Status:** Complete and approved
- **Style:** Clean, minimal, white background
- **Layout:** Horizontal scrolling rows of cinematic stills, one row per project
- **Inspiration:** Miles Jay's portfolio
- **Features:**
  - Fixed header with navigation
  - Each project has metadata (title, type, duration)
  - Smooth horizontal scrolling with custom scrollbar
  - Fully responsive (smaller images on mobile)

### Design 2: Movie Grid
- **Status:** Complete
- **Style:** Dark theme, Instagram-inspired
- **Layout:** Each movie gets its own section with a grid of 4 images
- **Features:**
  - Profile header with stats (projects, frames, festivals)
  - Filter tabs (All, Narrative, Commercial, Documentary)
  - Title divider separating each movie
  - Desktop: 4-column grid per movie
  - Mobile: 2x2 grid per movie
  - Each movie section has title + metadata

### Design 3: Full-Screen Slider
- **Status:** Complete
- **Style:** Immersive, dark, dramatic
- **Layout:** Full-screen slideshow with one project per slide
- **Features:**
  - Touch/swipe navigation (mobile-friendly)
  - Mouse wheel scroll navigation
  - Keyboard arrow key navigation
  - Clickable navigation dots
  - Progress bar at bottom
  - Smooth transitions between slides
  - Overlay text with project info

### Design 4: Photobook Spread
- **Status:** NEEDS REWORK (far from perfect)
- **Style:** Editorial photobook
- **Layout:** Two-page spreads like an open book
- **Current Issues:** Layout needs refinement, positioning could be improved
- **Features:**
  - Desktop: Two pages side by side with spine in middle
  - Mobile: Single page view
  - Handwritten-style font (Kalam)
  - Photos arranged organically with rotation
  - Each spread represents one movie
  - No Polaroid frames (direct images)

## Development Commands

```bash
# Start local server
npm start

# Open in browser (Linux)
xdg-open index.html

# Open in browser (macOS)
open index.html
```

The `npm start` command runs a Python HTTP server on port 8000.

## Common Tasks

### Adding New Projects/Movies

Each design file has its own structure for projects:

- **Design 1:** Add new `.project-row` div with `.project-stills` and `.project-info`
- **Design 2:** Add new `.movie-section` with `.movie-header` and `.movie-grid`
- **Design 3:** Add new `.slide` div with background image and content
- **Design 4:** Add new `.spread` with left/right `.page` elements

### Replacing Placeholder Images

All images currently use Unsplash URLs in format:
```
https://images.unsplash.com/photo-{id}?w={width}&h={height}&fit=crop
```

Replace with actual cinematography images. Consider using a consistent CDN or CMS integration.

### Responsive Breakpoints

All designs use these breakpoints:
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px
- Small mobile: < 480px

## TODO Items

1. **Rework Design 4** - Current photobook layout needs significant improvements
2. **Add Light/Dark Theme Toggle** - All four designs should support theme switching
3. **CMS Integration** - Connect to headless CMS (Contentful, Sanity, etc.)
4. **Project Detail Pages** - Add individual pages for each project
5. **Contact Form** - Implement contact functionality
6. **Video Embeds** - Add support for video reels/trailers

## Design Philosophy

- **Super fly + épuré** - Designs should be both visually striking and minimal/clean
- **Fully responsive** - Must look excellent on desktop, tablet, and mobile
- **Cinematographer-focused** - Emphasize visual storytelling through imagery
- **Performance** - Keep it lightweight, static HTML/CSS/JS only

## Deployment

Site is designed to be hosted on GitHub Pages. See README.md for deployment instructions.

## Important Notes

- Never use emoji unless explicitly requested
- Keep designs minimal - avoid over-engineering
- Prioritize visual impact and responsiveness
- All text content and images are placeholders
- Design 4 is incomplete and should be revisited before showing to client

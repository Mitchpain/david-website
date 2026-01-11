# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**davie** - Cinematographer portfolio website for David

This is a static HTML/CSS/JavaScript portfolio showcasing five different design concepts for a cinematographer's website. The site will eventually be connected to a CMS, but currently uses placeholder images from Unsplash. Designed to be hosted on GitHub Pages.

## Project Structure

```
davie/
├── index.html          # Main landing page - navigation to all 5 designs
├── design1.html        # Horizontal scrolling rows (Miles Jay inspired)
├── design2.html        # Movie grid with 4 columns (Instagram inspired)
├── design3.html        # Full-screen slider with touch navigation
├── design4.html        # Vertical single column with breathing room
├── design5.html        # Bento grid with asymmetric tiles
├── package.json        # Project metadata and scripts
├── README.md           # Project documentation and deployment instructions
└── CLAUDE.md           # This file
```

## Design Concepts

### Design 1: Horizontal Rows
- **Status:** Complete
- **Style:** Clean, minimal, adapts to light/dark mode
- **Layout:** Horizontal scrolling rows of cinematic stills, one row per project
- **Inspiration:** Miles Jay's portfolio
- **Features:**
  - Fixed header with navigation
  - Each project has metadata (title, type, duration)
  - Smooth horizontal scrolling with custom scrollbar
  - Fully responsive (smaller images on mobile)
  - Light/dark theme support based on system preference

### Design 2: Movie Grid
- **Status:** Complete
- **Style:** Instagram-inspired, adapts to light/dark mode
- **Layout:** Each movie gets its own section with a grid of 4 images
- **Features:**
  - Profile header with stats (projects, frames, festivals)
  - Filter tabs (All, Narrative, Commercial, Documentary)
  - Title divider separating each movie
  - Desktop: 4-column grid per movie
  - Mobile: 2x2 grid per movie
  - Each movie section has title + metadata
  - Light/dark theme support based on system preference

### Design 3: Full-Screen Slider
- **Status:** Complete
- **Style:** Immersive, dramatic, adapts to light/dark mode
- **Layout:** Full-screen slideshow with one project per slide
- **Features:**
  - Touch/swipe navigation (mobile-friendly)
  - Mouse wheel scroll navigation
  - Keyboard arrow key navigation
  - Clickable navigation dots
  - Progress bar at bottom
  - Smooth transitions between slides
  - Overlay text with project info
  - Light/dark theme support based on system preference

### Design 4: Vertical Single Column
- **Status:** Complete
- **Style:** Ultra-minimal, gallery-like, adapts to light/dark mode
- **Layout:** One large cinematic image per project, stacked vertically with massive spacing
- **Features:**
  - Fixed header with navigation
  - Each project = 1 hero image (2.35:1 cinematic ratio on desktop, 16:9 on mobile)
  - Small centered metadata below each image
  - Tons of whitespace (60vh gaps between projects on desktop)
  - Clean, focused scroll experience
  - Light/dark theme support based on system preference

### Design 5: Bento Grid
- **Status:** Complete
- **Style:** Architectural, modern minimal, adapts to light/dark mode
- **Layout:** Asymmetric grid where each movie gets a different-sized tile
- **Features:**
  - Mix of portrait, landscape, and square tile formats
  - Some tiles larger (hero projects), some smaller
  - Title overlaid on each tile, visible on hover (desktop) or always visible (mobile)
  - Generous gaps between tiles (Apple/Muji catalog spacing)
  - Hover reveals metadata (year, type, duration)
  - Fully responsive (desktop: 12-column grid, tablet: 6-column, mobile: 2-column/single column)
  - Light/dark theme support based on system preference

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
- **Design 4:** Add new `.project` div with `.project-image` and `.project-info`
- **Design 5:** Add new `.tile` div with image and `.tile-info`

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

1. **CMS Integration** - Connect to headless CMS (Contentful, Sanity, etc.)
2. **Project Detail Pages** - Add individual pages for each project
3. **Contact Form** - Implement contact functionality
4. **Video Embeds** - Add support for video reels/trailers

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
- All five designs support light/dark theme based on user's system preference

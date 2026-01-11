# David - Cinematographer Portfolio

Four responsive portfolio design concepts for David's cinematography website.

## Design Concepts

### Design 01: Horizontal Rows
Inspired by Miles Jay's work page - horizontal scrolling rows showcasing cinematic stills from different projects. Clean, minimal with lots of breathing room.

**View:** Open `design1.html`

### Design 02: Movie Grid
Instagram-inspired layout where each movie has its own section with a 4-column grid (2x2 on mobile). Profile header with stats and filterable project categories. Title dividers separate each project.

**View:** Open `design2.html`

### Design 03: Full-Screen Slider
Immersive full-screen slideshow experience with large format imagery. Features touch/swipe navigation, mouse wheel scrolling, keyboard controls, and smooth transitions. Perfect for showcasing cinematography work.

**View:** Open `design3.html`

### Design 04: Scrapbook Collage
Organic, artistic layout with Polaroid-style photos scattered across the page at various angles. Includes handwritten-style captions and notes for a personal, diary-like aesthetic. Fully responsive with mobile-optimized positioning.

**View:** Open `design4.html`

## Local Development

Simply open `index.html` in your browser to navigate between all four designs.

```bash
# Navigate to project directory
cd davie

# Open in browser (macOS)
open index.html

# Or open in browser (Linux)
xdg-open index.html
```

## Deploying to GitHub Pages

1. **Initialize Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Four portfolio designs"
   ```

2. **Create a new repository on GitHub** (e.g., `username/davie` or `username/username.github.io`)

3. **Push to GitHub**:
   ```bash
   git branch -M main
   git remote add origin https://github.com/username/repository-name.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to "Pages" section
   - Under "Source", select "main" branch
   - Click Save

5. **Access your site**:
   - Your site will be live at: `https://username.github.io/repository-name/`
   - If using `username.github.io` as repo name: `https://username.github.io/`

## Next Steps

- Replace placeholder images with David's actual cinematography work
- Add real project descriptions and details
- Connect to a CMS (Contentful, Sanity, etc.) for easy content management
- Add project detail pages
- Implement contact form
- Add social media links
- Consider adding video embeds for reels/trailers

## Customization

All designs use:
- Responsive CSS Grid and Flexbox
- Mobile-first approach
- Clean, minimal aesthetic
- Easy-to-customize CSS variables (can be added)
- Placeholder images from Unsplash

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge). Uses CSS Grid, Flexbox, and modern JavaScript.

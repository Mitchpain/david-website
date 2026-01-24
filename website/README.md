# Davie Portfolio - Dynamic Website

Dynamic version of the cinematographer portfolio using Bun, Lit, and TypeScript.

## Stack

- **Runtime:** Bun
- **Framework:** Lit (Web Components)
- **Language:** TypeScript
- **Bundler:** esbuild
- **Dev Server:** Custom Bun server with hot reload

## Prerequisites

Make sure Bun is installed:

```bash
curl -fsSL https://bun.sh/install | bash
```

## Installation

```bash
bun install
```

## Development

Start the dev server with hot reload:

```bash
bun run start
```

The site will be available at http://localhost:3000

Changes to files in `src/` will trigger automatic reloads in the browser.

## Build

Create a production build:

```bash
bun run build
```

This outputs:
- `dist/index.html` - Main HTML file
- `dist/index.js` - Bundled and minified JavaScript (single file)
- `dist/styles/main.css` - Stylesheet

The build is optimized and ready for deployment.

## Project Structure

```
website/
├── src/
│   ├── index.ts              # Entry point
│   ├── components/           # Lit components
│   │   └── app-root.ts      # Root component
│   └── styles/              # CSS files
│       └── main.css
├── public/
│   └── index.html           # HTML template
├── scripts/
│   ├── dev.ts              # Dev server with hot reload
│   └── build.ts            # Build script
└── dist/                   # Build output (generated)
```

## Adding Components

Create new Lit components in `src/components/`:

```typescript
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-component')
export class MyComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`<h1>Hello World</h1>`;
  }
}
```

Then import it in `src/index.ts`:

```typescript
import './components/my-component.ts';
```

## Next Steps

This is the initial setup. The original static designs (`../index.html`, `../design1.html`, etc.) remain untouched and can be progressively converted into Lit components.

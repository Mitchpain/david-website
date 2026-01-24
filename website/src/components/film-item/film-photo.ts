import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './film-photo.css';

@customElement('film-photo')
export class FilmPhoto extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: Array })
  imageUrls: string[] = [];

  @property({ type: String })
  title = '';

  render() {
    // Ensure we always show 4 images (fill with empty divs if needed)
    const gridItems = Array(4).fill(null).map((_, index) => {
      const imageUrl = this.imageUrls[index];
      return imageUrl
        ? html`
          <div class="grid-item">
            <img src="${imageUrl}" alt="${this.title} ${index + 1}" loading="lazy">
          </div>
        `
        : html`<div class="grid-item"></div>`;
    });

    return html`
      <div class="movie-grid">
        ${gridItems}
      </div>
    `;
  }
}

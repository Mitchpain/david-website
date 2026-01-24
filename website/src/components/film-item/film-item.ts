import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './film-item.css';
import './film-video.ts';
import './film-photo.ts';

export interface FilmMedia {
  type: 'video' | 'images';
  videoUrl?: string;
  imageUrls?: string[];
}

@customElement('film-item')
export class FilmItem extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: String })
  title = '';

  @property({ type: Object })
  media: FilmMedia = { type: 'images', imageUrls: [] };

  @property({ type: String })
  href = '#';

  @property({ type: Boolean })
  preload = false;

  render() {
    return html`
      <a href="${this.href}" class="movie-section">
        ${this.media.type === 'video'
          ? html`<film-video
              .videoUrl="${this.media.videoUrl || ''}"
              .title="${this.title}"
              .preload="${this.preload}">
            </film-video>`
          : html`<film-photo
              .imageUrls="${this.media.imageUrls || []}"
              .title="${this.title}">
            </film-photo>`
        }
        <div class="movie-title-overlay">${this.title}</div>
      </a>
    `;
  }
}

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './film-video.css';

@customElement('film-video')
export class FilmVideo extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: String })
  videoUrl = '';

  @property({ type: String })
  title = '';

  @property({ type: Boolean })
  preload = false;

  render() {
    return html`
      <div class="video-container">
        <video
          autoplay
          muted
          loop
          playsinline
          ?preload="${this.preload ? 'auto' : 'metadata'}">
          <source src="${this.videoUrl}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.setupVideoObserver();
  }

  setupVideoObserver() {
    setTimeout(() => {
      const video = this.shadowRoot?.querySelector('video');
      if (!video) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Autoplay prevented, that's ok
            });
          } else {
            video.pause();
          }
        });
      }, {
        rootMargin: '200px',
        threshold: 0.1
      });

      observer.observe(video);
    }, 100);
  }
}

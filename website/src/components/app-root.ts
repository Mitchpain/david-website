import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './app-root.css';
import './nav-bar.ts';
import './film-item/film-item.ts';
import type { FilmMedia } from './film-item/film-item.ts';

@customElement('app-root')
export class AppRoot extends LitElement {
  static styles = unsafeCSS(styles);

  private films: Array<{ title: string; media: FilmMedia; href: string }> = [
    {
      title: 'Fragments',
      media: {
        type: 'video',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      },
      href: 'fragments.html'
    },
    {
      title: 'Light & Shadow',
      media: {
        type: 'images',
        imageUrls: [
          'https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=600&h=600&fit=crop',
          'https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?w=600&h=600&fit=crop',
          'https://images.unsplash.com/photo-1574437553126-7fc8e0bb0e1e?w=600&h=600&fit=crop',
          'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&h=600&fit=crop'
        ]
      },
      href: 'light-shadow.html'
    },
    {
      title: 'Urban Stories',
      media: {
        type: 'images',
        imageUrls: [
          'https://images.unsplash.com/photo-1563089145-599997674d42?w=600&h=600&fit=crop',
          'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=600&fit=crop',
          'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=600&fit=crop',
          'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=600&fit=crop'
        ]
      },
      href: 'urban-stories.html'
    },
    {
      title: 'Horizon',
      media: {
        type: 'video',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
      },
      href: 'horizon.html'
    },
    {
      title: 'Noir',
      media: {
        type: 'images',
        imageUrls: [
          'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=600&h=600&fit=crop',
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=600&fit=crop',
          'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=600&fit=crop',
          'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=600&h=600&fit=crop'
        ]
      },
      href: '#'
    }
  ];

  render() {
    return html`
      <nav-bar></nav-bar>

      <div class="movies-container">
        ${this.films.map((film, index) => html`
          <film-item
            .title="${film.title}"
            .media="${film.media}"
            .href="${film.href}"
            .preload="${index < 2 && film.media.type === 'video'}">
          </film-item>
        `)}
      </div>
    `;
  }
}

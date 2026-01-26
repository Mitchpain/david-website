import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import styles from './app-root.css';
import './nav-bar.ts';
import './film-item/film-item.ts';
import { router, type Route } from '../services/router.ts';
import { getMoviesForPage, type Movie } from '../services/movies.ts';

@customElement('app-root')
export class AppRoot extends LitElement {
  static styles = unsafeCSS(styles);

  @state()
  private films: Movie[] = [];

  @state()
  private currentRoute: Route = 'film';

  connectedCallback() {
    super.connectedCallback();
    this.currentRoute = router.getRoute();
    this.loadFilms();
    router.addEventListener('route-changed', this.handleRouteChange);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    router.removeEventListener('route-changed', this.handleRouteChange);
  }

  private handleRouteChange = (e: Event) => {
    const customEvent = e as CustomEvent<{ route: Route }>;
    this.currentRoute = customEvent.detail.route;
    this.loadFilms();
  };

  private async loadFilms() {
    this.films = await getMoviesForPage(this.currentRoute);
  }

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

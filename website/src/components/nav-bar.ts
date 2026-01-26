import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import styles from './nav-bar.css';
import { router, type Route } from '../services/router.ts';

@customElement('nav-bar')
export class NavBar extends LitElement {
  static styles = unsafeCSS(styles);

  @state()
  private currentRoute: Route = 'film';

  connectedCallback() {
    super.connectedCallback();
    this.currentRoute = router.getRoute();
    router.addEventListener('route-changed', this.handleRouteChange);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    router.removeEventListener('route-changed', this.handleRouteChange);
  }

  private handleRouteChange = (e: Event) => {
    const customEvent = e as CustomEvent<{ route: Route }>;
    this.currentRoute = customEvent.detail.route;
  };

  private handleNavClick(route: Route, e: Event) {
    e.preventDefault();
    if (route === 'contact') {
      // Contact page not implemented yet
      return;
    }
    router.navigate(route);
  }

  render() {
    const showArchive = this.currentRoute === 'archive';

    return html`
      <div class="filter-tabs">
        <a
          href="/film"
          class="filter-tab ${this.currentRoute === 'film' ? 'active' : ''}"
          @click="${(e: Event) => this.handleNavClick('film', e)}">
          film
        </a>
        <a
          href="/commercial"
          class="filter-tab ${this.currentRoute === 'commercial' ? 'active' : ''}"
          @click="${(e: Event) => this.handleNavClick('commercial', e)}">
          commercial
        </a>
        ${showArchive ? html`
          <a
            href="/archive"
            class="filter-tab ${this.currentRoute === 'archive' ? 'active' : ''}"
            @click="${(e: Event) => this.handleNavClick('archive', e)}">
            archive
          </a>
        ` : ''}
        <a
          href="#"
          class="filter-tab"
          @click="${(e: Event) => this.handleNavClick('contact', e)}">
          contact
        </a>
      </div>
    `;
  }
}

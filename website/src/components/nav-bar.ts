import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './nav-bar.css';

@customElement('nav-bar')
export class NavBar extends LitElement {
  static styles = unsafeCSS(styles);

  render() {
    return html`
      <div class="filter-tabs">
        <a href="#" class="filter-tab active">film</a>
        <a href="#" class="filter-tab">comercial</a>
        <a href="#" class="filter-tab">contact</a>
      </div>
    `;
  }
}

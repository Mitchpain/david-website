import type { PageType } from './movies.ts';

export type Route = PageType;

class Router extends EventTarget {
  private currentRoute: Route = 'film';

  constructor() {
    super();
    this.handlePopState = this.handlePopState.bind(this);
    window.addEventListener('popstate', this.handlePopState);
    this.updateRouteFromPath();
  }

  private handlePopState() {
    this.updateRouteFromPath();
  }

  private updateRouteFromPath() {
    const path = window.location.pathname;
    const newRoute = this.pathToRoute(path);

    // If route is unknown, redirect to home
    if (newRoute === null) {
      this.navigate('film');
      return;
    }

    if (newRoute !== this.currentRoute) {
      this.currentRoute = newRoute;
      this.dispatchEvent(new CustomEvent('route-changed', { detail: { route: this.currentRoute } }));
    }
  }

  private pathToRoute(path: string): Route | null {
    if (path === '/' || path === '/film') {
      return 'film';
    } else if (path === '/commercial') {
      return 'commercial';
    } else if (path === '/archive') {
      return 'archive';
    }
    return null; // Unknown route
  }

  private routeToPath(route: Route): string {
    if (route === 'film') {
      return '/film';
    }
    return `/${route}`;
  }

  getRoute(): Route {
    return this.currentRoute;
  }

  navigate(route: Route) {
    const path = this.routeToPath(route);
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
      this.currentRoute = route;
      this.dispatchEvent(new CustomEvent('route-changed', { detail: { route: this.currentRoute } }));
    }
  }
}

export const router = new Router();

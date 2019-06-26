import { RouteProps, matchPath } from 'react-router';
import Home from './Home';

const config: RouteProps[] = [
  {
    path: '/',
    component: Home
  }
];

export function getMatches(path: string) {
  return config
    .map(route => {
      const match = matchPath(path, route);
      if (!match) return null;
      return {
        match,
        component: route.component
      };
    })
    .filter(Boolean);
}

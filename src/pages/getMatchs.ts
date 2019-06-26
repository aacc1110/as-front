import { RouteProps, matchPath } from 'react-router';
import MainPage from './MainPage';

const config: RouteProps[] = [
  {
    path: '/',
    component: MainPage
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

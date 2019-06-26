import React from 'react';
import { Switch, Route } from 'react-router';
import loadable from '@loadable/component';
/* import MainPage from './pages/main/MainPage';
import PostPage from './pages/PostPage'; */

const Home = loadable(() => import('./pages/Home'));
const TrendPage = loadable(() => import('./pages/TrendPage'));
const Postpage = loadable(() => import('./pages/PostPage'));

interface AppProps {}

const App: React.FC<AppProps> = props => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="{['trending'|'recent'|'following']}" component={TrendPage} />
      <Route exact path="/@:username/:urlSlug" component={Postpage} />
    </Switch>
  );
};

export default App;

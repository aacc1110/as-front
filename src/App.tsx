import React from 'react';
import { Switch, Route } from 'react-router';
import loadable from '@loadable/component';
/* import MainPage from './pages/main/MainPage';
import PostPage from './pages/PostPage'; */

const MainPage = loadable(() => import('./pages/main/MainPage'));
const PostPage = loadable(() => import('./pages/PostPage'));

interface AppProps {}

const App: React.FC<AppProps> = props => {
  return (
    <Switch>
      <Route path="/" component={MainPage} exact />
      <Route path={['/recent', '/trending']} component={MainPage} />
      <Route path="/@:username/:urlSlug" component={PostPage} />
    </Switch>
  );
};

export default App;

import React from 'react';
import { Switch, Route } from 'react-router';
import loadable from '@loadable/component';
import TrendPage from './pages/TrendPage';
/* import MainPage from './pages/main/MainPage';
import PostPage from './pages/PostPage'; */

const MainPage = loadable(() => import('./pages/MainPage'));
const PostPage = loadable(() => import('./pages/PostPage'));

interface AppProps {}

const App: React.FC<AppProps> = props => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/:mode(trending|recent|following)" component={MainPage} />
        <Route exact path="/@:username/:urlSlug" component={PostPage} />
      </Switch>
      <TrendPage />
    </>
  );
};

export default App;

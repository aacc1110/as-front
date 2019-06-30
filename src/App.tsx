import React from 'react';
import { Switch, Route } from 'react-router';
import loadable from '@loadable/component';

/* import MainPage from './pages/main/MainPage';
import PostPage from './pages/PostPage'; */

const Home = loadable(() => import('./pages/Home'));
const TrendPostList = loadable(() => import('./pages/TrendPostList'));
const RecentPostList = loadable(() => import('./pages/RecentPostList'));
const Postpage = loadable(() => import('./pages/PostPage'));
const AuthPage = loadable(() => import('./pages/AuthPage'));
const RegisterPage = loadable(() => import('./pages/RegisterPage'));

interface AppProps {}

const App: React.FC<AppProps> = props => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/trend" component={TrendPostList} />
        <Route exact path="/recent" component={RecentPostList} />
        <Route exact path="/@:username/:urlSlug" component={Postpage} />
        <Route exact path="/auth" component={AuthPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    </>
  );
};

export default App;

import React from 'react';
import { Route } from 'react-router';

import Layout from '../components/Layout';
import TrendPost from '../container/post/TrendPost';
import User from '../lib/hooks/User';

interface HomeProps {}

const Home: React.FC<HomeProps> = props => {
  console.log('Home');
  return (
    <Layout>
      <Route path="/" component={TrendPost} />
      <User />
    </Layout>
  );
};

export default Home;

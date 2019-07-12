import React from 'react';
import { Route } from 'react-router';

import Layout from '../components/Layout';
import TrendPost from '../container/post/TrendPost';

interface HomeProps {}

const Home: React.FC<HomeProps> = props => {
  console.log('Home');
  return (
    <Layout>
      <Route path="/" component={TrendPost} />
    </Layout>
  );
};

export default Home;

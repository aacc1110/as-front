import React from 'react';

import Layout from '../components/Layout';
import { Route } from 'react-router';
import TrendPost from '../container/post/TrendPost';

interface TrendPostListProps {}

const TrendPostList: React.FC<TrendPostListProps> = props => {
  console.log('TrendPostList');
  return (
    <Layout>
      <Route path="/trend" component={TrendPost} />
    </Layout>
  );
};

export default TrendPostList;

import React from 'react';

import Layout from '../components/Layout';
import { Route } from 'react-router';
import TrendPost from '../container/post/TrendPost';

interface RecentPostListProps {}

const RecentPostList: React.FC<RecentPostListProps> = props => {
  return (
    <Layout>
      <Route path="/recent" component={TrendPost} />
    </Layout>
  );
};

export default RecentPostList;

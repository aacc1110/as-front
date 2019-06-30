import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { Route } from 'react-router';
import TrendPost from '../container/post/TrendPost';

const RecentPostListBlock = styled.div``;

interface RecentPostListProps {}

const RecentPostList: React.FC<RecentPostListProps> = props => {
  return (
    <RecentPostListBlock>
      <Layout>
        <Route path="/recent" component={TrendPost} />
      </Layout>
    </RecentPostListBlock>
  );
};

export default RecentPostList;

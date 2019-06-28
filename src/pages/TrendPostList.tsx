import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { Route } from 'react-router';
import TrendPost from '../container/post/TrendPost';

const TrendPostListBlock = styled.div``;

interface TrendPostListProps {}

const TrendPostList: React.FC<TrendPostListProps> = props => {
  return (
    <TrendPostListBlock>
      <Layout>
        <Route path="/" component={TrendPost} />
      </Layout>
    </TrendPostListBlock>
  );
};

export default TrendPostList;

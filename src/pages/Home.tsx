import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router';

import Layout from '../components/Layout';
import TrendPost from '../container/post/TrendPost';

const HomeBlock = styled.div``;

interface HomeProps {}

const Home: React.FC<HomeProps> = props => {
  return (
    <HomeBlock>
      <Layout>
        <Route path="/" component={TrendPost} />
      </Layout>
    </HomeBlock>
  );
};

export default Home;

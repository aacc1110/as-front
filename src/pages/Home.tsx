import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router';

import Layout from '../components/Layout';
import TrendPost from '../container/post/TrendPost';
import User from '../lib/hooks/User';

const HomeBlock = styled.div``;

interface HomeProps {}

const Home: React.FC<HomeProps> = props => {
  console.log('Home');
  return (
    <HomeBlock>
      <Layout>
        <Route path="/" component={TrendPost} />
        <User />
      </Layout>
    </HomeBlock>
  );
};

export default Home;

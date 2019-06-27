import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router';

import TrendPage from './TrendPage';
import Layout from '../components/Layout';

const HomeBlock = styled.div``;

interface HomeProps {}

const Home: React.FC<HomeProps> = props => {
  return (
    <HomeBlock>
      <Layout>
        <Route path="/" component={TrendPage} />
      </Layout>
    </HomeBlock>
  );
};

export default Home;

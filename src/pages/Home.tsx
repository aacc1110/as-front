import React from 'react';
import styled from 'styled-components';
import MainTemplate from '../components/template/main/MainTemplate';
import MainSideMenu from '../components/template/main/MainSidemenu';
import { Route } from 'react-router';
import TrendPage from './TrendPage';

const HomeBlock = styled.div``;

interface HomeProps {}

const Home: React.FC<HomeProps> = props => {
  return (
    <HomeBlock>
      <MainTemplate>
        <MainTemplate.Left>
          <MainSideMenu />
        </MainTemplate.Left>
        <MainTemplate.Main>
          <Route exact component={TrendPage} />
        </MainTemplate.Main>
      </MainTemplate>
    </HomeBlock>
  );
};

export default Home;

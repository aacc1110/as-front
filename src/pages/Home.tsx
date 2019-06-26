import React from 'react';
import styled from 'styled-components';
import MainTemplate from '../components/template/main/MainTemplate';

const HomeBlock = styled.div``;

interface HomeProps {}

const Home: React.FC<HomeProps> = props => {
  return (
    <HomeBlock>
      <MainTemplate />
    </HomeBlock>
  );
};

export default Home;

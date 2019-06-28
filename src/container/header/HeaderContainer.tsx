import React from 'react';
import styled from 'styled-components';
import Header from '../../components/header/Header';

const HeaderContainerBlock = styled.div``;

interface HeaderContainerProps {}

const HeaderContainer: React.FC<HeaderContainerProps> = props => {
  return (
    <HeaderContainerBlock>
      <Header />
    </HeaderContainerBlock>
  );
};

export default HeaderContainer;

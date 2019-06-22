import React from 'react';
import styled from 'styled-components';
import HeaderContainer from '../../container/header/HeaderContainer';

const MainBundleBlock = styled(HeaderContainer)``;

interface MainBundleProps {}

const MainBundle: React.FC<MainBundleProps> = ({ children }) => {
  return (
    <MainBundleBlock>
      <main>{children}</main>
    </MainBundleBlock>
  );
};

export default MainBundle;

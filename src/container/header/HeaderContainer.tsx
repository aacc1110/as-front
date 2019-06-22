import React from 'react';
import styled from 'styled-components';

import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';

const HeaderContainerBlock = styled.div``;

interface HeaderContainerProps {
  style?: React.CSSProperties;
  className?: string;
}

const HeaderContainer: React.FC<HeaderContainerProps> = ({ style, className, children }) => {
  return (
    <HeaderContainerBlock style={style} className={className}>
      <Header />
      {children}
      <Menu />
    </HeaderContainerBlock>
  );
};

export default HeaderContainer;

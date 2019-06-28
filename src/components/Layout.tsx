import React from 'react';
import styled from 'styled-components';
import Body from './body/Body';
import HeaderContainer from '../container/header/HeaderContainer';
import Menu from './menu/Menu';

const LayoutBlock = styled.div`
  .view {
    display: flex;
    flex-direction: row;
    .menu {
      width: 120px;
    }
  }
`;

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutBlock>
      <HeaderContainer />
      <div className="view">
        <div className="menu">
          <Menu />
        </div>
        <Body>{children}</Body>
      </div>
    </LayoutBlock>
  );
};

export default Layout;

import React from 'react';
import styled from 'styled-components';
import Header from './header/Header';
import Body from './body/Body';
import Menu from './menu/Menu';

const LayoutBlock = styled.div`
  .body {
    display: flex;
    flex-direction: row;
    border: 1px solid black;
  }
`;

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutBlock>
      <Header />
      <div className="body">
        <Menu />
        <Body>{children}</Body>
      </div>
    </LayoutBlock>
  );
};

export default Layout;

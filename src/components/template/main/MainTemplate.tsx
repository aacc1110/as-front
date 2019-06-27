import React from 'react';
import styled from 'styled-components';
import Header from '../../header/Header';
import { breakpoints } from '../../../styles/responsive';

const MainTemplateBlock = styled.div`
  main {
    width: ${breakpoints.xlarge};
    margin: 0 auto;
    margin-top: 1.5rem;
    margin-bottom: 8rem;
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
  }
`;

const Left = styled.div`
  width: 98px;
  border: 1px solid black;
`;
const Main = styled.div`
  width: 1100px;
  border: 1px solid black;
`;

interface MainTemplateNamespace {
  Left: typeof Left;
  Main: typeof Main;
}

interface MainTemplateProps {}

const MainTemplate: React.FC<MainTemplateProps> & MainTemplateNamespace = ({ children }) => {
  return (
    <MainTemplateBlock>
      <Header />
      <main>{children}</main>
    </MainTemplateBlock>
  );
};
MainTemplate.Left = Left;
MainTemplate.Main = Main;
export default MainTemplate;

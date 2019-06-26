import React from 'react';
import styled from 'styled-components';
import Header from '../../header/Header';

const MainTemplateBlock = styled.div``;

interface MainTemplateProps {}

const MainTemplate: React.FC<MainTemplateProps> = props => {
  return (
    <MainTemplateBlock>
      <Header />
    </MainTemplateBlock>
  );
};

export default MainTemplate;

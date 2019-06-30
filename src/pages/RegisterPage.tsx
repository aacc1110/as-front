import React from 'react';
import styled from 'styled-components';

import HeaderContainer from '../container/header/HeaderContainer';
import RegisterTemplate from '../components/auth/RegisterTemplate';
import RegisterContainer from '../container/auth/RegisterContainer';

const RegisterPageBlock = styled.div``;

interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = props => {
  return (
    <RegisterPageBlock>
      <HeaderContainer />
      <RegisterTemplate>
        <RegisterContainer />
      </RegisterTemplate>
    </RegisterPageBlock>
  );
};

export default RegisterPage;

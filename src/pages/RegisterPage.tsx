import React from 'react';
import styled from 'styled-components';

import RegisterContainer from '../container/auth/RegisterContainer';
import RegisterTemplate from '../components/auth/RegisterTemplate';

const RegisterPageBlock = styled.div``;

interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = props => {
  return (
    <RegisterPageBlock>
      <RegisterTemplate>
        <RegisterContainer />
      </RegisterTemplate>
    </RegisterPageBlock>
  );
};

export default RegisterPage;

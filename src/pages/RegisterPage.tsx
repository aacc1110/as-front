import React from 'react';
import styled from 'styled-components';

import RegisterContainer from '../container/auth/RegisterContainer';

const RegisterPageBlock = styled.div``;

interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = props => {
  return (
    <RegisterPageBlock>
      <RegisterContainer />
    </RegisterPageBlock>
  );
};

export default RegisterPage;

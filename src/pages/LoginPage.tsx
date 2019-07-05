import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import LoginContainer from '../container/auth/LoginContainer';

const LoginPageBlock = styled.div``;

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = props => {
  return (
    <LoginPageBlock>
      <Layout>
        <LoginContainer mode="LOGIN" />
      </Layout>
    </LoginPageBlock>
  );
};

export default LoginPage;

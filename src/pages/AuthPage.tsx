import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import AuthContainer from '../container/auth/AuthContainer';

const AuthPageBlock = styled.div``;

interface AuthPageProps {}

const AuthPage: React.FC<AuthPageProps> = props => {
  return (
    <AuthPageBlock>
      <Layout>
        <AuthContainer mode="LOGIN" />
      </Layout>
    </AuthPageBlock>
  );
};

export default AuthPage;

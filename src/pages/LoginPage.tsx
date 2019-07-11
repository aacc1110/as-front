import React from 'react';

import Layout from '../components/Layout';
import LoginContainer from '../container/auth/LoginContainer';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = props => {
  return (
    <Layout>
      <LoginContainer mode="LOGIN" />
    </Layout>
  );
};

export default LoginPage;

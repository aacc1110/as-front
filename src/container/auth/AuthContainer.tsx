import React from 'react';
import styled from 'styled-components';
import AuthForm from '../../components/auth/AuthForm';

const AuthContainerBlock = styled.div``;

interface AuthContainerProps {
  mode: 'LOGIN' | 'REGISTER';
}

const AuthContainer: React.FC<AuthContainerProps> = ({ mode }) => {
  return (
    <AuthContainerBlock>
      <AuthForm mode={mode} />
    </AuthContainerBlock>
  );
};

export default AuthContainer;

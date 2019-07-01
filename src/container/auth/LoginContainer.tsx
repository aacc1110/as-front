import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';

import LoginForm from '../../components/auth/LoginForm';
import { useMutation } from 'react-apollo-hooks';
import { SEND_EMAIL } from '../../graphql/user';

const LoginContainerBlock = styled.div``;

interface LoginContainerProps {
  mode: 'LOGIN' | 'REGISTER';
}

const LoginContainer: React.FC<LoginContainerProps> = ({ mode }) => {
  const [authMode, setAuthMode] = useState(mode);

  const sendEmail = useMutation(SEND_EMAIL);

  const onChangeMode = useCallback(() => {
    if (authMode === 'LOGIN') {
      setAuthMode('REGISTER');
    }
    if (authMode === 'REGISTER') {
      setAuthMode('LOGIN');
    }
  }, [authMode]);
  useEffect(() => {
    console.log('authMode', authMode);
  }, [authMode, onChangeMode]);

  return (
    <LoginContainerBlock>
      <LoginForm mode={authMode} onChangeMode={onChangeMode} sendEmail={sendEmail} />
    </LoginContainerBlock>
  );
};

export default LoginContainer;

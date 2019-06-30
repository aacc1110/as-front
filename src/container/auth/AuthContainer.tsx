import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import AuthForm from '../../components/auth/AuthForm';

const AuthContainerBlock = styled.div``;

interface AuthContainerProps {
  mode: 'LOGIN' | 'REGISTER';
}

const AuthContainer: React.FC<AuthContainerProps> = ({ mode }) => {
  const [authMode, setAuthMode] = useState(mode);

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
    <AuthContainerBlock>
      <AuthForm mode={authMode} onChangeMode={onChangeMode} />
    </AuthContainerBlock>
  );
};

export default AuthContainer;

import React from 'react';
import styled from 'styled-components';

import palette from '../../styles/palette';

const LoginTemplateBlock = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  line-height: 1.5rem;
  h2,
  h4 {
    margin: 0;
  }
  h2 {
    font-size: 1.3125rem;
    color: ${palette.gray8};
  }
  .error {
    margin-bottom: 1rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: ${palette.red5};
    font-weight: bold;
  }
  .foot {
    width: 100%;
    text-align: center;
    span {
      margin-right: 0.25rem;
    }
    .auth-mode {
      display: inline-block;
      font-weight: bold;
      color: ${palette.blue6};
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

interface LoginTemplateProps {
  mode: string;
  error: string | null;
  onChangeMode: () => void;
}

const LoginTemplate: React.FC<LoginTemplateProps> = ({ children, error, mode, onChangeMode }) => {
  const modeText = mode === 'REGISTER' ? '회원가입' : '로그인';
  return (
    <LoginTemplateBlock>
      <h2>{modeText}</h2>
      {error && <div className="error">{error}</div>}
      <div className="foot">
        <div>{children}</div>
        <span>{mode === 'LOGIN' ? '아직 회원이 아니신가요?' : '계정이 이미 있으신가요?'}</span>
        <div className="auth-mode" onClick={onChangeMode}>
          {mode === 'LOGIN' ? '회원가입' : '로그인'}
        </div>
      </div>
    </LoginTemplateBlock>
  );
};

export default LoginTemplate;

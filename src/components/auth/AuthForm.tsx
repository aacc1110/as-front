import React, { useEffect } from 'react';
import styled from 'styled-components';
import Login from './Login';
import palette from '../../styles/palette';
import useInput from '../../lib/hooks/useInput';

const AuthFormBlock = styled.div`
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
  .foot {
    text-align: right;
    span {
      margin-right: 0.25rem;
    }
    .link {
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

interface AuthFormProps {
  mode: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ mode }) => {
  const modeText = mode === 'REGISTER' ? '회원가입' : '로그인';
  const [email, onChangeEmail] = useInput('');
  const onCangeMode = () => {
    mode = 'REGISTER';
  };

  useEffect(() => {
    console.log('mode', mode);
  }, [mode]);

  return (
    <AuthFormBlock>
      <h2>{modeText}</h2>
      <Login mode={mode} disabled={false} onChange={onChangeEmail} value={email} />
      <div className="foot">
        <span>{mode === 'LOGIN' ? '아직 회원이 아니신가요?' : '계정이 이미 있으신가요?'}</span>
        <div className="link" onClick={onCangeMode}>
          {mode === 'LOGIN' ? '회원가입' : '로그인'}
        </div>
      </div>
    </AuthFormBlock>
  );
};

export default AuthForm;

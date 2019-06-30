import React from 'react';
import styled from 'styled-components';
import Login from './Login';
import palette from '../../styles/palette';
import useInput from '../../lib/hooks/useInput';
import { useMutation } from 'react-apollo-hooks';
import { LOGIN } from '../../graphql/user';

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

interface AuthFormProps {
  mode: string;
  onChangeMode: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ mode, onChangeMode }) => {
  const [email, onChangeEmail] = useInput('');
  console.log('email', email);

  const sendEmail = useMutation(LOGIN);

  const onSendEmail = async () => {
    try {
      await sendEmail({
        variables: {
          email: 'tadrow@naver.com',
          password: 'aaaa'
        }
      });
    } catch (e) {
      console.error(e);
    }
  };

  const modeText = mode === 'REGISTER' ? '회원가입' : '로그인';
  return (
    <AuthFormBlock>
      <h2>{modeText}</h2>
      <Login mode={mode} onChange={onChangeEmail} value={email} sendMail={onSendEmail} />
      <div className="foot">
        <span>{mode === 'LOGIN' ? '아직 회원이 아니신가요?' : '계정이 이미 있으신가요?'}</span>
        <div className="auth-mode" onClick={onChangeMode}>
          {mode === 'LOGIN' ? '회원가입' : '로그인'}
        </div>
      </div>
    </AuthFormBlock>
  );
};

export default AuthForm;

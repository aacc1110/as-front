import React from 'react';
import styled from 'styled-components';
import { MutationFn } from 'react-apollo-hooks';
import { OperationVariables } from 'apollo-boost';

import Login from './Login';
import palette from '../../styles/palette';
import useInput from '../../lib/hooks/useInput';

const LoginFormBlock = styled.form`
  .email-mode {
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
  }
`;

interface LoginFormProps {
  mode: string;
  onChangeMode: () => void;
  sendEmail: MutationFn<unknown, OperationVariables>;
}

const LoginForm: React.FC<LoginFormProps> = ({ mode, onChangeMode, sendEmail }) => {
  const [email, onChangeEmail] = useInput('');
  console.log('email', email);

  const modeText = mode === 'REGISTER' ? '회원가입' : '로그인';
  return (
    <LoginFormBlock
      onSubmit={e => {
        e.preventDefault();
        if (!email) {
          console.log('이메일을 입력해주세요.');
          return null;
        }
        sendEmail({ variables: { email } }).then(response => {
          const success = response.data;
          if (success) {
            const x: Element | null = document.querySelector('.email-mode');
            if (x) {
              x.innerHTML = `${email}주소로 회원가입 이메일이 발송되었습니다.`;
            }
          }
        });
      }}
    >
      <div className="email-mode">
        <h2>{modeText}</h2>
        <Login mode={mode} onChange={onChangeEmail} value={email} />

        <div className="foot">
          <span>{mode === 'LOGIN' ? '아직 회원이 아니신가요?' : '계정이 이미 있으신가요?'}</span>
          <div className="auth-mode" onClick={onChangeMode}>
            {mode === 'LOGIN' ? '회원가입' : '로그인'}
          </div>
        </div>
      </div>
    </LoginFormBlock>
  );
};

export default LoginForm;

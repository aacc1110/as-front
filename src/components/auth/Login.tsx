import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import { useMutation } from 'react-apollo-hooks';
import { SEND_EMAIL } from '../../graphql/user';

const LoginBlock = styled.form`
  width: 100%;
  display: flex;
  height: 3rem;
  input {
    flex: 1;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    padding: 1rem;
    font-size: 1rem;
    border: 1px solid ${palette.gray3};
    border-right: none;
    &::placeholder {
      color: ${palette.gray6};
    }
    &:disabled {
      background: ${palette.gray1};
    }
  }
  button {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    background: ${palette.blue6};
    color: white;
    font-size: 1rem;
    font-weight: bold;
    outline: none;
    border: none;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    width: 6rem;
    cursor: pointer;
    &:hover,
    &:focus {
      background: ${palette.blue5};
    }
    &:disabled {
      background: ${palette.gray5};
      color: ${palette.gray3};
      cursor: default;
    }
  }
`;

interface LoginProps {
  mode: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Login: React.FC<LoginProps> = ({ mode, value, onChange }) => {
  const sendEmail = useMutation(SEND_EMAIL);
  return (
    <LoginBlock
      onSubmit={e => {
        e.preventDefault();
        sendEmail({ variables: { email: value } });
      }}
    >
      <input onChange={onChange} value={value} placeholder="이메일을 입력하세요." />
      {mode === 'LOGIN' && <input placeholder="비밀번호를 입력하세요." />}
      <button tabIndex={3}>{mode === 'REGISTER' ? '회원가입' : '로그인'}</button>
      {/* <button onClick={sendMail}>sendEmail</button> */}
    </LoginBlock>
  );
};

export default Login;

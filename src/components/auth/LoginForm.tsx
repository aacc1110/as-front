import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import useInputs from '../../lib/hooks/useInputs';

const LoginFormBlock = styled.form`
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

export type LoginFormType = {
  email: string;
  password: string;
};

interface LoginFormProps {
  mode: string;
  onSubmit: (form: LoginFormType) => Promise<void>;
}

const LoginForm: React.FC<LoginFormProps> = ({ mode, onSubmit }) => {
  const [form, onChange] = useInputs({
    email: '',
    password: ''
  });
  return (
    <LoginFormBlock>
      <input
        name="email"
        type="email"
        onChange={onChange}
        value={form.email}
        placeholder="이메일을 입력하세요."
      />
      {mode === 'LOGIN' && (
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={onChange}
          placeholder="비밀번호를 입력하세요."
        />
      )}

      <button
        type="submit"
        tabIndex={3}
        onClick={e => {
          e.preventDefault();
          onSubmit({ ...form });
        }}
      >
        {mode === 'REGISTER' ? '회원가입' : '로그인'}
      </button>
    </LoginFormBlock>
  );
};

export default LoginForm;

import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import LoginForm, { LoginFormType } from '../../components/auth/LoginForm';
import LoginTemplate from '../../components/auth/LoginTemplate';
import { CHECK_USER, SEND_EMAIL } from '../../graphql/user';
import { useMutation, MutationFn } from 'react-apollo-hooks';
import SendEmailSuccess from '../../components/auth/SendEmailSuccess';

const LoginContainerBlock = styled.div``;

interface LoginContainerProps {
  mode: 'LOGIN' | 'REGISTER';
}

const LoginContainer: React.FC<LoginContainerProps> = ({ mode }) => {
  const [authMode, setAuthMode] = useState(mode);
  const [error, setError] = useState<null | string>(null);
  const [sendEmailSuccess, setSendEmailSuccess] = useState(false);

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

  const checkUser: MutationFn<any, { email: string }> = useMutation(CHECK_USER);

  const sendEmail: MutationFn<any, { email: string }> = useMutation(SEND_EMAIL);

  const onSubmit = async (form: LoginFormType) => {
    setError(null);

    const validation = {
      email: (text: string) => {
        if (text === '' || !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(text)) {
          return '올바른 이메일주소를 입력해주세요.';
        }
      },
      password: (text: string) => {
        if (text === '') {
          return '비밀번호를 입력해주세요.';
        }
      }
    };
    if (authMode === 'LOGIN') {
      const error = validation.email(form.email) || validation.password(form.password) || null;
      if (error) {
        setError(error);
        return;
      }
    }
    const error = validation.email(form.email) || null;
    if (error) {
      setError(error);
      return;
    }

    try {
      await checkUser({
        variables: {
          email: form.email
        }
      }).then(response => {
        const data = response.data;
        console.log('data', data.checkUser);
        if (data.checkUser) {
          setError(`"${form.email}" 은 이미 사용중인 이메일주소입니다.`);
          return;
        } else {
          sendEmail({
            variables: {
              email: form.email
            }
          }).then(response => {
            const success = response.data;
            console.log('success.sendEmail', success.sendEmail);
            setSendEmailSuccess(true);
          });
        }
      });
    } catch (e) {
      console.error(e);
      setError('에러 발생!');
    }
  };
  console.log('sendEmailSuccess', sendEmailSuccess);

  return (
    <LoginContainerBlock>
      {sendEmailSuccess === true ? (
        <SendEmailSuccess registered={true} />
      ) : (
        <LoginTemplate mode={authMode} error={error} onChangeMode={onChangeMode}>
          <LoginForm mode={authMode} onSubmit={onSubmit} />
        </LoginTemplate>
      )}
    </LoginContainerBlock>
  );
};

export default LoginContainer;

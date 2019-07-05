import React, { useState } from 'react';
import styled from 'styled-components';
import qs from 'qs';
import RegisterForm, { RegisterFormType } from '../../components/auth/RegisterForm';
import { RouteComponentProps, withRouter } from 'react-router';
import { useQuery } from 'react-apollo-hooks';
import { GET_EMAIL_CONFIRM } from '../../graphql/user';
import RegisterTemplate from '../../components/auth/RegisterTemplate';

const RegisterContainerBlock = styled.div``;

interface RegisterContainerProps extends RouteComponentProps<{}> {}

const RegisterContainer: React.FC<RegisterContainerProps> = ({ location, history }: any) => {
  const query: { code?: string } = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });

  const [errors, setErrors] = useState<null | string>(null);
  /* const xd = useMutation(SEND_EMAIL); */
  const onSubmit = async (form: RegisterFormType) => {
    setErrors(null);
    // validate
    const validation = {
      displayName: (text: string) => {
        if (text === '') {
          return '이름을 입력해주세요.';
        }
        if (text.length > 45) {
          return '이름은 최대 45자까지 입력 할 수 있습니다.';
        }
      },
      username: (text: string) => {
        if (!/^[a-z0-9-_]{3,16}$/.test(text)) {
          return '아이디는 3~16자의 알파벳,숫자,혹은 - _ 으로 이루어져야 합니다.';
        }
      },
      shortBio: (text: string) => {
        if (text.length > 140) {
          return `한 줄 소개는 140자 미만으로 입력해주세요. (현재 ${text.length}자)`;
        }
      }
    };

    const errors =
      validation.displayName(form.displayName) ||
      validation.username(form.username) ||
      validation.shortBio(form.shortBio) ||
      null;

    if (errors) {
      setErrors(errors);
      return;
    }

    if (query.code) {
      const formWithoutEmail = { ...form };
      delete formWithoutEmail.email;

      try {
        /* await xd({ variables: { code: query.code } }).then(response => {
          return response.data;
        });
        console.log('xd', xd); */
        history.push('/');
      } catch (e) {
        if (e.response.status === 409) {
          setErrors('이미 존재하는 아이디입니다.');
          return;
        }
        setErrors('에러 발생!');
      }
    }
  };
  const { loading, error, data } = useQuery(GET_EMAIL_CONFIRM, {
    variables: {
      code: query.code
    }
  });
  if (loading || !data) return null;
  if (error) {
    return <div> Error! ${error.message}</div>;
  }
  return (
    <RegisterContainerBlock>
      <RegisterTemplate>
        <RegisterForm
          onSubmit={onSubmit}
          defaultEmail={data.userEmailConfirm.email}
          errors={errors}
        />
      </RegisterTemplate>
    </RegisterContainerBlock>
  );
};

export default withRouter(RegisterContainer);

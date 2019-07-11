import React from 'react';
import styled from 'styled-components';
import { useMutation, MutationFn } from 'react-apollo-hooks';
import { LOGIN } from '../graphql/user';

const CheckLoginBlock = styled.div``;

interface CheckLoginProps {
  email: string;
  password: string;
}

const CheckLogin: React.FC<CheckLoginProps> = ({ email, password }) => {
  const login: MutationFn<unknown, { email: string; password: string }> = useMutation(LOGIN, {
    variables: {
      email: email,
      password: password
    }
  });
  console.log('data.id', login);
  return <CheckLoginBlock />;
};

export default CheckLogin;

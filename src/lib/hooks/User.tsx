import React from 'react';
import styled from 'styled-components';
import { Cookies } from 'react-cookie';

const UserBlock = styled.div``;

interface UserProps {}

const User: React.FC<UserProps> = props => {
  const cookies = new Cookies();
  const token = cookies.get('refresh-token');
  console.log('token', token);
  return <UserBlock />;
};

export default User;

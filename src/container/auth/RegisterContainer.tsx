import React from 'react';
import styled from 'styled-components';

const RegisterContainerBlock = styled.div``;

interface RegisterContainerProps {}

const RegisterContainer: React.FC<RegisterContainerProps> = props => {
  return <RegisterContainerBlock>회원가입</RegisterContainerBlock>;
};

export default RegisterContainer;

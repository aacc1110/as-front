import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const RegisterTemplateBlock = styled.div`
  width: 768px;
  margin: 0 auto;
  padding-top: 100px;
  line-height: 1.5;
  h1 {
    font-size: 4rem;
    color: ${palette.gray9};
    font-weight: bolder;
    margin: 0;
  }
  .description {
    font-size: 1.5rem;
    color: ${palette.gray9};
  }
`;

interface RegisterTemplateProps {}

const RegisterTemplate: React.FC<RegisterTemplateProps> = ({ children }) => {
  return (
    <RegisterTemplateBlock>
      <h1>환영합니다!</h1>
      <div className="description">기본회원정보를 등록해주세요</div>
      <div className="contents">{children}</div>
    </RegisterTemplateBlock>
  );
};

export default RegisterTemplate;

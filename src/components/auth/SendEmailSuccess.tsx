import React from 'react';
import styled from 'styled-components';
import { MdCheck } from 'react-icons/md';

import palette from '../../styles/palette';

const SendEmailSuccessBlock = styled.div`
  display: flex;
  align-items: center;
  background: ${palette.melrose3};
  border: 1px solid ${palette.melrose2};
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  height: 3rem;
  color: ${palette.melrose7};
  .icon {
    font-size: 1.5rem;
  }
  .description {
    font-size: 0.875rem;
    flex: 1;
    text-align: center;
  }
`;

interface SendEmailSuccessProps {
  registered: boolean;
}

const SendEmailSuccess: React.FC<SendEmailSuccessProps> = ({ registered }) => {
  const text = registered ? '회원가입' : '비밀번호변경';
  return (
    <SendEmailSuccessBlock>
      <MdCheck className="icon" />
      <div className="description">{text} 링크가 이메일로 전송되었습니다.</div>
    </SendEmailSuccessBlock>
  );
};

export default SendEmailSuccess;

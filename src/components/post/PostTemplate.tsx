import React from 'react';
import styled from 'styled-components';
import HeaderContainer from '../../container/header/HeaderContainer';

const PostTemplateBlock = styled(HeaderContainer)``;

interface PostTemplateProps {}

const PostTemplate: React.FC<PostTemplateProps> = props => {
  return <PostTemplateBlock>포스트임</PostTemplateBlock>;
};

export default PostTemplate;

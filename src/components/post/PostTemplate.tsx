import React from 'react';
import styled from 'styled-components';

const PostTemplateBlock = styled.div``;

interface PostTemplateProps {}

const PostTemplate: React.FC<PostTemplateProps> = props => {
  return <PostTemplateBlock>포스트임</PostTemplateBlock>;
};

export default PostTemplate;

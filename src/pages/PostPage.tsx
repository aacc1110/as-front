import React from 'react';
import styled from 'styled-components';

const PostPageBlock = styled.div``;

interface PostPageProps {}

const PostPage: React.FC<PostPageProps> = props => {
  return <PostPageBlock>포스트임</PostPageBlock>;
};

export default PostPage;

import React from 'react';
import styled from 'styled-components';
import PostTemplate from '../components/post/PostTemplate';

const PostPageBlock = styled.div``;

interface PostPageProps {}

const PostPage: React.FC<PostPageProps> = props => {
  return (
    <PostPageBlock>
      <PostTemplate />
    </PostPageBlock>
  );
};

export default PostPage;

import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const PostPageBlock = styled.div``;

interface PostPageProps {}

const PostPage: React.FC<PostPageProps> = props => {
  return (
    <PostPageBlock>
      <Layout />
    </PostPageBlock>
  );
};

export default PostPage;

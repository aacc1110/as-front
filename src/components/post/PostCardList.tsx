import React from 'react';
import styled from 'styled-components';
import { Post } from '../../graphql/post';
import PostCard from './PostCard';

const PostCardListBlock = styled.div``;

interface PostCardListProps {
  posts: Post[];
}

const PostCardList: React.FC<PostCardListProps> = ({ posts }) => {
  return (
    <PostCardListBlock>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </PostCardListBlock>
  );
};

export default PostCardList;

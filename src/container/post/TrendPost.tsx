import React from 'react';

import { GET_POST_LIST } from '../../graphql/post';
import PostCardList from '../../components/post/PostCardList';
import { useQuery } from 'react-apollo-hooks';

interface TrendPostProps {}

const TrendPost: React.FC<TrendPostProps> = props => {
  const { loading, error, data } = useQuery(GET_POST_LIST);
  if (loading || !data) return null;
  if (error) {
    return <div> Error! ${error.message}</div>;
  }
  console.log('data', data.posts);
  return <PostCardList posts={data.posts} />;
};

export default TrendPost;

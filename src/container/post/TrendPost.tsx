import React from 'react';
import { Query, QueryResult } from 'react-apollo';

import { GET_POST_LIST, Post } from '../../graphql/post';
import PostCardList from '../../components/post/PostCardList';

interface TrendPostProps {}

const TrendPost: React.FC<TrendPostProps> = props => {
  return (
    <Query query={GET_POST_LIST}>
      {({ loading, error, data, fetchMore, client }: QueryResult<{ posts: Post[] }>) => {
        if (loading || error || !data) return null;
        return <PostCardList posts={data.posts} />;
      }}
    </Query>
  );
};

export default TrendPost;

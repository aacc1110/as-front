import React from 'react';
import { QueryResult, Query } from 'react-apollo';

import { GET_POST_LIST, Post } from '../graphql/post';
import PostCardList from '../components/post/PostCardList';

interface TrendPageProps {}

const TrendPage: React.FC<TrendPageProps> = props => {
  return (
    <Query query={GET_POST_LIST}>
      {({ loading, error, data, fetchMore, client }: QueryResult<{ posts: Post[] }>) => {
        if (loading || error || !data) return null;
        console.log('data', data);
        return <PostCardList posts={data.posts} />;
      }}
    </Query>
  );
};

export default TrendPage;

import React from 'react';
import { QueryResult, Query } from 'react-apollo';

import { GET_POST_LIST, PartialPost } from '../graphql/post';

interface TrendPageProps {}

const TrendPage: React.FC<TrendPageProps> = props => {
  return (
    <Query query={GET_POST_LIST}>
      {({ loading, error, data, fetchMore, client }: QueryResult<{ posts: PartialPost[] }>) => {
        if (loading || error || !data) return null;
        return (
          <>
            <div>{JSON.stringify(data)}</div>;
          </>
        );
      }}
    </Query>
  );
};

export default TrendPage;

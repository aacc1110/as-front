import React from 'react';
import { QueryResult, Query } from 'react-apollo';

import { getPost } from '../graphql/post';

interface TrendPageProps {}

const TrendPage: React.FC<TrendPageProps> = props => {
  return (
    <Query query={getPost}>
      {({ loading, error, data, fetchMore, client }: QueryResult<{ posts: [] }>) => {
        if (error || !data) return null;
        return <div>{JSON.stringify(data)}</div>;
      }}
    </Query>
  );
};

export default TrendPage;

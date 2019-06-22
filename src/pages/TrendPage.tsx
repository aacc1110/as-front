import React from 'react';
import styled from 'styled-components';
import { getPost } from '../graphql/post';
import { QueryResult, Query } from 'react-apollo';

const TrendPageBlock = styled.div``;

interface TrendPageProps {}

const TrendPage: React.FC<TrendPageProps> = props => {
  return (
    <Query query={getPost}>
      {({ loading, error, data, fetchMore, client }: QueryResult<{ posts: [] }>) => {
        if (error || !data || !data.posts) return null;
        return JSON.stringify(data);
      }}
    </Query>
  );
};

export default TrendPage;

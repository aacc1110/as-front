import gql from 'graphql-tag';

export interface Post {
  id: string;
  title: string;
  body: string;
}

export interface PartialPost {
  id: string;
  title: string;
  body: string;
}

export const GET_POST_LIST = gql`
  {
    posts {
      id
      title
      body
    }
  }
`;

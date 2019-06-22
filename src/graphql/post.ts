import gql from 'graphql-tag';

export interface Post {
  id: string;
  title: string;
  body: string;
}

export const getPost = gql`
  {
    posts {
      id
      title
      body
    }
  }
`;

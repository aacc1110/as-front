import gql from 'graphql-tag';

export const getPost = gql`
  {
    posts {
      id
      title
      body
      user {
        id
        name
        email
      }
    }
  }
`;

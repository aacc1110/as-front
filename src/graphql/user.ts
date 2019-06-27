import gql from 'graphql-tag';
import { Post } from './post';

export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  userprofile: UserProfile;
  posts: Post[];
}

export interface UserProfile {
  id: string;
  about: string;
  thumbnail: string;
  mobile: string;
}

export const GET_CURRENT_USER = gql`
  {
    me {
      id
      name
      email
      userprofile {
        about
        mobile
        thumbnail
      }
      posts {
        tags {
          tag
        }
        id
        title
        comments {
          comment
        }
      }
    }
  }
`;

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

export interface UserEmailConfirm {
  id: string;
  code: string;
  email: string;
}

export interface UserInput {
  email: string;
  name: string;
  password: string;
}

export interface UserProfileInput {
  thumbnail: string;
  about: string;
  mobile: string;
}

export const CHECK_USER = gql`
  mutation CheckUser($email: String!) {
    checkUser(email: $email)
  }
`;
export const SEND_EMAIL = gql`
  mutation SendEmail($email: String!) {
    sendEmail(email: $email)
  }
`;
export const CREATE_ME = gql`
  mutation CreateMe($user: UserInput!, $userprofile: UserProfileInput) {
    createMe(user: $user, userprofile: $userprofile)
  }
`;
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        email
        name
        userprofile {
          thumbnail
          about
        }
        posts {
          id
        }
      }
    }
  }
`;
export const GET_USER = gql`
  query User($id: ID, $email: String) {
    user(id: $id, email: $email) {
      email
    }
  }
`;
export const GET_USERS = gql`
  {
    users {
      email
    }
  }
`;
export const GET_EMAIL_CONFIRM = gql`
  query userEmailConfirm($code: String) {
    userEmailConfirm(code: $code) {
      email
      code
      confirm
      createdAt
    }
  }
`;

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

import gql from 'graphql-tag';
import { User } from './user';

export interface Post {
  id: string;
  title: string;
  body: string;
  url_path: string;
  thumbnail: string;
  views: number;
  is_private: boolean;
  released_at: string;
  created_at: string;
  updated_at: string;
  user: User;
  images: Image[];
  tags: Tag[];
  comments: Comment[];
}
export interface Image {
  id: string;
  image_url: string;
  post: Post;
}

export interface Tag {
  id: string;
  tag: string;
  posts: Post[];
}

export interface Comment {
  id: string;
  comment: string;
  post: Post;
}

export const GET_POST_LIST = gql`
  {
    posts {
      id
      title
      body
      createdAt
      user {
        id
        name
        email
        userprofile {
          about
          mobile
          thumbnail
        }
      }
      tags {
        tag
      }
      comments {
        comment
      }
    }
  }
`;

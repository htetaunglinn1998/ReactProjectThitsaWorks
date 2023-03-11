//Global post type
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

//Global comment type
export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

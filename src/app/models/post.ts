import { PostComment } from "./post-comment";

export class Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  comments : PostComment[];

  constructor(post: IPost) {
    this.id = post.id;
    this.userId = post.userId;
    this.title =  post.title;
    this.body = post.body;
    this.comments = post.comments;
  }
}

interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
  comments: PostComment[]
}
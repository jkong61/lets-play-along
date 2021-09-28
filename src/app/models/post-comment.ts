export class PostComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;

  constructor(comment: IPostComment){
    this.postId = comment.postId;
    this.id = comment.id;
    this.name = comment.name;
    this.email = comment.email;
    this.body = comment.body;
  }
}

interface IPostComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
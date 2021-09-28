import { Photo } from "./photo";

export class Ablum {
  userId: number;
  id: number;
  title: string;
  photos: Photo[];

  constructor(album: IAlbum){
    this.userId = album.userId;
    this.id = album.id;
    this.title = album.title;
    this.photos = album.photos;
  }
}

interface IAlbum {
  userId: number;
  id: number;
  title: string;
  photos: Photo[];
}
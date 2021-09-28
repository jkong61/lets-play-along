export class Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;

  constructor(photo: IPhoto) {
    this.albumId = photo.albumId
    this.id = photo.id
    this.title = photo.title
    this.url = photo.url
    this.thumbnailUrl = photo.thumbnailUrl
  }
}

interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
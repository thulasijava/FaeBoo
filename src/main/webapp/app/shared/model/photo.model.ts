import { IPost } from 'app/shared/model//post.model';
import { IAlbum } from 'app/shared/model//album.model';

export interface IPhoto {
    id?: number;
    imageURL?: string;
    size?: number;
    post?: IPost;
    albums?: IAlbum[];
}

export class Photo implements IPhoto {
    constructor(public id?: number, public imageURL?: string, public size?: number, public post?: IPost, public albums?: IAlbum[]) {}
}

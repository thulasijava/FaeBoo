import { IPost } from 'app/shared/model//post.model';

export interface IVideo {
    id?: number;
    videoURL?: string;
    size?: number;
    post?: IPost;
}

export class Video implements IVideo {
    constructor(public id?: number, public videoURL?: string, public size?: number, public post?: IPost) {}
}

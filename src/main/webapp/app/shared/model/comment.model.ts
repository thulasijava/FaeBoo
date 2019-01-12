import { IUser } from 'app/core/user/user.model';
import { IPost } from 'app/shared/model//post.model';

export interface IComment {
    id?: number;
    content?: string;
    likes?: number;
    dislikes?: number;
    commenter?: IUser;
    post?: IPost;
}

export class Comment implements IComment {
    constructor(
        public id?: number,
        public content?: string,
        public likes?: number,
        public dislikes?: number,
        public commenter?: IUser,
        public post?: IPost
    ) {}
}

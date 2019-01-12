import { IUser } from 'app/core/user/user.model';

export interface IPost {
    id?: number;
    numberOfComments?: number;
    content?: string;
    likes?: number;
    dislikes?: number;
    owner?: IUser;
}

export class Post implements IPost {
    constructor(
        public id?: number,
        public numberOfComments?: number,
        public content?: string,
        public likes?: number,
        public dislikes?: number,
        public owner?: IUser
    ) {}
}

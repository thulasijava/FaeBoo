import { IUser } from 'app/core/user/user.model';

export interface IAlbum {
    id?: number;
    name?: string;
    description?: string;
    owner?: IUser;
}

export class Album implements IAlbum {
    constructor(public id?: number, public name?: string, public description?: string, public owner?: IUser) {}
}

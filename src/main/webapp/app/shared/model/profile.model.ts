import { IUser } from 'app/core/user/user.model';

export interface IProfile {
    id?: number;
    bio?: string;
    accessible?: boolean;
    userProfile?: IUser;
}

export class Profile implements IProfile {
    constructor(public id?: number, public bio?: string, public accessible?: boolean, public userProfile?: IUser) {
        this.accessible = this.accessible || false;
    }
}

import { IUser } from 'app/core/user/user.model';

export interface IFriend {
    id?: number;
    topFriend?: boolean;
    user?: IUser;
    friend?: IUser;
}

export class Friend implements IFriend {
    constructor(public id?: number, public topFriend?: boolean, public user?: IUser, public friend?: IUser) {
        this.topFriend = this.topFriend || false;
    }
}

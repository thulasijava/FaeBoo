import { IUser } from 'app/core/user/user.model';

export interface IAccountDetails {
    id?: number;
    securityQuestion?: string;
    securityAnswer?: string;
    phoneNumber?: string;
    userAccount?: IUser;
}

export class AccountDetails implements IAccountDetails {
    constructor(
        public id?: number,
        public securityQuestion?: string,
        public securityAnswer?: string,
        public phoneNumber?: string,
        public userAccount?: IUser
    ) {}
}

import { AccountType } from '../enums';

export interface ISignup {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
    roleId: AccountType;
}

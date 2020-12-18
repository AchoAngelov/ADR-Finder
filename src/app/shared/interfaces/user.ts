import { IBase } from './base';

export interface IUser extends IBase {
  email: string;
  username: string;
  password: string;
}

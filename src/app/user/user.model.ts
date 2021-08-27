export class User {
  constructor(
    public email: string,
    public id: string,
    public token: string,
    public isAdmin: boolean
  ) {}

  get getToken(): string {
    return this.token;
  }
}

export default class User {
  constructor(
    public readonly id: number,
    public name: string,
    public email: string,
    public password: string,
    public isActive: boolean,
    public readonly createdAt: Date
  ) {}
}

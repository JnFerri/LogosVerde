export default class PestDisease {
  constructor(
    public readonly id: number,
    public name: string,
    public description: string | null,
    public controlDescription: string | null
  ) {}
}

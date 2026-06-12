export default class UnitMeasurements {
  public readonly id: number;
  public description: string;
  public abbreviation: string;

  constructor(
    id: number,
    description: string,
    abbreviation: string
  ) {
    this.id = id;
    this.description = description;
    this.abbreviation = abbreviation;
  }
}
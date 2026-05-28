export default class PlantingArea {
  public readonly id: number;
  public name: string;
  public sunshineHours: number | null;
  public projectId: number;
  public createdAt: Date;

  constructor(
    id: number,
    name: string,
    sunshineHours: number | null,
    projectId: number,
    createdAt: Date
  ) {
    this.id = id;
    this.name = name;
    this.sunshineHours = sunshineHours;
    this.projectId = projectId;
    this.createdAt = createdAt;
  }
}
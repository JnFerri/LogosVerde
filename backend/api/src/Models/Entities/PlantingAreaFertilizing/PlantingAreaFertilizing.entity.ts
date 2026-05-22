export default class PlantingAreaFertilizing {
  constructor(
    public readonly id: number,
    public description: string,
    public plantingAreaId: number,
    public fertilizingDate: Date,
    public createdAt: Date
  ) {}
}

export default class PlantingAreaPlant {
  constructor(
    public readonly id: number,
    public plantingAreaId: number,
    public plantId: number,
    public plantingMethodId: number,
    public isPlanted: boolean,
    public isHarvested: boolean,
    public plantingDate: Date | null,
    public harvestDate: Date | null,
    public plantingQuantity: number | null,
    public harvestQuantity: number | null
  ) {}
}

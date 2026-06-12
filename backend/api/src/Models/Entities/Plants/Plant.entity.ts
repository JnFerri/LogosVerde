
export default class Plant {
  constructor(
    public readonly id : number,
    public name: string,
    public scientificName: string,
    public harvestMinDays: number,
    public harvestMaxDays: number,
    public sunshineMinHours: number,
    public sunshineMaxHours: number,
    public plantTypeId: number,
    public germinationMinDays: number,
    public germinationMaxDays: number,
    public phMin: number,
    public phMax: number,
    public plantingDistancePlants: number,
    public managementDescription: string | null,
    public plantingDescription: string | null,
    public plantIconName : string,
    public harvestUnitMeasurementId: number ,
    public plantingUnitMeasurementId: number,
    public createdAt: Date
  ){}
}

export default class Plant {
  public readonly id: number;
  public name: string;
  public scientificName: string;
  public harvestMinDays: number;
  public harvestMaxDays: number;
  public sunshineMinHours: number;
  public sunshineMaxHours: number;
  public plantTypeId: number;
  public germinationMinDays: number;
  public germinationMaxDays: number;
  public phMin: number;
  public phMax: number;
  public plantingDistancePlants: number;
  public managementDescription: string | null;
  public plantingDescription: string | null;
  public harvestUnitMeasurementId: number;
  public plantingUnitMeasurementId: number;
  public createdAt: Date;

  constructor(
    id: number,
    name: string,
    scientificName: string,
    harvestMinDays: number,
    harvestMaxDays: number,
    sunshineMinHours: number,
    sunshineMaxHours: number,
    plantTypeId: number,
    germinationMinDays: number,
    germinationMaxDays: number,
    phMin: number,
    phMax: number,
    plantingDistancePlants: number,
    managementDescription: string | null,
    plantingDescription: string | null,
    harvestUnitMeasurementId: number,
    plantingUnitMeasurementId: number,
    createdAt: Date
  ) {
    this.id = id;
    this.name = name;
    this.scientificName = scientificName;
    this.harvestMinDays = harvestMinDays;
    this.harvestMaxDays = harvestMaxDays;
    this.sunshineMinHours = sunshineMinHours;
    this.sunshineMaxHours = sunshineMaxHours;
    this.plantTypeId = plantTypeId;
    this.germinationMinDays = germinationMinDays;
    this.germinationMaxDays = germinationMaxDays;
    this.phMin = phMin;
    this.phMax = phMax;
    this.plantingDistancePlants = plantingDistancePlants;
    this.managementDescription = managementDescription;
    this.plantingDescription = plantingDescription;
    this.harvestUnitMeasurementId = harvestUnitMeasurementId;
    this.plantingUnitMeasurementId = plantingUnitMeasurementId;
    this.createdAt = createdAt;
  }
}

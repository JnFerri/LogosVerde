import Plant from "../Models/Entities/Plants/Plant.entity";
import type { PlantWithRelations } from "../Models/Entities/Plants/Plant.types";
import type { Prisma } from "../../generated/prisma/client";
import { UnitMeasurementMapper } from "./UnitMeasurement";
import { PlantTypesMapper } from "./PlantTypes";
import { PlantPestDiseaseMapper } from "./PlantPestDisease";

export class PlantMapper {
  static toEntity(data: Prisma.PlantsGetPayload<true>): Plant {
    return new Plant(
      data.id,
      data.name,
      data.scientificName,
      data.harvestMinDays,
      data.harvestMaxDays,
      data.sunshineMinHours,
      data.sunshineMaxHours,
      data.plantTypeId,
      data.germinationMinDays,
      data.germinationMaxDays,
      Number(data.phMin),
      Number(data.phMax),
      data.plantingDistancePlants,
      data.managementDescription,
      data.plantingDescription,
      data.harvestUnitMeasurementId,
      data.plantingUnitMeasurementId,
      data.createdAt
    );
    };

    static toEntities(data: Prisma.PlantsGetPayload<true>[]): Plant[] {
      return data.map((item) => this.toEntity(item));
    }

    static toEntityWithRelations(data: Prisma.PlantsGetPayload<{ include: { harvestUnitMeasurement: true, plantingUnitMeasurement: true, plantTypes: true, plantPestDiseases: true} }>): PlantWithRelations {
      const plant = this.toEntity(data);
    
      return {
      ...plant,
      harvestUnitMeasurement : UnitMeasurementMapper.toEntity(data.harvestUnitMeasurement),
      plantingUnitMeasurement : UnitMeasurementMapper.toEntity(data.plantingUnitMeasurement),
      plantTypes: PlantTypesMapper.toEntity(data.plantTypes),
      plantPestDiseases: PlantPestDiseaseMapper.toEntities(data.plantPestDiseases)
    };
  }
    static toEntitiesWithRelations(data:Prisma.PlantsGetPayload<{ include: { harvestUnitMeasurement: true, plantingUnitMeasurement: true, plantTypes: true , plantPestDiseases: true} }>[]): PlantWithRelations[] {
      return data.map((item) => this.toEntityWithRelations(item));
    }

}
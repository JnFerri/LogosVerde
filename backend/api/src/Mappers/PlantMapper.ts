import type Plant from "../Models/Entities/Plants/Plant.entity";
import type { PlantWithRelations } from "../Models/Entities/Plants/Plant.types";
import type { Prisma } from "../../generated/prisma/client";
import { UnitMeasurementMapper } from "./UnitMeasurement";
import { PlantTypesMapper } from "./PlantTypes";

export class PlantMapper {
  static toEntity(data: Prisma.PlantsGetPayload<true>): Plant {
    return {
      ...data,
      phMin: Number(data.phMin),
      phMax: Number(data.phMax),
    };
  }
    static toEntityWithRelations(data: Prisma.PlantsGetPayload<{ include: { harvestUnitMeasurement: true, plantingUnitMeasurement: true, plantTypes: true } }>): PlantWithRelations {
    return {
      ...data,
      phMin: Number(data.phMin),
      phMax: Number(data.phMax),
      harvestUnitMeasurement : UnitMeasurementMapper.toEntity(data.harvestUnitMeasurement),
      plantingUnitMeasurement : UnitMeasurementMapper.toEntity(data.plantingUnitMeasurement),
      plantTypes: PlantTypesMapper.toEntity(data.plantTypes)
    };
  }
}
import type { Prisma } from "../../generated/prisma/client";
import PlantingArea from "../Models/Entities/PlantingArea/PlantingArea.entity";
import type { PlantingAreaWithRelations } from "../Models/Entities/PlantingArea/PlantingArea.types";
import { PlantingAreaFertilizingMapper } from "./PlantingAreaFertilizing";
import { PlantingAreaPlantsMapper } from "./PlantingAreaPlants";


export class PlantingAreaMapper {
  static toEntity(data: Prisma.PlantingAreasGetPayload<true>): PlantingArea {
    return new PlantingArea(
      data.id,
      data.name,
      data.sunshineHours,
      data.projectId,
      data.createdAt
      );
  }

  static toEntities(data: Prisma.PlantingAreasGetPayload<true>[]): PlantingArea[] {
    return data.map((item) => this.toEntity(item));
  }

  static toEntityWithRelations(data: Prisma.PlantingAreasGetPayload<{ include: { plantingAreaPlants: true , plantingAreaFertilizings: true } }>): PlantingAreaWithRelations {
    const plantingArea = this.toEntity(data);
    return {
      ...plantingArea,
      plantingAreaPlants: PlantingAreaPlantsMapper.toEntities(data.plantingAreaPlants),
      plantingAreaFertilizings: PlantingAreaFertilizingMapper.toEntities(data.plantingAreaFertilizings)
    };
  }

  static toEntitiesWithRelations(data: Prisma.PlantingAreasGetPayload<{ include: { plantingAreaPlants: true , plantingAreaFertilizings: true } }>[]): PlantingAreaWithRelations[] {
    return data.map((item) => this.toEntityWithRelations(item));
  }
}

import type { Prisma } from "../../generated/prisma/client";
import PlantingAreaPlant from "../Models/Entities/PlantingAreaPlant/PlantingAreaPlant.entity";

export class PlantingAreaPlantsMapper {
  static toEntity(data: Prisma.PlantingAreaPlantsGetPayload<true>): PlantingAreaPlant {
    return new PlantingAreaPlant(
      data.id,
      data.plantingAreaId,
      data.plantId,
      data.plantingMethodId,
      data.isPlanted,
      data.isHarvested,
      data.plantingDate,
      data.harvestDate,
      data.plantingQuantity,
      data.harvestQuantity ? Number(data.harvestQuantity) : null,
    );
  }

  static toEntities(data: Prisma.PlantingAreaPlantsGetPayload<true>[]): PlantingAreaPlant[] {
    return data.map((item) => this.toEntity(item));
  }
}

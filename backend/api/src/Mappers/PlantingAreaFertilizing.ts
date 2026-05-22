import type { Prisma } from "../../generated/prisma/client";
import PlantingAreaFertilizing from "../Models/Entities/PlantingAreaFertilizing/PlantingAreaFertilizing.entity";

export class PlantingAreaFertilizingMapper {
  static toEntity(data: Prisma.PlantingAreaFertilizingGetPayload<true>): PlantingAreaFertilizing {
    return new PlantingAreaFertilizing(
      data.id,
      data.description,
      data.plantingAreaId,
      data.fertilizingDate,
      data.createdAt
    );
  }

  static toEntities(data: Prisma.PlantingAreaFertilizingGetPayload<true>[]): PlantingAreaFertilizing[] {
    return data.map((item) => this.toEntity(item));
  }
}

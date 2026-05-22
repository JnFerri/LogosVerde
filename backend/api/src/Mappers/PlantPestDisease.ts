import type { Prisma } from "../../generated/prisma/client";
import PlantPestDisease from "../Models/Entities/PlantPestDisease/PlantPestDisease.entity";

export class PlantPestDiseaseMapper {
  static toEntity(data: Prisma.PlantPestDiseasesGetPayload<true>): PlantPestDisease {
    return new PlantPestDisease(
      data.plantId,
      data.pestDiseaseId
    );
  }

  static toEntities(data: Prisma.PlantPestDiseasesGetPayload<true>[]): PlantPestDisease[] {
    return data.map((item) => this.toEntity(item));
  }
}

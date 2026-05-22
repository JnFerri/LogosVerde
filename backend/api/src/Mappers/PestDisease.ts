import type { Prisma } from "../../generated/prisma/client";
import PestDisease from "../Models/Entities/PestDisease/PestDisease.entity";
import type { PestDiseasesWithRelations } from "../Models/Entities/PestDisease/PestDisease.types";
import { PlantPestDiseaseMapper } from "./PlantPestDisease";

export class PestDiseaseMapper {
  static toEntity(data: Prisma.PestsDiseasesGetPayload<true>): PestDisease {
    return new PestDisease(
      data.id,
      data.name,
      data.description,
      data.controlDescription
    );
  }

  static toEntities(data: Prisma.PestsDiseasesGetPayload<true>[]): PestDisease[] {
    return data.map((item) => this.toEntity(item));
  }

  static toEntityWithRelations(data: Prisma.PestsDiseasesGetPayload<{ include: { plantPestDiseases: true } }>): PestDiseasesWithRelations {
    const pestDisease = this.toEntity(data);
    return {
      ...pestDisease,
      plantPestDiseases: PlantPestDiseaseMapper.toEntities(data.plantPestDiseases),
    };
  }

  static toEntitiesWithRelations(data: Prisma.PestsDiseasesGetPayload<{ include: { plantPestDiseases: true } }>[]): PestDiseasesWithRelations[] {
    return data.map((item) => this.toEntityWithRelations(item));
  }
}

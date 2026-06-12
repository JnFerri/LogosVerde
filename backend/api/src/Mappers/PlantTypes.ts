import type { PlantTypes as PrismaPlantType } from "../../generated/prisma/client";
import PlantType from "../Models/Entities/PlantTypes/PlantTypes.entity";

export class PlantTypesMapper {
  static toEntity(prismaPlantType: PrismaPlantType): PlantType {
    return new PlantType(prismaPlantType.id, prismaPlantType.description);
  }

  static toEntities(prismaPlantTypes: PrismaPlantType[]): PlantType[] {
    return prismaPlantTypes.map((item) => this.toEntity(item));
  }
}
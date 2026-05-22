import type { Prisma } from "../../generated/prisma/client";
import PlantTypes from "../Models/Entities/PlantTypes/PlantTypes.entity";

export class PlantTypesMapper {
  static toEntity(data: Prisma.PlantTypesGetPayload<true>): PlantTypes {
    return new PlantTypes(
      data.id,
      data.description
    );
  }
}

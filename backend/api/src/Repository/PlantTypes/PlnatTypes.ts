
import type { PrismaClient } from "../../../generated/prisma/client";
import { prisma } from "../../Configs/Prisma";
import { PlantTypesMapper } from "../../Mappers/PlantTypes";
import type PlantType from "../../Models/Entities/PlantTypes/PlantTypes.entity";
import type { PlantTypeIdParam } from "../../Models/Entities/PlantTypes/PlantTypes.types";


class PlantTypesRepository {
  private db: PrismaClient

  constructor(db: PrismaClient = prisma) {
    this.db = db;
  }

  async getAll(): Promise<PlantType[]> {
    const plantTypes = await this.db.plantTypes.findMany();
    return PlantTypesMapper.toEntities(plantTypes);

  }
  async getById(id: PlantTypeIdParam): Promise<PlantType | null> {
    const plantType = await this.db.plantTypes.findUnique({
      where: {id:id}
  });
    if (!plantType ) return null;
    return PlantTypesMapper.toEntity(plantType );
  }

}

export default PlantTypesRepository;

import type { Prisma, PrismaClient } from "../../../generated/prisma/client";
import { prisma } from "../../Configs/Prisma";
import mapToPrismaUpdate from "../../Helpers/mapToPrismaUpdate";
import type { PlantingArea, PlantingAreaCreate, PlantingAreaIdParam, PlantingAreaUpdate } from "../../Types/PlantingAreas";

class PlantingAreasRepository {
  private db: PrismaClient

  constructor(db: PrismaClient = prisma) {
    this.db = db;
  }

  async getAll(): Promise<PlantingArea[]> {
    return this.db.plantingAreas.findMany();
  }

  async getById(id: PlantingAreaIdParam): Promise<PlantingArea | null> {
    return this.db.plantingAreas.findUnique({
      where: {id:id}
    });
  }

  async create(data: PlantingAreaCreate): Promise<PlantingArea> {
    return this.db.plantingAreas.create({
      data,
    });
  }

  async update(id: PlantingAreaIdParam, data: PlantingAreaUpdate): Promise<PlantingArea> {
    const prismaData = mapToPrismaUpdate<
      PlantingAreaUpdate,
      Prisma.PlantingAreasCreateInput
    >(data)
    return this.db.plantingAreas.update({
      where: {id:id},
      data: prismaData,
    });
  }

  async delete(id: PlantingAreaIdParam): Promise<PlantingArea> {
    return this.db.plantingAreas.delete({
      where: {id:id},
    });
  }

}

export default PlantingAreasRepository;
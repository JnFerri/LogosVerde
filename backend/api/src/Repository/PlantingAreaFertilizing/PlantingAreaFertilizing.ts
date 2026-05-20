
import type { Prisma, PrismaClient } from "../../../generated/prisma/client";
import { prisma } from "../../Configs/Prisma";
import mapToPrismaUpdate from "../../Helpers/mapToPrismaUpdate";
import type { PlantingAreaFertilizing, PlantingAreaFertilizingCreate, PlantingAreaFertilizingIdParam, PlantingAreaFertilizingIdPlantingAreaParam, PlantingAreaFertilizingUpdate } from "../../Types/PlantingAreaFertilizing";

class PlantingAreaFertilizingRepository {
  private db: PrismaClient

  constructor(db: PrismaClient = prisma) {
    this.db = db;
  }

  async getAll(): Promise<PlantingAreaFertilizing[]> {
    return this.db.plantingAreaFertilizing.findMany();
  }

  async getById(id: PlantingAreaFertilizingIdParam): Promise<PlantingAreaFertilizing | null> {
    return this.db.plantingAreaFertilizing.findUnique({
      where: {id:id}
    });
  }

  async getByIdPlantingArea(id: PlantingAreaFertilizingIdPlantingAreaParam): Promise<PlantingAreaFertilizing[]> {
    return this.db.plantingAreaFertilizing.findMany({
      where: {plantingAreaId :id}
    });
  }

  async create(data: PlantingAreaFertilizingCreate): Promise<PlantingAreaFertilizing> {
    return this.db.plantingAreaFertilizing.create({
      data,
    });
  }

  async update(id: PlantingAreaFertilizingIdParam, data: PlantingAreaFertilizingUpdate): Promise<PlantingAreaFertilizing> {
    const prismaData = mapToPrismaUpdate<
      PlantingAreaFertilizingUpdate,
      Prisma.PlantingAreaFertilizingUpdateInput
    >(data)
    return this.db.plantingAreaFertilizing.update({
      where: {id:id},
      data: prismaData,
    });
  }


  async delete(id: PlantingAreaFertilizingIdParam): Promise<PlantingAreaFertilizing> {
    return this.db.plantingAreaFertilizing.delete({
      where: {id:id},
    });
  }

}

export default PlantingAreaFertilizingRepository;
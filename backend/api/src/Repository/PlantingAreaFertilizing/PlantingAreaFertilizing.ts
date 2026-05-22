
import type { Prisma, PrismaClient } from "../../../generated/prisma/client";
import { prisma } from "../../Configs/Prisma";
import mapToPrismaUpdate from "../../Helpers/mapToPrismaUpdate";
import { PlantingAreaFertilizingMapper } from "../../Mappers/PlantingAreaFertilizing";
import PlantingAreaFertilizing from "../../Models/Entities/PlantingAreaFertilizing/PlantingAreaFertilizing.entity";
import type { PlantingAreaFertilizingCreate, PlantingAreaFertilizingIdParam, PlantingAreaFertilizingUpdate } from "../../Models/Entities/PlantingAreaFertilizing/PlantingAreaFertilizing.types";

class PlantingAreaFertilizingRepository {
  private db: PrismaClient

  constructor(db: PrismaClient = prisma) {
    this.db = db;
  }

  async getAll(): Promise<PlantingAreaFertilizing[]> {
    const plantingAreaFertilizing = await this.db.plantingAreaFertilizing.findMany();
    return PlantingAreaFertilizingMapper.toEntities(plantingAreaFertilizing);

  }

  async getById(id: PlantingAreaFertilizingIdParam): Promise<PlantingAreaFertilizing | null> {
   const plantingAreaFertilizing = await this.db.plantingAreaFertilizing.findUnique({
      where: {id:id}
    });
    if (!plantingAreaFertilizing) return null;

    return PlantingAreaFertilizingMapper.toEntity(plantingAreaFertilizing);
  }

  async create(data: PlantingAreaFertilizingCreate): Promise<PlantingAreaFertilizing> {
    const plantingAreaFertilizingCreated = await this.db.plantingAreaFertilizing.create({
      data,
    });
    return PlantingAreaFertilizingMapper.toEntity(plantingAreaFertilizingCreated);
  }

  async update(id: PlantingAreaFertilizingIdParam, data: PlantingAreaFertilizingUpdate): Promise<PlantingAreaFertilizing> {
    const prismaData = mapToPrismaUpdate<
      PlantingAreaFertilizingUpdate,
      Prisma.PlantingAreaFertilizingUpdateInput
    >(data)
    const plantingAreaFertilizingUpdated = await this.db.plantingAreaFertilizing.update({
      where: {id:id},
      data: prismaData,
    });
    return PlantingAreaFertilizingMapper.toEntity(plantingAreaFertilizingUpdated);
  }


  async delete(id: PlantingAreaFertilizingIdParam): Promise<PlantingAreaFertilizing> {
    const plantingAreaFertilizingDeleted = await this.db.plantingAreaFertilizing.delete({
      where: {id:id},
    });
    return PlantingAreaFertilizingMapper.toEntity(plantingAreaFertilizingDeleted);
  }

}

export default PlantingAreaFertilizingRepository;
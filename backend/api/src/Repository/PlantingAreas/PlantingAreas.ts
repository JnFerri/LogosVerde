
import type { Prisma, PrismaClient } from "../../../generated/prisma/client";
import { prisma } from "../../Configs/Prisma";
import mapToPrismaUpdate from "../../Helpers/mapToPrismaUpdate";
import { PlantingAreaMapper } from "../../Mappers/PlantingArea";
import type PlantingArea from "../../Models/Entities/PlantingArea/PlantingArea.entity";
import type { PlantingAreaCreate, PlantingAreaIdParam, PlantingAreaUpdate, PlantingAreaWithRelations } from "../../Models/Entities/PlantingArea/PlantingArea.types";

class PlantingAreasRepository {
  private db: PrismaClient

  constructor(db: PrismaClient = prisma) {
    this.db = db;
  }

  async getAll(): Promise<PlantingArea[]> {
    const plantingAreas = await this.db.plantingAreas.findMany();
    return PlantingAreaMapper.toEntities(plantingAreas);
  }

  async getAllWithRelations(): Promise<PlantingAreaWithRelations[]> {
    const plantingAreasWithRelations = await this.db.plantingAreas.findMany({
      include: {
        plantingAreaPlants: true,
        plantingAreaFertilizings: true
      }
    });
    return PlantingAreaMapper.toEntitiesWithRelations(plantingAreasWithRelations);
  }


  async getById(id: PlantingAreaIdParam): Promise<PlantingArea | null> {
    const plantingArea = await this.db.plantingAreas.findUnique({
      where: {id:id}
    });
    if (!plantingArea) return null;
    return PlantingAreaMapper.toEntity(plantingArea);
  }

  async create(data: PlantingAreaCreate): Promise<PlantingArea> {
    const plantingAreaCreated = await this.db.plantingAreas.create({
      data,
    });
    return PlantingAreaMapper.toEntity(plantingAreaCreated);
  }

  async update(id: PlantingAreaIdParam, data: PlantingAreaUpdate): Promise<PlantingArea> {
    const prismaData = mapToPrismaUpdate<
      PlantingAreaUpdate,
      Prisma.PlantingAreasUpdateInput
    >(data)
    const plantingAreaUpdated = await this.db.plantingAreas.update({
      where: {id:id},
      data: prismaData,
    });
    return PlantingAreaMapper.toEntity(plantingAreaUpdated);
  }

  async delete(id: PlantingAreaIdParam): Promise<PlantingArea> {
    const plantingAreaDeleted = await this.db.plantingAreas.delete({
      where: {id:id},
    });
    return PlantingAreaMapper.toEntity(plantingAreaDeleted);
  }

}

export default PlantingAreasRepository;

import type { Prisma } from "../../../generated/prisma/browser";
import { prisma } from "../../Configs/Prisma";
import type { PlantCreate, PlantIdParam, PlantUpdate } from "../../Types/Plant";
import type { PrismaClient } from "../../../generated/prisma/client";
import mapToPrismaUpdate from "../../Helpers/mapToPrismaUpdate";
import type { Plant } from "../../Types/Plant";

class PlantsRepository {
  private db: PrismaClient

  constructor(db: PrismaClient = prisma) {
    this.db = db;
  }

  async getAll(): Promise<Plant[]> {

    const plants = await this.db.plants.findMany(
      {
        include: {
        harvestUnitMeasurement : true,
        plantingUnitMeasurement : true,
        plantTypes: true
      }
    }
    );

    return plants.map((plant) => ({
      ...plant,
      phMin: Number(plant.phMin),
      phMax: Number(plant.phMax),
    }));
  }

  async getById(id: PlantIdParam): Promise<Plant | null> {
    const plant = await this.db.plants.findUnique({
      where: { id:id },
      include: {
        harvestUnitMeasurement : true,
        plantingUnitMeasurement : true,
        plantTypes: true
      }
  });
    if (!plant) return null;
    return {
      ...plant,
      phMin: Number(plant.phMin),
      phMax: Number(plant.phMax),
    }
  }

  async create(data: PlantCreate): Promise<Plant> {
    const plant = await this.db.plants.create({
      data,
    });
    return {
      ...plant,
      phMin: Number(plant.phMin),
      phMax: Number(plant.phMax),
    }
  }

  async update(id: PlantIdParam, data: PlantUpdate): Promise<Plant> {
    const prismaData = mapToPrismaUpdate<
      PlantUpdate,
      Prisma.PlantsUpdateInput
    >(data)
    const plant = await this.db.plants.update({
      where: { id : id },
      data: prismaData,
    });

    return {
      ...plant,
      phMin: Number(plant.phMin),
      phMax: Number(plant.phMax),
    }
  }

  async delete(id: number): Promise<Plant> {
    const plant = await this.db.plants.delete({
      where: { id : id },
    });
    return {
      ...plant,
      phMin: Number(plant.phMin),
      phMax: Number(plant.phMax),
    }
  }

}

export default PlantsRepository;
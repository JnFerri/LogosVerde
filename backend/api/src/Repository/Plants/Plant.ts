
import type { Prisma } from "../../../generated/prisma/browser";
import { prisma } from "../../Configs/Prisma";
import type { PrismaClient } from "../../../generated/prisma/client";
import mapToPrismaUpdate from "../../Helpers/mapToPrismaUpdate";

import { PlantMapper } from "../../Mappers/PlantMapper";
import type { PlantCreate, PlantIdParam, PlantUpdate, PlantWithRelations } from "../../Models/Entities/Plants/Plant.types";
import type Plant from "../../Models/Entities/Plants/Plant.entity";

class PlantsRepository {
  private db: PrismaClient

  constructor(db: PrismaClient = prisma) {
    this.db = db;
  }

  async getAllWithRelations(): Promise<PlantWithRelations[]> {

    const plantsWithRelations = await this.db.plants.findMany(
      {
        include: {
        harvestUnitMeasurement : true,
        plantingUnitMeasurement : true,
        plantTypes: true
      }
    }
    );

     const plantsWithRelationsMapped = plantsWithRelations.map((plant) => 
      PlantMapper.toEntityWithRelations(plant)
    )

    return plantsWithRelationsMapped;
  
    }


  async getById(id: PlantIdParam): Promise<Plant | null> {
    const plant = await this.db.plants.findUnique({
      where: { id:id },
  });
    if (!plant) return null;

    return PlantMapper.toEntity(plant);
  }

  async getAll(): Promise<Plant[]> {

    const plants = await this.db.plants.findMany();

    const plantsMapped = plants.map((plant) => 
      PlantMapper.toEntity(plant)
    )
    return plantsMapped;
  }

  async getByIdWithRelations(id: PlantIdParam): Promise<Plant | null> {
    const plantWithRelations = await this.db.plants.findUnique({
      where: { id:id },
      include: {
        harvestUnitMeasurement : true,
        plantingUnitMeasurement : true,
        plantTypes: true
      }
  });
    if (!plantWithRelations) return null;

    return PlantMapper.toEntityWithRelations(plantWithRelations)
  }

  async getByName(name: string): Promise<Plant | null> {
    const plant = await this.db.plants.findUnique({
      where: { name:name },
    });
    if (!plant) return null;
    return PlantMapper.toEntity(plant)
  }

  async create(data: PlantCreate): Promise<Plant> {
    const plant = await this.db.plants.create({
      data,
    });
    return PlantMapper.toEntity(plant)
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

    return PlantMapper.toEntity(plant)
  }

  async delete(id: number): Promise<Plant> {
    const plant = await this.db.plants.delete({
      where: { id : id },
    });
    return PlantMapper.toEntity(plant)
  }

}

export default PlantsRepository;

import type { Prisma, PrismaClient } from "../../../generated/prisma/client";
import { prisma } from "../../Configs/Prisma";
import mapToPrismaUpdate from "../../Helpers/mapToPrismaUpdate";
import { PlantingAreaPlantsMapper } from "../../Mappers/PlantingAreaPlants";
import type PlantingAreaPlant from "../../Models/Entities/PlantingAreaPlant/PlantingAreaPlant.entity";
import type { PlantingAreaPlantsCreate, PlantingAreaPlantsIdParam, PlantingAreaPlantsUpdate } from "../../Models/Entities/PlantingAreaPlant/PlantingAreaPlant.types";


class PlantingAreaPlantsRepository{
 private db: PrismaClient
 
   constructor(db: PrismaClient = prisma) {
     this.db = db;
   }

   async getAll(): Promise<PlantingAreaPlant[]> {
       const plantingAreaPlants = await this.db.plantingAreaPlants.findMany();

       return PlantingAreaPlantsMapper.toEntities(plantingAreaPlants);
     }

   
     async getById(id: PlantingAreaPlantsIdParam): Promise<PlantingAreaPlant | null> {
       const plantingAreaPlants = await this.db.plantingAreaPlants.findUnique({
         where: {id:id}
       });
       if (!plantingAreaPlants) return null;
       return PlantingAreaPlantsMapper.toEntity(plantingAreaPlants);
    }

     async create(data: PlantingAreaPlantsCreate): Promise<PlantingAreaPlant> {
       const plantingAreaPlantsCreated = await this.db.plantingAreaPlants.create({
         data
       });

       return PlantingAreaPlantsMapper.toEntity(plantingAreaPlantsCreated);
     }
   
     async update(id: PlantingAreaPlantsIdParam, data: PlantingAreaPlantsUpdate): Promise<PlantingAreaPlant> {
       const prismaData = mapToPrismaUpdate<
         PlantingAreaPlantsUpdate,
         Prisma.PlantingAreaPlantsUpdateInput
       >(data)
       const plantingAreaPlantsUpdated = await this.db.plantingAreaPlants.update({
         where: {id:id},
         data: prismaData,
       });
       return PlantingAreaPlantsMapper.toEntity(plantingAreaPlantsUpdated);
     }
   
     async delete(id: PlantingAreaPlantsIdParam): Promise<PlantingAreaPlant> {
       const plantingAreaPlantsDeleted = await this.db.plantingAreaPlants.delete({
         where: {id:id},
       });
       return PlantingAreaPlantsMapper.toEntity(plantingAreaPlantsDeleted);
      }
}

export default PlantingAreaPlantsRepository;
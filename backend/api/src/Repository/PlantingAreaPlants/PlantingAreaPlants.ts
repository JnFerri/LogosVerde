
import type { Prisma, PrismaClient } from "../../../generated/prisma/client";
import { prisma } from "../../Configs/Prisma";
import mapToPrismaUpdate from "../../Helpers/mapToPrismaUpdate";
import type { PlantingAreaPlants, PlantingAreaPlantsCreate, PlantingAreaPlantsIdParam, PlantingAreaPlantsUpdate } from "../../Types/PlantingAreaPlants";

class PlantingAreaPlantsRepository{
 private db: PrismaClient
 
   constructor(db: PrismaClient = prisma) {
     this.db = db;
   }

   async getAll(): Promise<PlantingAreaPlants[]> {
       const plantingAreaPlants = await this.db.plantingAreaPlants.findMany();

       return plantingAreaPlants.map((plantingAreaPlant) => ({
         ...plantingAreaPlant,
         harvestQuantity : Number(plantingAreaPlant.harvestQuantity),
       }));
     }

   
     async getById(id: PlantingAreaPlantsIdParam): Promise<PlantingAreaPlants | null> {
       const plantingAreaPlants = await this.db.plantingAreaPlants.findUnique({
         where: {id:id}
       });
       if (!plantingAreaPlants) return null;
       return {
         ...plantingAreaPlants,
         harvestQuantity : Number(plantingAreaPlants.harvestQuantity)
     }
    }

     async create(data: PlantingAreaPlantsCreate): Promise<PlantingAreaPlants> {
       const plantingAreaPlants = await this.db.plantingAreaPlants.create({
         data
       });

       return {
         ...plantingAreaPlants,
         harvestQuantity : Number(plantingAreaPlants.harvestQuantity)
        }
     }
   
     async update(id: PlantingAreaPlantsIdParam, data: PlantingAreaPlantsUpdate): Promise<PlantingAreaPlants> {
       const prismaData = mapToPrismaUpdate<
         PlantingAreaPlantsUpdate,
         Prisma.PlantingAreaPlantsUpdateInput
       >(data)
       const plantingAreaPlants = await this.db.plantingAreaPlants.update({
         where: {id:id},
         data: prismaData,
       });
       return {
         ...plantingAreaPlants,
         harvestQuantity : Number(plantingAreaPlants.harvestQuantity)
        }
     }
   
     async delete(id: PlantingAreaPlantsIdParam): Promise<PlantingAreaPlants> {
       const plantingAreaPlants = await this.db.plantingAreaPlants.delete({
         where: {id:id},
       });
       return {
         ...plantingAreaPlants,
         harvestQuantity : Number(plantingAreaPlants.harvestQuantity)
        }
      }
}

export default PlantingAreaPlantsRepository;
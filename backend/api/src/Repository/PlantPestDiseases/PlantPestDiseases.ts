
import type { PrismaClient } from "../../../generated/prisma/client";
import { prisma } from "../../Configs/Prisma";
import type { PlantPestDiseases, PlantPestDiseasesCreate, PlantPestDiseasesIdPestDiseaseParam, PlantPestDiseasesIdPlantParam } from "../../Types/PlantPestDiseases";

class PlantPestDiseasesRepository{
 private db: PrismaClient
 
   constructor(db: PrismaClient = prisma) {
     this.db = db;
   }

   async getAll(): Promise<PlantPestDiseases[]> {
       return await this.db.plantPestDiseases.findMany();
     }

   
     async getByPlantId(id: PlantPestDiseasesIdPlantParam): Promise<PlantPestDiseases[] | null> {
       return await this.db.plantPestDiseases.findMany({
         where: {plantId:id}
       });
       
    }

    async getByPestDiseasesId(id: PlantPestDiseasesIdPestDiseaseParam): Promise<PlantPestDiseases[] | null> {
       return await this.db.plantPestDiseases.findMany({
         where: {pestDiseaseId:id}
       });
       
    }

     async create(data: PlantPestDiseasesCreate): Promise<PlantPestDiseases> {
       return await this.db.plantPestDiseases.create({
         data
       });
     }
   
     async delete(plantId: PlantPestDiseasesIdPlantParam, pestDiseaseId: PlantPestDiseasesIdPestDiseaseParam): Promise<PlantPestDiseases> {
       return await this.db.plantPestDiseases.delete({
         where: {
           plantId_pestDiseaseId: {
             plantId: plantId,
             pestDiseaseId: pestDiseaseId
         }
        }
     })
      }
}

export default PlantPestDiseasesRepository;
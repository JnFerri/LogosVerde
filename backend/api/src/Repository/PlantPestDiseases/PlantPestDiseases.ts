
import type { PrismaClient } from "../../../generated/prisma/client";
import { prisma } from "../../Configs/Prisma";
import { PlantPestDiseaseMapper } from "../../Mappers/PlantPestDisease";
import type PlantPestDisease from "../../Models/Entities/PlantPestDisease/PlantPestDisease.entity";
import type { PlantPestDiseasesCreate, PlantPestDiseasesIdPestDiseaseParam, PlantPestDiseasesIdPlantParam } from "../../Models/Entities/PlantPestDisease/PlantPestDisease.types";

class PlantPestDiseasesRepository{
 private db: PrismaClient
 
   constructor(db: PrismaClient = prisma) {
     this.db = db;
   }

   async getAll(): Promise<PlantPestDisease[]> {
       const plantPestDiseases = await this.db.plantPestDiseases.findMany()
       return PlantPestDiseaseMapper.toEntities(plantPestDiseases);
     }

   
     async getByPlantId(id: PlantPestDiseasesIdPlantParam): Promise<PlantPestDisease[] | null> {
       const plantPestDiseases = await this.db.plantPestDiseases.findMany({
         where: {plantId:id}
       })
       return PlantPestDiseaseMapper.toEntities(plantPestDiseases);
       
    }

    async getByPestDiseasesId(id: PlantPestDiseasesIdPestDiseaseParam): Promise<PlantPestDisease[] | null> {
       const plantPestDiseases = await this.db.plantPestDiseases.findMany({
         where: {pestDiseaseId:id}
       })
       return PlantPestDiseaseMapper.toEntities(plantPestDiseases);
       
    }

     async create(data: PlantPestDiseasesCreate): Promise<PlantPestDisease> {
       const plantPestDiseasesCreated = await this.db.plantPestDiseases.create({
         data
       })
       return PlantPestDiseaseMapper.toEntity(plantPestDiseasesCreated);
     
     }
   
     async delete(plantId: PlantPestDiseasesIdPlantParam, pestDiseaseId: PlantPestDiseasesIdPestDiseaseParam): Promise<PlantPestDisease> {
       const plantPestDiseasesDeleted = await this.db.plantPestDiseases.delete({
         where: {
           plantId_pestDiseaseId: {
             plantId: plantId,
             pestDiseaseId: pestDiseaseId
         }
        }
     })
     return PlantPestDiseaseMapper.toEntity(plantPestDiseasesDeleted);
      }
}

export default PlantPestDiseasesRepository;
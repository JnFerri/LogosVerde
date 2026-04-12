
import type { Prisma, PrismaClient } from "../../../generated/prisma/client";
import mapToPrismaUpdate from "../../Helpers/mapToPrismaUpdate";
import type { PlantingAreaCreate, PlantingAreaIdParam, PlantingAreaUpdate } from "../../Types/PlantingAreas";


class PlantingAreasRepository {
  private prisma: PrismaClient;
    
      constructor(prisma: PrismaClient){
        this.prisma = prisma;
      }
  
  async getAll(options? : Prisma.PlantingAreasFindManyArgs) {
    try{
      return await this.prisma.plantingAreas.findMany({
        ...options,
      });

    }catch(err){
      throw err
    }
  }
  
  async getById(id: PlantingAreaIdParam ) {
    try{
      return await this.prisma.plantingAreas.findUnique({
        where:  id 
      });

    }catch(err){
      throw err
    }
  }

  async create(data: PlantingAreaCreate) {
    try{
      return await this.prisma.plantingAreas.create({
        data,
      });
      
    }catch(err){
      throw err
    }
}

async update(id: PlantingAreaIdParam, data: PlantingAreaUpdate) {
  try{
    const prismaData = mapToPrismaUpdate<
        PlantingAreaUpdate,
        Prisma.PlantingAreasCreateInput
        >(data)
    return await this.prisma.plantingAreas.update({
      where: id ,
      data:prismaData,
    });

  }catch(err){
    throw err
  }
}

async delete(id: PlantingAreaIdParam) {
  try{
    return await this.prisma.plantingAreas.delete({
      where:  id ,
    });

  }catch(err){
    throw err
  }
}

}

export default PlantingAreasRepository;
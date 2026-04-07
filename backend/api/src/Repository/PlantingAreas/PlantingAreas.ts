
import type { Prisma, PrismaClient } from "../../../generated/prisma/client";


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
  
  async getById(id: number, options?: Prisma.PlantingAreasFindUniqueArgs) {
    try{
      return await this.prisma.plantingAreas.findUnique({
        where: { id },
        ...options,
      });

    }catch(err){
      throw err
    }
  }

  async create(data: Prisma.PlantingAreasCreateInput) {
    try{
      return await this.prisma.plantingAreas.create({
        data,
      });
      
    }catch(err){
      throw err
    }
}

async update(id: number, data: Prisma.PlantingAreasUpdateInput) {
  try{
    return await this.prisma.plantingAreas.update({
      where: { id },
      data,
    });

  }catch(err){
    throw err
  }
}

async delete(id: number) {
  try{
    return await this.prisma.plantingAreas.delete({
      where: { id },
    });

  }catch(err){
    throw err
  }
}

}

export default PlantingAreasRepository;
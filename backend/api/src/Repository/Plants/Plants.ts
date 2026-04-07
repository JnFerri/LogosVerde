
import type { Prisma } from "../../../generated/prisma/browser";
import type { CreatePlantDTO, UpdatePlantDTO } from "../../Types/Plants/PlantsDTOs";
import type { PrismaClient } from "../../../generated/prisma/client";
import mapToPrismaUpdate from "../../Helpers/mapToPrismaUpdate";





class PlantsRepository {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient){
    this.prisma = prisma;
  }

 
  
   async getAll(options? : Prisma.PlantsFindManyArgs) {
    try{
      return await this.prisma.plants.findMany({
         ...options
      });

    }catch(err){
      throw err
    }
  }

   async getById(id: number, options?: Prisma.PlantsFindUniqueArgs) {
    try{
      return await this.prisma.plants.findUnique({
        ...options,
        where: { id }
      });

    }catch(err){
      throw err
    }
  }

   async create(data: CreatePlantDTO) {
    try{
      return await this.prisma.plants.create({
        data,
      });
      
    }catch(err){
      throw err
    }
}

 async update(id: number, data: UpdatePlantDTO) {
  try{
    const prismaData = mapToPrismaUpdate<
    UpdatePlantDTO,
    Prisma.PlantsUpdateInput
    >(data)
    return await this.prisma.plants.update({
      where: { id },
      data: prismaData,
    });

  }catch(err){
    throw err
  }
}

 async delete(id: number) {
  try{
    return await this.prisma.plants.delete({
      where: { id },
    });

  }catch(err){
    throw err
  }
}

}

export default PlantsRepository;
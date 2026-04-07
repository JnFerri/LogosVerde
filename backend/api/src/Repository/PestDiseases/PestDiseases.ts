
import type { Prisma, PrismaClient } from "../../../generated/prisma/client";


class PestDiseasesRepository {
  private prisma: PrismaClient;
      
        constructor(prisma: PrismaClient){
          this.prisma = prisma;
        }
  
  async getAll(options? : Prisma.PestsDiseasesFindManyArgs) {
    try{
      return await this.prisma.pestsDiseases.findMany({
        ...options,
      });

    }catch(err){
      throw err
    }
  }
  
  async getById(id: number, options?: Prisma.PestsDiseasesFindUniqueArgs) {
    try{
      return await this.prisma.pestsDiseases.findUnique({
        where: { id },
        ...options,
      });

    }catch(err){
      throw err
    }
  }

  async create(data: Prisma.PestsDiseasesCreateInput) {
    try{
      return await this.prisma.pestsDiseases.create({
        data,
      });
      
    }catch(err){
      throw err
    }
}

async update(id: number, data: Prisma.PestsDiseasesUpdateInput) {
  try{
    return await this.prisma.pestsDiseases.update({
      where: { id },
      data,
    });

  }catch(err){
    throw err
  }
}

async delete(id: number) {
  try{
    return await this.prisma.pestsDiseases.delete({
      where: { id },
    });

  }catch(err){
    throw err
  }
}

}

export default PestDiseasesRepository;

import type { Prisma, PrismaClient } from "../../../generated/prisma/client";
import mapToPrismaUpdate from "../../Helpers/mapToPrismaUpdate";
import type { PestsDiseasesCreate, PestsDiseasesIdParam, PestsDiseasesUpdate } from "../../Types/PestDiseases";


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
  
  async getById(id: PestsDiseasesIdParam ) {
    try{
      return await this.prisma.pestsDiseases.findUnique({
        where:  id 
      });

    }catch(err){
      throw err
    }
  }

  async create(data: PestsDiseasesCreate) {
    try{
      return await this.prisma.pestsDiseases.create({
        data,
      });
      
    }catch(err){
      throw err
    }
  }

  async update(id: PestsDiseasesIdParam, data: PestsDiseasesUpdate) {
    try{
      const prismaData = mapToPrismaUpdate<
              PestsDiseasesUpdate,
              Prisma.PestsDiseasesCreateInput
              >(data)
      return await this.prisma.pestsDiseases.update({
        where: id ,
        data : prismaData,
      });

    }catch(err){
      throw err
    }
  }
 

  async delete(id: PestsDiseasesIdParam) {
    try{
      return await this.prisma.pestsDiseases.delete({
        where:  id ,
      });

    }catch(err){
    throw err
    }
  }

}

export default PestDiseasesRepository;
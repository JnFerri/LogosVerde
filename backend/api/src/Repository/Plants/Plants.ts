
import type { Prisma } from "../../../generated/prisma/client";
import { prisma } from "../../Configs/Prisma";


class PlantsRepository {
  
  static async getAll() {
    try{
      console.log('teste')
      return await prisma.plants.findMany();

    }catch(err){
      console.log(err)
    }
  }

  static async getById(id: number, options?: Prisma.PlantsFindUniqueArgs) {

    return await prisma.plants.findUnique({
      where: { id },
      ...options,
    });
  }

  static async create(data: Prisma.PlantsCreateInput) {

    return await prisma.plants.create({
      data,
    });

}

static async update(id: number, data: Prisma.PlantsUpdateInput) {

  return await prisma.plants.update({
    where: { id },
    data,
  });
}

static async delete(id: number) {

  return await prisma.plants.delete({
    where: { id },
  });
}

}

export default PlantsRepository;
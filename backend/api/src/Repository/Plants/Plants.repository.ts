
import type { Prisma } from "../../../generated/prisma/browser.js";
import { prisma } from "../../Configs/Prisma.js";


class Plants {
  
  async getAll() {

    return await prisma.plants.findMany();
  }

  async getById(id: number, options?: Prisma.PlantsFindUniqueArgs) {

    return await prisma.plants.findUnique({
      where: { id },
      ...options,
    });
  }

  async create(data: Prisma.PlantsCreateInput) {

    return await prisma.plants.create({
      data,
    });

}

async update(id: number, data: Prisma.PlantsUpdateInput) {

  return await prisma.plants.update({
    where: { id },
    data,
  });
}

async delete(id: number) {

  return await prisma.plants.delete({
    where: { id },
  });
}

}

export default Plants;
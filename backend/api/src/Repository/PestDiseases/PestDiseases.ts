
import type { Prisma, PrismaClient } from "../../../generated/prisma/client";
import { prisma } from "../../Configs/Prisma";
import mapToPrismaUpdate from "../../Helpers/mapToPrismaUpdate";
import type { PestDiseases, PestDiseasesCreate, PestDiseasesIdParam, PestDiseasesUpdate } from "../../Types/PestDiseases";

class PestDiseasesRepository {
  private db: PrismaClient

  constructor(db: PrismaClient = prisma) {
    this.db = db;
  }

  async getAll(): Promise<PestDiseases[]> {
    return  this.db.pestsDiseases.findMany();
  }

  async getById(id: PestDiseasesIdParam): Promise<PestDiseases | null> {
    return  this.db.pestsDiseases.findUnique({
      where: {id:id}
    });
  }

  async create(data: PestDiseasesCreate): Promise<PestDiseases> {
    return  this.db.pestsDiseases.create({
      data,
    });
  }

  async update(id: PestDiseasesIdParam, data: PestDiseasesUpdate): Promise<PestDiseases> {
    const prismaData = mapToPrismaUpdate<
      PestDiseasesUpdate,
      Prisma.PestsDiseasesUpdateInput
    >(data)
    return this.db.pestsDiseases.update({
      where: {id:id},
      data: prismaData,
    });
  }


  async delete(id: PestDiseasesIdParam): Promise<PestDiseases> {
    return  this.db.pestsDiseases.delete({
      where: {id:id},
    });
  }

}

export default PestDiseasesRepository;
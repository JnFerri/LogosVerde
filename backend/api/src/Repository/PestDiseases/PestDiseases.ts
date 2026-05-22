
import type { Prisma, PrismaClient } from "../../../generated/prisma/client";
import { prisma } from "../../Configs/Prisma";
import mapToPrismaUpdate from "../../Helpers/mapToPrismaUpdate";
import { PestDiseaseMapper } from "../../Mappers/PestDisease";
import type PestDisease from "../../Models/Entities/PestDisease/PestDisease.entity";
import type { PestDiseasesCreate, PestDiseasesIdParam, PestDiseasesUpdate } from "../../Models/Entities/PestDisease/PestDisease.types";

class PestDiseasesRepository {
  private db: PrismaClient

  constructor(db: PrismaClient = prisma) {
    this.db = db;
  }

  async getAll(): Promise<PestDisease[]> {
    const pestsDiseases = await this.db.pestsDiseases.findMany();

    return  PestDiseaseMapper.toEntities(pestsDiseases);
  }

  async getById(id: PestDiseasesIdParam): Promise<PestDisease | null> {
    const pestsDiseases = await this.db.pestsDiseases.findUnique({
      where: {id:id}
    })
    if (!pestsDiseases) return null;

    return PestDiseaseMapper.toEntity(pestsDiseases);
  }

  async create(data: PestDiseasesCreate): Promise<PestDisease> {
    const pestsDiseasesCreated = await this.db.pestsDiseases.create({
      data,
    })
    return PestDiseaseMapper.toEntity(pestsDiseasesCreated);
  }

  async update(id: PestDiseasesIdParam, data: PestDiseasesUpdate): Promise<PestDisease> {
    const prismaData = mapToPrismaUpdate<
      PestDiseasesUpdate,
      Prisma.PestsDiseasesUpdateInput
    >(data)
    const pestsDiseasesUpdated = await this.db.pestsDiseases.update({
      where: {id:id},
      data: prismaData,
    })
    return PestDiseaseMapper.toEntity(pestsDiseasesUpdated);
  }


  async delete(id: PestDiseasesIdParam): Promise<PestDisease> {
    const pestsDiseasesDeleted = await this.db.pestsDiseases.delete({
      where: {id:id},
    })
    return PestDiseaseMapper.toEntity(pestsDiseasesDeleted);
  }

}

export default PestDiseasesRepository;
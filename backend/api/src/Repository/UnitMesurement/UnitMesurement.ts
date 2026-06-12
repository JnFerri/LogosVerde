
import type { PrismaClient } from "../../../generated/prisma/client";
import { prisma } from "../../Configs/Prisma";
import { UnitMeasurementMapper } from "../../Mappers/UnitMeasurement";
import type UnitMeasurements from "../../Models/Entities/UnitMesurement/UnitMeasurements.entity";
import type { unitMeasurementIdParam } from "../../Models/Entities/UnitMesurement/UnitMesurements.type";

class UnitMesurementRepository {
  private db: PrismaClient

  constructor(db: PrismaClient = prisma) {
    this.db = db;
  }

  async getAll(): Promise<UnitMeasurements[]> {
    const unitMeasurements = await this.db.unitMeasurements.findMany();

    return  UnitMeasurementMapper.toEntities(unitMeasurements);
  }

  async getById(id: unitMeasurementIdParam) : Promise<UnitMeasurements | null> {
    const unitMeasurement = await this.db.unitMeasurements.findUnique({
      where: {id:id}
    })
    if (!unitMeasurement) return null;

    return UnitMeasurementMapper.toEntity(unitMeasurement);
  }

  
}

export default UnitMesurementRepository;
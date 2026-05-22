import type { Prisma } from "../../generated/prisma/client";
import UnitMeasurements from "../Models/Entities/UnitMesurement/UnitMeasurements.entity";

export class UnitMeasurementMapper {
  static toEntity(data: Prisma.UnitMeasurementsGetPayload<true>): UnitMeasurements {
    return new UnitMeasurements(
      data.id,
      data.description,
      data.abbreviation
    );
  }
}

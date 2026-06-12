import type UnitMesurementRepository from "../../Repository/UnitMesurement/UnitMesurement";
import type UnitMeasurements from "../../Models/Entities/UnitMesurement/UnitMeasurements.entity";
import type { unitMeasurementIdParam } from "../../Models/Entities/UnitMesurement/UnitMesurements.type";

class UnitMeasurementService {
  private repository: UnitMesurementRepository;

  constructor(repository: UnitMesurementRepository) {
    this.repository = repository;
  }

  async getAll(): Promise<UnitMeasurements[]> {
    return await this.repository.getAll();
  }

  async getById(id: unitMeasurementIdParam): Promise<UnitMeasurements | null> {
    return await this.repository.getById(id);
  }
}

export default UnitMeasurementService;

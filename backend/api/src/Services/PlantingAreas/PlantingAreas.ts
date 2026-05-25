import { ApiError } from "../../Models/DTO/ApiResponse/ApiError";
import type PlantingAreasRepository from "../../Repository/PlantingAreas/PlantingAreas";
import type PlantingArea from "../../Models/Entities/PlantingArea/PlantingArea.entity";
import type { PlantingAreaCreate, PlantingAreaIdParam, PlantingAreaUpdate } from "../../Models/Entities/PlantingArea/PlantingArea.types";

export class PlantingAreasService {
  constructor(private repository: PlantingAreasRepository) {
    this.repository = repository
  }

  async findAll(): Promise<PlantingArea[]> {
    const response = await this.repository.getAll()
    return response
  }

  async findById(id: PlantingAreaIdParam): Promise<PlantingArea> {
    const response = await this.repository.getById(id)
    if (!response) {
      throw ApiError.NotFound("Planting area not found")
    }
    return response
  }

  async create(data: PlantingAreaCreate): Promise<PlantingArea> {
    const response = await this.repository.create(data)
    return response
  }

  async update(id: PlantingAreaIdParam, data: PlantingAreaUpdate): Promise<PlantingArea> {
    const response = await this.repository.update(id, data)
    return response
  }

  async delete(id: PlantingAreaIdParam): Promise<void> {
    await this.repository.delete(id)
  }
}

export default PlantingAreasService

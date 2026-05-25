import { ApiError } from "../../Models/DTO/ApiResponse/ApiError";
import { PlantingAreaSchema } from "../../Schemas/PlantingAreas";
import type PlantingAreasRepository from "../../Repository/PlantingAreas/PlantingAreas";
import type PlantingArea from "../../Models/Entities/PlantingArea/PlantingArea.entity";
import type { PlantingAreaCreate, PlantingAreaIdParam, PlantingAreaUpdate } from "../../Models/Entities/PlantingArea/PlantingArea.types";

export class PlantingAreasService {
  constructor(private repository: PlantingAreasRepository) {
    this.repository = repository;
  }

  async findAll(): Promise<PlantingArea[]> {
    const response = await this.repository.getAll();
    const responseValidated = PlantingAreaSchema.array().parse(response);
    return responseValidated;
  }

  async findById(id: PlantingAreaIdParam): Promise<PlantingArea> {
    const response = await this.repository.getById(id);
    if (!response) {
      throw ApiError.NotFound("Planting area not found");
    }
    const responseValidated = PlantingAreaSchema.parse(response);
    return responseValidated;
  }

  async create(data: PlantingAreaCreate): Promise<PlantingArea> {
    const response = await this.repository.create(data);
    const responseValidated = PlantingAreaSchema.parse(response);
    return responseValidated;
  }

  async update(id: PlantingAreaIdParam, data: PlantingAreaUpdate): Promise<PlantingArea> {
    const response = await this.repository.update(id, data);
    const responseValidated = PlantingAreaSchema.parse(response);
    return responseValidated;
  }

  async delete(id: PlantingAreaIdParam): Promise<void> {
    await this.repository.delete(id);
  }
}

export default PlantingAreasService;

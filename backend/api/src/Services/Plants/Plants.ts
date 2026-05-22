import { ApiError } from "../../Models/DTO/ApiResponse/ApiError";
import type PlantsRepository from "../../Repository/Plants/Plant";
import type Plant from "../../Models/Entities/Plants/Plant.entity";
import type { PlantCreate, PlantIdParam, PlantUpdate } from "../../Models/Entities/Plants/Plant.types";


export class PlantsService {
  constructor(private readonly repository: PlantsRepository) {}

  async findAll(): Promise<Plant[]> {
    const response = await this.repository.getAllWithRelations();
    return response;
  }

  async findById(id: PlantIdParam): Promise<Plant> {
    const response = await this.repository.getByIdWithRelations(id);
    if (!response) {
      throw ApiError.NotFound("Plant not found");
    }
    return response;
  }

  async create(data: PlantCreate): Promise<Plant> {
    const existingPlant = await this.repository.getByName(data.name);
    if (existingPlant) {
      throw ApiError.BadRequest("Plant already exists");
    }
    const response = await this.repository.create(data);
    return response;
  }

  async update(id: PlantIdParam, data: PlantUpdate): Promise<Plant> {
    const response = await this.repository.update(id, data);
    return response;
  }

  async delete(id: PlantIdParam): Promise<void> {
    await this.repository.delete(id);
  }
}

export default PlantsService;

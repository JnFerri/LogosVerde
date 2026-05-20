import { ApiError } from "../../Models/ApiResponse/ApiError";
import { PlantSchema } from "../../Models/DTO/Plants";
import type PlantsRepository from "../../Repository/Plants/Plant";
import type { Plant, PlantCreate, PlantIdParam, PlantUpdate } from "../../Types/Plant";

export class PlantsService {
  constructor(private repository: PlantsRepository) {
    this.repository = repository;
  }

  async findAll(): Promise<Plant[]> {
    const response = await this.repository.getAll();
    const responseValidated = PlantSchema.array().parse(response);
  
    return responseValidated;
  }

  async findById(id: PlantIdParam): Promise<Plant> {
    const response = await this.repository.getById(id);
    if (!response) {
      throw ApiError.NotFound("Plant not found");
    }
    const responseValidated = PlantSchema.parse(response);
    return responseValidated;
  }

  async create(data: PlantCreate): Promise<Plant> {
    const existingPlant = await this.repository.getByName(data.name);
    if (existingPlant) {
      throw ApiError.BadRequest("Plant already exists");
    }
    const response = await this.repository.create(data);
    const responseValidated = PlantSchema.parse(response);
    return responseValidated;
  }

  async update(id: PlantIdParam, data: PlantUpdate): Promise<Plant> {

    const response = await this.repository.update(id, data);
    const responseValidated = PlantSchema.parse(response);
    return responseValidated;
  }

  async delete(id: PlantIdParam): Promise<void> {
    await this.repository.delete(id);
  }
}

export default PlantsService;

import { ApiError } from "../../Models/DTO/ApiResponse/ApiError";
import type PlantType from "../../Models/Entities/PlantTypes/PlantTypes.entity";
import type { PlantTypeIdParam } from "../../Models/Entities/PlantTypes/PlantTypes.types";
import type PlantTypesRepository from "../../Repository/PlantTypes/PlnatTypes";


export class PlantTypesService {
  constructor(private readonly repository: PlantTypesRepository) {}

  async findAll(): Promise<PlantType[]> {
    const response = await this.repository.getAll()
    return response
  }

  async findById(id: PlantTypeIdParam): Promise<PlantType> {
    const response = await this.repository.getById(id)
    if (!response) {
      throw ApiError.NotFound("PlantType not found")
    }
    return response
  }
}

export default PlantTypesService;

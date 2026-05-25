
import { ApiError } from "../../Models/DTO/ApiResponse/ApiError";
import { PestDiseasesSchema } from "../../Schemas/PestDisease";
import PestDiseasesRepository from "../../Repository/PestDiseases/PestDiseases"
import type PestDisease from "../../Models/Entities/PestDisease/PestDisease.entity";
import type { PestDiseasesCreate, PestDiseasesIdParam, PestDiseasesUpdate } from "../../Models/Entities/PestDisease/PestDisease.types";

export class PestDiseaseService{
    constructor(
     private repository: PestDiseasesRepository
    ){
        this.repository = repository
    }

    async findAll() : Promise<PestDisease[]>{
            const response = await this.repository.getAll()
            return PestDiseasesSchema.array().parse(response)
    }

    async findById(id: PestDiseasesIdParam) : Promise<PestDisease>{
            const response = await this.repository.getById(id)
            if(!response){
                throw ApiError.NotFound("Pest disease not found")
            }
            return PestDiseasesSchema.parse(response)
    }

    async create(data: PestDiseasesCreate) : Promise<PestDisease>{
            const response = await this.repository.create(data)
            return PestDiseasesSchema.parse(response)
    }

    async update(id: PestDiseasesIdParam, data: PestDiseasesUpdate) : Promise<PestDisease>{
            const response =  await this.repository.update(id, data)
            return PestDiseasesSchema.parse(response)
    }

    async delete(id: PestDiseasesIdParam) : Promise<void>{
            await this.repository.delete(id)
    }
}
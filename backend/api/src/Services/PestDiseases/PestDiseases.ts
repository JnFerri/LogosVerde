
import { ApiError } from "../../Models/ApiResponse/ApiError";
import { PestDiseasesSchema } from "../../Models/DTO/PestDisease";
import PestDiseasesRepository from "../../Repository/PestDiseases/PestDiseases"
import type { PestDiseases, PestDiseasesCreate, PestDiseasesIdParam, PestDiseasesUpdate } from "../../Types/PestDiseases";

export class PestDiseaseService{
    constructor(
     private repository: PestDiseasesRepository
    ){
        this.repository = repository
    }

    async findAll(){
            const response : PestDiseases[] = await this.repository.getAll()
            return PestDiseasesSchema.array().parse(response)
    }

    async findById(id: PestDiseasesIdParam){
            const response = await this.repository.getById(id)
            if(!response){
                throw ApiError.NotFound("Pest disease not found")
            }
            return PestDiseasesSchema.parse(response)
    }

    async create(data: PestDiseasesCreate){
            const response = await this.repository.create(data)
            return PestDiseasesSchema.parse(response)
    }

    async update(id: PestDiseasesIdParam, data: PestDiseasesUpdate){
            const response =  await this.repository.update(id, data)
            return PestDiseasesSchema.parse(response)
    }

    async delete(id: PestDiseasesIdParam){
            await this.repository.delete(id)
    }
}

import { ApiError } from "../../Models/ApiResponse/ApiError";
import { PestDiseasesSchema } from "../../Models/DTO/PestDisease";
import PestDiseasesRepository from "../../Repository/PestDiseases/PestDiseases"
import type { PestDiseases, PestDiseasesCreate, PestDiseasesUpdate } from "../../Types/PestDiseases";

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

    async findById(id: number){
            if(!id){
                throw ApiError.BadRequest("Id is required")
            }
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

    async update(id: number, data: PestDiseasesUpdate){
            if(!id){
                throw ApiError.BadRequest("Id is required")
            }
            const exists = await this.repository.getById(id)
            if (!exists) {
                throw ApiError.NotFound("Pest disease not found")
            }
            const response =  await this.repository.update(id, data)
            return PestDiseasesSchema.parse(response)
    }

    async delete(id: number){
            const exists = await this.repository.getById( id )
            if (!exists) {
                throw ApiError.NotFound("Pest disease not found")
            }
            await this.repository.delete(id)
    }
}
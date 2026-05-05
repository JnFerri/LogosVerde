
import { ApiError } from "../../Models/ApiResponse/ApiError";
import PestDiseasesRepository from "../../Repository/PestDiseases/PestDiseases"
import type { PestDiseases, PestDiseasesCreate, PestDiseasesUpdate } from "../../Types/PestDiseases";

export class PestDiseaseService{
    constructor(
     private repository: PestDiseasesRepository
    ){
        this.repository = repository
    }

    async findAll(){
        try{
            const response : PestDiseases[] = await this.repository.getAll()
            return response
        }catch(err){
            throw err
        }
    }

    async findById(id: number){
        try{
            const response = await this.repository.getById({id})
            if(!response){
                throw ApiError.NotFound("Pest disease not found")
            }
            return response
        }catch(err){
           throw err
        }
    }

    async create(data: PestDiseasesCreate){
        try{
            const response = await this.repository.create(data)
            return response
        }catch(err){
            throw err
        }
    }

    async update(id: number, data: PestDiseasesUpdate){
        try{
            const exists = await this.repository.getById({ id })

            if (!exists) {
                throw ApiError.NotFound("Pest disease not found")
            }
            await this.repository.update({id}, data)
            const responseUpdated = await this.repository.getById({id})
            return responseUpdated
        }catch(err){
            throw err
        }
    }

    async delete(id: number){
        try{
            const exists = await this.repository.getById({ id })

            if (!exists) {
                throw ApiError.NotFound("Pest disease not found")
            }
            await this.repository.delete({id})
        }catch(err){
            throw err
        }
    }
}
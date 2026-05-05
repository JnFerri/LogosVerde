import { ApiSuccess } from "../Models/ApiResponse/ApiSuccess";
import { PestDiseasesCreateSchema, PestDiseasesSchema, PestDiseasesUpdateSchema } from "../Models/DTO/PestDisease";
import type { PestDiseaseService } from "../Services/PestDiseases/PestDiseases";
import type { Request, Response, NextFunction } from "express";

export class PestDiseaseController {
    
    constructor(private service: PestDiseaseService) {
    }

    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await this.service.findAll()
            if(result.length === 0){
                return ApiSuccess.success("No pest diseases found", [])
            }
            const resultValidated = result.map((item) => PestDiseasesSchema.parse(item))
            const response = await ApiSuccess.success("Pest diseases found", resultValidated)
            res.status(response.statusCode).json(response)
        } catch (err) {
            next(err)
        }
    }

    async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id)
            const result = await this.service.findById(id)
            const resultValidated = PestDiseasesSchema.parse(result)
            const response = await ApiSuccess.success("Pest disease found", resultValidated)
            res.status(response.statusCode).json(response)
        } catch (err) {
            next(err)
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const data = req.body
            const dataValidated = PestDiseasesCreateSchema.parse(data)
            const result = await this.service.create(dataValidated)
            const response = await ApiSuccess.created("Pest disease created", result)
            res.status(response.statusCode).json(response)
        } catch (err) {
            next(err)
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id)
            const data = req.body
            const dataValidated = PestDiseasesUpdateSchema.parse(data)
            const result = await this.service.update(id, dataValidated)
            const resultValidated = PestDiseasesSchema.parse(result)
            const response = await ApiSuccess.updated("Pest disease updated", resultValidated)
            res.status(response.statusCode).json(response)
        } catch (err) {
            next(err)
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id)
            await this.service.delete(id)
            const response = await ApiSuccess.noContent("Pest disease deleted successfully")
            res.status(response.statusCode).json(response)
        } catch (err) {
            next(err)
        }
    }
}
        
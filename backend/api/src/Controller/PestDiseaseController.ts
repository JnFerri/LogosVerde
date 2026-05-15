import { ApiSuccess } from "../Models/ApiResponse/ApiSuccess";
import { PestDiseasesCreateSchema, PestDiseasesIdParamSchema, PestDiseasesUpdateSchema } from "../Models/DTO/PestDisease";
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
            const response = await ApiSuccess.success("Pest diseases found", result)
            res.status(response.statusCode).json(response)
        } catch (err) {
            next(err)
        }
    }

    async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id
            const idValidated = PestDiseasesIdParamSchema.parse(id)
            const result = await this.service.findById(idValidated)
            const response = await ApiSuccess.success("Pest disease found", result)
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
            const id = req.params.id
            const idValidated = PestDiseasesIdParamSchema.parse(id)
            const data = req.body
            const dataValidated = PestDiseasesUpdateSchema.parse(data)
            const result = await this.service.update(idValidated, dataValidated)
            const response = await ApiSuccess.updated("Pest disease updated", result)
            res.status(response.statusCode).json(response)
        } catch (err) {
            next(err)
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id
            const idValidated = PestDiseasesIdParamSchema.parse(id)
            await this.service.delete(idValidated)
            const response = await ApiSuccess.noContent("Pest disease deleted successfully")
            res.status(response.statusCode).json(response)
        } catch (err) {
            next(err)
        }
    }
}
        
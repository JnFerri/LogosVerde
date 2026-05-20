import { ApiSuccess } from "../Models/ApiResponse/ApiSuccess";
import { PestDiseasesCreateSchema, PestDiseasesIdParamSchema, PestDiseasesUpdateSchema } from "../Models/DTO/PestDisease";
import type { PestDiseaseService } from "../Services/PestDiseases/PestDiseases";
import type { Request, Response, NextFunction } from "express";

export class PestDiseaseController {
    
    constructor(private service: PestDiseaseService) {
    }

   getAll = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.service.findAll()
            if(result.length === 0){
                const responseEmpty = await ApiSuccess.success("No pest diseases found", [])
                return res.status(responseEmpty.statusCode).json(responseEmpty)
            }
            const response = await ApiSuccess.success("Pest diseases found", result)
            return res.status(response.statusCode).json(response)
            
        } catch (err) {
            next(err)
        }
    }

    getById = async(req: Request, res: Response, next: NextFunction) => {
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

    create = async(req: Request, res: Response, next: NextFunction) => {
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

    update = async(req: Request, res: Response, next: NextFunction) => {
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

    delete = async(req: Request, res: Response, next: NextFunction) => {
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
        
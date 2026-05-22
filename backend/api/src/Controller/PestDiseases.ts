import { ApiError } from "../Models/DTO/ApiResponse/ApiError";
import { ApiSuccess } from "../Models/DTO/ApiResponse/ApiSuccess";
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
            if(!req.validatedId){
                throw ApiError.BadRequest("id not validated")
            }
            const id = req.validatedId
            const result = await this.service.findById(id)
            const response = await ApiSuccess.success("Pest disease found", result)
            res.status(response.statusCode).json(response)
        } catch (err) {
            next(err)
        }
    }

    create = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body
            const result = await this.service.create(data)
            const response = await ApiSuccess.created("Pest disease created", result)
            res.status(response.statusCode).json(response)
        } catch (err) {
            next(err)
        }
    }

    update = async(req: Request, res: Response, next: NextFunction) => {
        try {
            if(!req.validatedId){
                throw ApiError.BadRequest("id not validated")
            }
            const id  = req.validatedId
            const data = req.body
            const result = await this.service.update(id, data)
            const response = await ApiSuccess.updated("Pest disease updated", result)
            res.status(response.statusCode).json(response)
        } catch (err) {
            next(err)
        }
    }

    delete = async(req: Request, res: Response, next: NextFunction) => {
        try {
            if(!req.validatedId){
                throw ApiError.BadRequest("id not validated")
            }
            const id = req.validatedId
            await this.service.delete(id)
            const response = await ApiSuccess.noContent("Pest disease deleted successfully")
            res.status(response.statusCode).json(response)
        } catch (err) {
            next(err)
        }
    }
}
        
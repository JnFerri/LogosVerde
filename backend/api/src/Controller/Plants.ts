import { ApiSuccess } from "../Models/ApiResponse/ApiSuccess";
import { CreatePlantSchema, PlantIdParamSchema, UpdatePlantSchema } from "../Models/DTO/Plants";
import type PlantsService from "../Services/Plants/Plants";
import type { Request, Response, NextFunction } from "express";

export class PlantsController {
    
    constructor(private service: PlantsService) {
    }

   getAll = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.service.findAll()
            if(result.length === 0){
                const responseEmpty = await ApiSuccess.success("No plants found", [])
                return res.status(responseEmpty.statusCode).json(responseEmpty)
            }
            const response = await ApiSuccess.success("Plants found", result)
            return res.status(response.statusCode).json(response)
            
        } catch (err) {
            next(err)
        }
    }

    getById = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id
            const idValidated = PlantIdParamSchema.parse(id)
            const result = await this.service.findById(idValidated)
            const response = await ApiSuccess.success("Plant found", result)
            res.status(response.statusCode).json(response)
        } catch (err) {
            next(err)
        }
    }

    create = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body
            const dataValidated = CreatePlantSchema.parse(data)
            const result = await this.service.create(dataValidated)
            const response = await ApiSuccess.created("Plant created", result)
            res.status(response.statusCode).json(response)
        } catch (err) {
            next(err)
        }
    }

    update = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id
            const idValidated = PlantIdParamSchema.parse(id)
            const data = req.body
            const dataValidated = UpdatePlantSchema.parse(data)
            const result = await this.service.update(idValidated, dataValidated)
            const response = await ApiSuccess.updated("Plant updated", result)
            res.status(response.statusCode).json(response)
        } catch (err) {
            next(err)
        }
    }

    delete = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id
            const idValidated = PlantIdParamSchema.parse(id)
            await this.service.delete(idValidated)
            const response = await ApiSuccess.noContent("Plant deleted successfully")
            res.status(response.statusCode).json(response)
        } catch (err) {
            next(err)
        }
    }
}
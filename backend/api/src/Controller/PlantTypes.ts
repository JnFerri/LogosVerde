import { ApiError } from "../Models/DTO/ApiResponse/ApiError";
import { ApiSuccess } from "../Models/DTO/ApiResponse/ApiSuccess";
import type { Request, Response, NextFunction } from "express";
import type PlantTypesService from "../Services/PlantTypes/PlantTypes";

export class PlantTypesController {
    
    constructor(private service: PlantTypesService) {
    }

   getAll = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.service.findAll()
            if(result.length === 0){
                const responseEmpty = await ApiSuccess.success("No plantTypes found", [])
                return res.status(responseEmpty.statusCode).json(responseEmpty)
            }
            const response = await ApiSuccess.success("PlantTypes found", result)
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
            const response = await ApiSuccess.success("PlantType found", result)
            res.status(response.statusCode).json(response)
        } catch (err) {
            next(err)
        }
    }

  
}
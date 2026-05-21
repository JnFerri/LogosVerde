import { ApiError } from "../Models/ApiResponse/ApiError";
import { ApiSuccess } from "../Models/ApiResponse/ApiSuccess";
import type ProjectsService from "../Services/Projects/Projects";
import type { Request, Response, NextFunction } from "express";

export class ProjectsController {
    
    constructor(private service: ProjectsService) {
    }

   getAll = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.service.findAll()
            if(result.length === 0){
                const responseEmpty = await ApiSuccess.success("No projects found", [])
                return res.status(responseEmpty.statusCode).json(responseEmpty)
            }
            const response = await ApiSuccess.success("Projects found", result)
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
            const response = await ApiSuccess.success("Project found", result)
            res.status(response.statusCode).json(response)
        } catch (err) {
            next(err)
        }
    }

    create = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body
            const result = await this.service.create(data)
            const response = await ApiSuccess.created("Project created", result)
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
            const id = req.validatedId
            const data = req.body
            const result = await this.service.update(id, data)
            const response = await ApiSuccess.updated("Project updated", result)
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
            const response = await ApiSuccess.noContent("Project deleted successfully")
            res.status(response.statusCode).json(response)
        } catch (err) {
            next(err)
        }
    }
}
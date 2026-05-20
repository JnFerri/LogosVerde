import { ApiSuccess } from "../Models/ApiResponse/ApiSuccess";
import { ProjectCreateSchema, ProjectIdParamSchema, ProjectUpdateSchema } from "../Models/DTO/Projects";
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
            const id = req.params.id
            const idValidated = ProjectIdParamSchema.parse(id)
            const result = await this.service.findById(idValidated)
            const response = await ApiSuccess.success("Project found", result)
            res.status(response.statusCode).json(response)
        } catch (err) {
            next(err)
        }
    }

    create = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body
            const dataValidated = ProjectCreateSchema.parse(data)
            const result = await this.service.create(dataValidated)
            const response = await ApiSuccess.created("Project created", result)
            res.status(response.statusCode).json(response)
        } catch (err) {
            next(err)
        }
    }

    update = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id
            const idValidated = ProjectIdParamSchema.parse(id)
            const data = req.body
            const dataValidated = ProjectUpdateSchema.parse(data)
            const result = await this.service.update(idValidated, dataValidated)
            const response = await ApiSuccess.updated("Project updated", result)
            res.status(response.statusCode).json(response)
        } catch (err) {
            next(err)
        }
    }

    delete = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id
            const idValidated = ProjectIdParamSchema.parse(id)
            await this.service.delete(idValidated)
            const response = await ApiSuccess.noContent("Project deleted successfully")
            res.status(response.statusCode).json(response)
        } catch (err) {
            next(err)
        }
    }
}
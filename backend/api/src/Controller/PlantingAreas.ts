import { ApiSuccess } from "../Models/ApiResponse/ApiSuccess";
import { PlantingAreaCreateSchema, PlantingAreaIdParamSchema, PlantingAreaUpdateSchema } from "../Models/DTO/PlantingAreas";
import type PlantingAreasService from "../Services/PlantingAreas/PlantingAreas";
import type { Request, Response, NextFunction } from "express";

export class PlantingAreaController {
    constructor(private service: PlantingAreasService) {}

    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.service.findAll();
            if (result.length === 0) {
                const responseEmpty = await ApiSuccess.success("No planting areas found", []);
                return res.status(responseEmpty.statusCode).json(responseEmpty);
            }
            const response = await ApiSuccess.success("Planting areas found", result);
            return res.status(response.statusCode).json(response);
        } catch (err) {
            next(err);
        }
    };

    getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            const idValidated = PlantingAreaIdParamSchema.parse(id);
            const result = await this.service.findById(idValidated);
            const response = await ApiSuccess.success("Planting area found", result);
            res.status(response.statusCode).json(response);
        } catch (err) {
            next(err);
        }
    };

    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body;
            const dataValidated = PlantingAreaCreateSchema.parse(data);
            const result = await this.service.create(dataValidated);
            const response = await ApiSuccess.created("Planting area created", result);
            res.status(response.statusCode).json(response);
        } catch (err) {
            next(err);
        }
    };

    update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            const idValidated = PlantingAreaIdParamSchema.parse(id);
            const data = req.body;
            const dataValidated = PlantingAreaUpdateSchema.parse(data);
            const result = await this.service.update(idValidated, dataValidated);
            const response = await ApiSuccess.updated("Planting area updated", result);
            res.status(response.statusCode).json(response);
        } catch (err) {
            next(err);
        }
    };

    delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            const idValidated = PlantingAreaIdParamSchema.parse(id);
            await this.service.delete(idValidated);
            const response = await ApiSuccess.noContent("Planting area deleted successfully");
            res.status(response.statusCode).json(response);
        } catch (err) {
            next(err);
        }
    };
}
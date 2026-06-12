import { ApiError } from "../Models/DTO/ApiResponse/ApiError";
import { ApiSuccess } from "../Models/DTO/ApiResponse/ApiSuccess";
import type UnitMeasurementService from "../Services/UnitMeasurement/UnitMeasurement";
import type { Request, Response, NextFunction } from "express";

export class UnitMeasurementController {
  constructor(private service: UnitMeasurementService) {}

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.getAll();
      if (result.length === 0) {
        const responseEmpty = await ApiSuccess.success("No unit measurements found", []);
        return res.status(responseEmpty.statusCode).json(responseEmpty);
      }
      const response = await ApiSuccess.success("Unit measurements found", result);
      return res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.validatedId) {
        throw ApiError.BadRequest("id not validated");
      }
      const id = req.validatedId;
      const result = await this.service.getById(id);
      
      if (!result) {
        throw ApiError.NotFound("Unit measurement not found");
      }

      const response = await ApiSuccess.success("Unit measurement found", result);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  };
}

export default UnitMeasurementController;

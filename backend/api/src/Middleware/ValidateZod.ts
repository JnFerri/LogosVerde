import type { Request, Response, NextFunction } from "express";
import { z, type ZodType } from "zod";
import { ApiError } from "../Models/DTO/ApiResponse/ApiError";

export function validateBody(schema: ZodType) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      throw ApiError.BadRequest(`Invalid request body ${z.treeifyError(result.error)}`); 
    }

    req.body = result.data;

    next();
  };
}

export function validateParamId(schema: ZodType) {
  return (req: Request, res: Response, next: NextFunction) => {
    if(!req.params.id){
      throw ApiError.BadRequest("Invalid id")
    }
    const result = schema.safeParse(req.params.id);

    if (!result.success) {
      throw ApiError.BadRequest(`Invalid request body ${z.treeifyError(result.error)}`)
    }

    req.validatedId= result.data as number;

    next();
  };
}

import type {  Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { ApiError } from "../Models/ApiResponse/ApiError";



export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
  const authHeader = req.headers.authorization as string;
  if (!authHeader) {
    return ApiError.Unauthorized("Invalid token");;
  }

  const [, token] = authHeader.split(" ");

    const decoded = jwt.verify(
      token as string,
      process.env.JWT_SECRET!
    );
    
    req.user = decoded;

    next();
  } catch {
    return ApiError.Unauthorized("Invalid token");
  }
}
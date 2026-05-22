import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client"
import { ApiError } from "../Models/DTO/ApiResponse/ApiError"

export function isPrismaError(err: unknown): err is PrismaClientKnownRequestError {
    return err instanceof PrismaClientKnownRequestError
}

export function handlePrismaError(err: PrismaClientKnownRequestError): ApiError {
    switch (err.code) {
        case "P2002":
            return ApiError.Conflict("Duplicate field value")

        case "P2025":
            return ApiError.NotFound("Record not found")

        default:
            return ApiError.InternalServerError("Database error")
    }
}
import { ZodError } from "zod"
import { ApiError } from "../Models/DTO/ApiResponse/ApiError"
import { isPrismaError } from "./handlePrismaError"

export function handleError(err:unknown):ApiError {
    if (err instanceof ZodError) {
        return ApiError.ValidationError(
        "Validation error",
        err.issues
    )}
    if (isPrismaError(err)) {
        console.error("Prisma error:", err.code, err.message)
        return ApiError.InternalServerError("Database error")
    }
    if(err instanceof ApiError){
        return err
    }
    if (err instanceof Error) {
        console.error("Error:", err.message, err.stack)
        return ApiError.InternalServerError("Internal server Error")
    }

    console.error("Unknown error:", err)
    return ApiError.InternalServerError("Internal server Error")
            
}
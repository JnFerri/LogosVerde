import type { $ZodIssue } from "zod/v4/core";

type ErrorDetails =
    | $ZodIssue[]
    | Record<string, unknown>
    | string
    | null

export class ApiError extends Error {
    public statusCode: number;
    public details?: ErrorDetails;

    constructor(message: string, statusCode: number, details: ErrorDetails  = null) {
        super(message);
        this.name = "ApiError";
        this.statusCode = statusCode;
        this.details = details;
    }

    static BadRequest(message: string) {
        return new ApiError(message, 400);
    }

    static ValidationError(message: string, details: ErrorDetails) {
        return new ApiError(message, 422, details);
    }

    static NotFound(message: string) {
        return new ApiError(message, 404); 
    }

    static InternalServerError(message: string) {
        return new ApiError(message, 500); 
    }

    static Unauthorized(message: string) {
        return new ApiError(message, 401);
    }

    static Forbidden(message: string) {
        return new ApiError(message, 403);
    }

    static Conflict(message: string) {
        return new ApiError(message, 409);
    }

    static UnprocessableEntity(message: string) {
        return new ApiError(message, 422);  
    }

    static TooManyRequests(message: string) {
        return new ApiError(message, 429);
    }

    static ServiceUnavailable(message: string) {
        return new ApiError(message, 503);
    }


}
import { handleError } from "../Helpers/handleError"
import type { Request, Response, NextFunction } from "express";
export function ErrorMiddleware(
    err: unknown,
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _next: NextFunction
) {
    const error = handleError(err)

    res.status(error.statusCode).json({
        message: error.message,
        ...(error.details && { details: error.details })
    })
}
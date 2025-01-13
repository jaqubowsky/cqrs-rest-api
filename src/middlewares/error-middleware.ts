import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/errors";
import { StatusCodes } from "../errors/http-error-codes";

export function errorHandler(
    error: Error,
    req: Request,
    res: Response,
    // eslint-disable-next-line
    next: NextFunction,
) {
    console.error(error.stack);

    if (error instanceof CustomError) {
        res.status(error.status).json({
            status: error.status,
            message: error.expose ? error.message : "Internal Server Error",
            details: error.details,
        });
        return;
    }

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        status: StatusCodes.INTERNAL_SERVER_ERROR,
        message: "Internal Server Error",
    });
}

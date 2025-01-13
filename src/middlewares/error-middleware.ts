import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/errors";

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
        });
        return;
    }

    res.status(500).json({ error: "Internal Server Error" });
}

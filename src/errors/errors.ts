/* eslint-disable @typescript-eslint/no-explicit-any */

import { StatusCodes } from "./http-error-codes";

export class CustomError extends Error {
    status: number;
    expose: boolean;
    details: any | null;

    constructor(res: { status: number; message: string }, details: any = null) {
        super(res.message);
        this.status = res.status || StatusCodes.INTERNAL_SERVER_ERROR;
        this.expose = false;
        this.details = details;
    }
}

export class ExposedError extends CustomError {
    constructor(res: { status: number; message: string }, details: any | null = null) {
        super(res, details);
        this.expose = true;
    }
}

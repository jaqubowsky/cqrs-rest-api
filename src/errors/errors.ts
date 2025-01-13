import { StatusCodes } from "./http-error-codes";

export class CustomError extends Error {
    status: number;
    expose: boolean;

    constructor(status = StatusCodes.INTERNAL_SERVER_ERROR, message = "Internal Server Error", expose = false) {
        super(message);
        this.status = status;
        this.expose = expose;
    }
}

export class ExposedError extends CustomError {
    constructor(status: number, message: string) {
        super(status, message, true);
    }
}

export class InternalError extends CustomError {
    constructor(status: number, message: string) {
        super(status, message, false);
    }
}

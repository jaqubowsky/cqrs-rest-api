import { StatusCodes } from "../errors/http-error-codes";

export const ResErr = {
    INVALID_BODY: { message: "Invalid request body", status: StatusCodes.BAD_REQUEST },
    NOT_FOUND: { message: "Resource not found", status: StatusCodes.NOT_FOUND },
    INSUFFICIENT_STOCK: { message: "Not enough stock", status: StatusCodes.BAD_REQUEST },
};

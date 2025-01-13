import { StatusCodes } from "../errors/http-error-codes";

export const ResErr = {
    INVALID_BODY: { message: "Invalid request body", status: StatusCodes.BAD_REQUEST },
    NOT_FOUND: { message: "Resource not found", status: StatusCodes.NOT_FOUND },
    PRICE_CANNOT_BE_ZERO: { message: "Price cannot be zero", status: StatusCodes.BAD_REQUEST },
    INSUFFICIENT_STOCK: { message: "Not enough stock", status: StatusCodes.BAD_REQUEST },
};

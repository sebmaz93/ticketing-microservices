import { CustomError } from "./custom-error";

export class DbConnectionError extends CustomError {
  reason = "Error connecting to DB";
  statusCode = 500;

  constructor() {
    super("DB connection error");

    Object.setPrototypeOf(this, DbConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}

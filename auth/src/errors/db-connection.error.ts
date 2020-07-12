export class DbConnectionError extends Error {
  reason = "Error connecting to DB";
  statusCode = 500;

  constructor() {
    super();

    Object.setPrototypeOf(this, DbConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}

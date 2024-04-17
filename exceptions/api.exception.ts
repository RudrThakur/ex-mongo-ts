export default class ApiException extends Error {
  name;
  code;
  message;

  constructor(code: any, message: any) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
    this.message = message;
  }
}

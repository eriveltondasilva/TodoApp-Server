import type { IResponse } from '@/types/response'
import type { Response } from 'express'

import { ResponseStatusEnum } from '@/enums/status'

/**
 * @class Response Service Class
 * @description A service class for handling HTTP responses with standardized status codes.
 **/
class ResponseService implements IResponse {
  constructor(private status: typeof ResponseStatusEnum) {}

  //# RESPONSE SERVICE METHODS
  // --------------------------
  sendResponse(res: Response, code: number, body?: any) {
    return res.status(code).json(body)
  }

  // --------------------------
  ok(res: Response, body: any) {
    return this.sendResponse(res, this.status.OK, body)
  }

  created(res: Response, body: any) {
    return this.sendResponse(res, this.status.CREATED, body)
  }

  noContent(res: Response) {
    return this.sendResponse(res, this.status.NO_CONTENT)
  }

  badRequest(res: Response, body: any) {
    return this.sendResponse(res, this.status.BAD_REQUEST, body)
  }

  notFound(res: Response, body: any) {
    return this.sendResponse(res, this.status.NOT_FOUND, body)
  }

  serverError(res: Response, body: any) {
    return this.sendResponse(res, this.status.SERVER_ERROR, body)
  }
}

// --------------------------
export default ResponseService

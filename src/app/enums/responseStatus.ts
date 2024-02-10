//# ENUMS FOR HTTP RESPONSES
// prettier-ignore
enum ResponseStatus {
  OK                   = 200,
  CREATED              = 201,
  NO_CONTENT           = 204,
  BAD_REQUEST          = 400,
  UNAUTHORIZED         = 401,
  FORBIDDEN            = 403,
  NOT_FOUND            = 404,
  CONFLICT             = 409,
  UNPROCESSABLE_ENTITY = 422,
  SERVER_ERROR         = 500,
}

// --------------------------------
export default ResponseStatus

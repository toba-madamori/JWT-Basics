const CustomAPIError = require('./custom-error')
const {StatusCodes} = require('http-status-codes')

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statuscode = StatusCodes.BAD_REQUEST
  }
}

module.export = BadRequestError
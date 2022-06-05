/* eslint-disable indent */
const Joi = require('joi');
const httpStatus = require('http-status');
const pick = require('../utils/pick');
const {
  errorF
} = require('../utils/message');

const validate = (schema) => (req, res, next) => {
  const validSchema = pick(schema, ['params', 'query', 'body']);
  const object = pick(req, Object.keys(validSchema));
  const {
    value,
    error
  } = Joi.compile(validSchema)
    .prefs({
      errors: {
        label: 'key',
      },
      abortEarly: false,
    })
    .validate(object);
  if (error) {
    const errorMessage = error.details
      .map((details) => details.message)
      .join(', ');
    const statusCode =
      res.statusCode !== httpStatus.OK ?
      res.statusCode :
      httpStatus.BAD_REQUEST;
    return errorF(errorMessage, error, statusCode, res, next);
  }
  Object.assign(req, value);
  next();
};

module.exports = validate;
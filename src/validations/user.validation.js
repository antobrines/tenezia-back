const Joi = require('joi');

const register = {
  body: Joi.object().keys({
    username: Joi.string()
      .min(2)
      .max(30)
      .required(),
    password: Joi.string().trim().min(6).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
    email: Joi.string().email().required(),
    discordId: Joi.string().required()
  })
};

const login = {
  body: Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
  })
};

const me = {
  body: Joi.object().keys({})
};

module.exports = {
  register,
  login,
  me
};
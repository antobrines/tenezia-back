const catchAsync = require('../utils/catchAsync');
const userService = require('../services/user.service');
const httpStatus = require('http-status');
const {
  errorF,
  successF
} = require('../utils/message');

const register = catchAsync(async (req, res, next) => {
  const userCreated = await userService.create(req.body);
  successF('User Created', userCreated, httpStatus.CREATED, res, next);
});

const login = catchAsync(async (req, res, next) => {
  const varLogged = await userService.login(req);
  if (varLogged == 'Invalid Credentiel') {
    const error = new Error('L\'adresse mail ou le mot de passe est invalide');
    return errorF(error.message, error, httpStatus.BAD_REQUEST, res, next);
  }
  successF('La connexion à bien été effectué', varLogged, httpStatus.OK, res, next);
});

const me = catchAsync(async (req, res, next) => {
  const user = await userService.findOneByEmail(req.user.email);
  successF('Information of users', user, httpStatus.OK, res, next);
});


module.exports = {
  register,
  login,
  me
};
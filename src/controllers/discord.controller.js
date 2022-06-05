const catchAsync = require('../utils/catchAsync');
const discordService = require('../services/discord.service');
const httpStatus = require('http-status');
const {
  successF
} = require('../utils/message');

const auth = catchAsync(async (req, res, next) => {
  const varLogged = await discordService.auth(req.query.code);
  successF('La connexion à bien été effectué', varLogged, httpStatus.OK, res, next);
});

const me = catchAsync(async (req, res, next) => {
  const varLogged = await discordService.me(req.headers.authorization);
  successF('Les informations ont bien été récupérées', varLogged, httpStatus.OK, res, next);
});

const roles = catchAsync(async (req, res, next) => {
  const {
    id
  } = req.params;
  const varLogged = await discordService.roles(id);
  successF('Les informations ont bien été récupérées', varLogged, httpStatus.OK, res, next);
});



module.exports = {
  auth,
  me,
  roles
};
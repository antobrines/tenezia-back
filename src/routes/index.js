/* eslint-disable indent */
const express = require('express');
const userRoute = require('./user.route');
const discordRoute = require('./discord.route');
const listRoute = require('./list.route');
const questionRoute = require('./question.route');
const router = express.Router();

const defaultRoutes = [
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/discord',
    route: discordRoute,
  },
  {
    path: '/lists',
    route: listRoute,
  },
  {
    path: '/questions',
    route: questionRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
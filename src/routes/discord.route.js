/* eslint-disable no-unused-vars */
const express = require('express');
const {
  NOT_EXTENDED
} = require('http-status');
const discordController = require('../controllers/discord.controller');
const validate = require('../middlewares/validate');
const router = express.Router();

router.get('/auth', (req, res, next) => {
  next();
}, discordController.auth);

router.get('/me', (req, res, next) => {
  next();
}, discordController.me);

router.get('/roles/:id', (req, res, next) => {
  next();
}, discordController.roles);


module.exports = router;
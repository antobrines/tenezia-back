const express = require('express');
const userController = require('../controllers/user.controller');
const userValidation = require('../validations/user.validation');
const validate = require('../middlewares/validate');
const router = express.Router();
const {
  isConnected
} = require('../middlewares/user.middleware');

router.post(
  '/register',
  validate(userValidation.register),
  userController.register
);

router.post('/login', validate(userValidation.login), userController.login);

router.get('/me', [isConnected, validate(userValidation.me)], userController.me);

module.exports = router;
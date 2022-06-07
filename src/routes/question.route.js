const express = require('express');
const questionController = require('../controllers/question.controller');
const validate = require('../middlewares/validate');
const router = express.Router();

router.post('/', validate(), questionController.create);

module.exports = router;

const express = require('express');
const listController = require('../controllers/list.controller');
const validate = require('../middlewares/validate');
const router = express.Router();

router.post('/', validate(), listController.create);
router.get('/', validate(), listController.getAll);
router.patch('/:id', validate(), listController.changePosition);

module.exports = router;

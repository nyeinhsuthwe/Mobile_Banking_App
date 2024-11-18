const express = require('express');
const dataController = require('../controller/dataController');
const handleErrorMessage = require('../middlewares/handleErrorMessage');
const { body } = require('express-validator');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

const router = express.Router();

router.get('',dataController.index);
router.get('',AuthMiddleware,dataController.index);

router.post('',[
    body('description').notEmpty(),
    body('price').notEmpty(),
    body('date').notEmpty()
],handleErrorMessage,dataController.create);

router.get('/:id',dataController.show);

router.delete('/:id',dataController.delete);

router.patch('/:id',dataController.update);


module.exports = router;
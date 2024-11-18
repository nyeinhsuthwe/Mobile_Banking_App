const express = require ('express');
const userController = require('../controller/userController');
const router = express.Router();
const handleErrorMessage = require('../middlewares/handleErrorMessage');
const { body } = require('express-validator');
const User = require('../models/User');

router.post('/login', userController.login)


router.post('/register',[
    body('name').notEmpty(),
    body('phone').notEmpty(),
    body('phone').custom(async value => {
        const user = await User.findOne({phone: value});
        if (user) {
          throw new Error('This phone is already used');
        }
    }),
    body('password').notEmpty()
],handleErrorMessage,userController.register)

module.exports= router;
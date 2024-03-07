const { Router } = require('express');
const userRouter = Router();

const { USER_ROUTE } = require('../config/routes');
const controller = require('../controllers/userController');

userRouter.post(USER_ROUTE.CREATE, controller.create);

module.exports = userRouter;

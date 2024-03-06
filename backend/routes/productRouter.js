const { Router } = require('express');
const productRouter = Router();

const { PRODUCT_ROUTE } = require('../config/routes');
const controller = require('../controllers/productController');

productRouter.get(PRODUCT_ROUTE.TEST, (_req, res) => {
  res.send('Hello World!');
});
productRouter.get(PRODUCT_ROUTE.FIND.ALL, controller.findAll);

module.exports = productRouter;

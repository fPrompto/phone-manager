const { Router } = require('express');

const { PRODUCT_ROUTE } = require('../config/routes');

const productRouter = Router();

productRouter.get(PRODUCT_ROUTE.TEST, (_req, res) => {
  res.send('Hello World!');
});

module.exports = productRouter;

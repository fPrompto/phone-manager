const { Router } = require('express');
const productRouter = Router();

const { PRODUCT_ROUTE } = require('../config/routes');
const controller = require('../controllers/productController');
const validateProductData = require('../middlewares/validateProductData');

productRouter.get(PRODUCT_ROUTE.TEST, (_req, res) => {
  res.send('Hello World!');
});
productRouter.get(PRODUCT_ROUTE.FIND.ALL, controller.findAll);
productRouter.post(
  PRODUCT_ROUTE.CREATE,
  validateProductData,
  controller.create,
);
productRouter.put(PRODUCT_ROUTE.EDIT, validateProductData, controller.edit);
productRouter.get(PRODUCT_ROUTE.FIND.ID, controller.findOneById);

module.exports = productRouter;

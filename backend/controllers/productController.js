const productService = require('../services/productService');

const findAll = async (_req, res) => {
  const find = await productService.findAll();
  return res.status(find.status).json(find.data);
};

module.exports = {
  findAll,
};

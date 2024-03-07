const productService = require('../services/productService');

const findAll = async (_req, res) => {
  const find = await productService.findAll();
  return res
    .status(find.status)
    .json({ message: find.message, data: find.data });
};

const create = async (req, res) => {
  const { name, brand, model, price, color } = req.body;
  const create = await productService.create({
    name,
    brand,
    model,
    price,
    color,
  });
  return res
    .status(create.status)
    .json({ message: create.message, data: create.data });
};

module.exports = {
  findAll,
  create,
};

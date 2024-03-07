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

const edit = async (req, res) => {
  const { id, name, brand, model, price, color } = req.body;
  const edit = await productService.edit({
    id,
    name,
    brand,
    model,
    price,
    color,
  });

  return res
    .status(edit.status)
    .json({ message: edit.message, data: edit.data });
};

const findOneById = async (req, res) => {
  const { id } = req.params;
  const find = await productService.findOneById(id);

  return res
    .status(find.status)
    .json({ message: find.message, data: find.data });
};

module.exports = {
  findAll,
  create,
  edit,
  findOneById,
};

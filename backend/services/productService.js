const { Product } = require('../models');
const { STATUS_CODE, PRODUCT_MESSAGE } = require('../config/statusMessages');

const findAll = async () => {
  const find = await Product.findAll();
  return {
    status: STATUS_CODE.OK,
    message: '',
    data: find,
  };
};

const create = async ({ name, brand, model, price, color }) => {
  try {
    const create = await Product.create({
      name,
      brand,
      model,
      price,
      color,
    });

    return {
      status: STATUS_CODE.CREATED,
      message: PRODUCT_MESSAGE.CREATE.SUCCESS,
      data: create,
    };
  } catch (e) {
    return {
      status: STATUS_CODE.BAD_REQUEST,
      message: PRODUCT_MESSAGE.CREATE.FAIL,
      data: '',
    };
  }
};

module.exports = {
  findAll,
  create,
};

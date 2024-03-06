const { Product } = require('../models');
const { STATUS_CODE, PRODUCT_MESSAGE } = require('../config/statusMessages');

const findAll = async () => {
  const find = await Product.findAll();
  return {
    status: STATUS_CODE.OK,
    data: find,
  };
};

module.exports = {
  findAll,
};

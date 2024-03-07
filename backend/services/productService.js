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
      message: '',
      data: create,
    };
  } catch (e) {
    return {
      status: STATUS_CODE.BAD_REQUEST,
      message: PRODUCT_MESSAGE.CREATE.FAIL,
      data: e,
    };
  }
};

const findOneById = async (id) => {
  try {
    const find = await Product.findOne({ where: { id } });
    return {
      status: STATUS_CODE.OK,
      message: '',
      data: find,
    };
  } catch (e) {
    return {
      status: STATUS_CODE.BAD_REQUEST,
      message: '',
      data: e,
    };
  }
}

const edit = async ({ id, name, brand, model, price, color }) => {
  try {
    const update = await Product.update(
      {
        name,
        brand,
        model,
        price,
        color,
      },
      { where: { id } },
    );

    const getProduct = await findOneById(update[0]);

    return {
      status: STATUS_CODE.OK,
      message: PRODUCT_MESSAGE.EDIT.SUCCESS,
      data: getProduct.data,
    };
  } catch (e) {
    return {
      status: STATUS_CODE.BAD_REQUEST,
      message: PRODUCT_MESSAGE.EDIT.FAIL,
      data: e,
    };
  }
};

module.exports = {
  findAll,
  create,
  edit,
  findOneById,
};

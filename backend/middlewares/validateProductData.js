const { PRODUCT_VALIDATION, STATUS_CODE } = require('../config/statusMessages');

const checkDataType = ({ name, brand, model, price, color }) => {
  if (typeof name !== 'string') {
    return {
      value: false,
      message: PRODUCT_VALIDATION.NAME,
    };
  }

  if (typeof brand !== 'string') {
    return {
      value: false,
      message: PRODUCT_VALIDATION.BRAND,
    };
  }

  if (typeof model !== 'string') {
    return {
      value: false,
      message: PRODUCT_VALIDATION.MODEL,
    };
  }

  if (typeof price !== 'number') {
    return {
      value: false,
      message: PRODUCT_VALIDATION.PRICE,
    };
  }

  if (typeof color !== 'string') {
    return {
      value: false,
      message: PRODUCT_VALIDATION.COLOR,
    };
  }

  return {
    value: true,
    message: PRODUCT_VALIDATION.SUCCESS,
  };
};

const validateProductData = (req, res, next) => {
  const { name, brand, model, price, color } = req.params;

  const checkType = checkDataType({ name, brand, model, price, color });

  if (checkType) {
    next();
  } else {
    res
      .status(STATUS_CODE.BAD_REQUEST)
      .json({ message: checkType.message, data: '' });
  }
};

module.exports = validateProductData;

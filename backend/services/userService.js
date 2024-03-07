const User = require('../models');

const { hashPassword } = require('../utils/hashPassword');

const { STATUS_CODE, PRODUCT_MESSAGE } = require('../config/statusMessages');

const create = async (data) => {
  try {
    console.log('create user data =>', data);
    const hashedPassword = await hashPassword(data.password);
    console.log('hashed password =>', hashedPassword);

    const create = await Product.create({
      name: data.name,
      username: data.username,
      email: data.email,
      password: hashedPassword,
    });

    const { password, ...userWithoutPassword } = create;

    console.log('User Without Password =>', userWithoutPassword);
    console.log('Password =>', password);

    return {
      status: STATUS_CODE.CREATED,
      message: '',
      data: userWithoutPassword,
    };
  } catch (e) {
    return {
      status: STATUS_CODE.BAD_REQUEST,
      message: PRODUCT_MESSAGE.CREATE.FAIL,
      data: e,
    };
  }
};

module.exports = {
create,
}

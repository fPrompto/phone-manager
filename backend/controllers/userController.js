const userService = require('../services/userService');

const create = async (req, res) => {
  const { name, username, email, password } = req.body;
  const create = await userService.create({
    name,
    username,
    email,
    password,
  });

  return res
    .status(create.status)
    .json({ message: create.message, data: create.data });
};

module.exports = {
  create,
};

const STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  IM_A_TEAPOT: 418,
  SERVER_ERROR: 500,
};

const PRODUCT_MESSAGE = {
  CREATE: {
    SUCCESS: 'Produto cadastrado com sucesso!',
    FAIL: 'Não foi possível cadastrar!',
  },
  EDIT: {
    SUCCESS: 'Editado com sucesso!',
    FAIL: 'Não foi possível editar!',
  },
  DELETE: {
    SUCCESS: 'Produto deletado com sucesso!',
    FAIL: 'Ocorreu um erro ao deletar este produto!',
  }
};

module.exports = {
  STATUS_CODE,
  PRODUCT_MESSAGE,
};

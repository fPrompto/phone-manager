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

const PRODUCT_VALIDATION = {
  NAME: 'O Nome precisa ser uma string',
  BRAND: 'A Marca precisa ser uma string',
  MODEL: 'O Modelo precisa ser uma string',
  PRICE: 'O preço precisa ser um número',
  COLOR: 'A cor precisa ser uma string',
  SUCCESS: 'Validação completada!',
}

module.exports = {
  STATUS_CODE,
  PRODUCT_MESSAGE,
  PRODUCT_VALIDATION,
};

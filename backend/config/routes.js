const ROUTE = {
  PRODUCT: '/product',
  USER: '/user',
};

const PRODUCT_ROUTE = {
  TEST: '/test',
  FIND: {
    ALL: '/find/all',
    ID: '/find/id/:id',
  },
  CREATE: '/create',
  EDIT: '/edit',
};

const USER_ROUTE = {
  CREATE: '/create',
};

module.exports = {
  ROUTE,
  PRODUCT_ROUTE,
  USER_ROUTE,
};

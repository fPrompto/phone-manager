const ROUTE = {
  PRODUCT: 'product',
};

export const PRODUCT_ROUTE = {
  TEST: `${ROUTE.PRODUCT}/test`,
  FIND: {
    ALL: `${ROUTE.PRODUCT}/find/all`,
    ID: `${ROUTE.PRODUCT}/find/id/:id`,
  },
  CREATE: `${ROUTE.PRODUCT}/create`,
  EDIT: `${ROUTE.PRODUCT}/edit`,
};

import Products from '../pages/Products';

const routes = [
  {
    path: '/',
    name: 'Login',
    element: Products,
    exact: true,
  },
  {
    path: '/products',
    name: 'Produtos',
    element: Products,
    exact: true,
  },
];

export default routes;
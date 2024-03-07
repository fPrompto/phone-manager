import React, { useEffect, useState } from 'react';

import { getAPI } from '../../utils/fetchAPI';
import { PRODUCT_ROUTE } from '../../config/routes';

import Loading from '../../components/Loading';

import './style.css';

function Products() {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadProducts = async () => {
    setIsLoading(true);
    const { data } = await getAPI(PRODUCT_ROUTE.FIND.ALL);
    setProductsData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const columns = ['NAME', 'BRAND', 'MODEL', 'PRICE', 'COLOR'];

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <div>Products!!!</div>
      <table>
        <thead>
          {columns.map((name) => {
            return <th>{name}</th>;
          })}
        </thead>
        <tbody>
          {productsData.map((data, i) => {
            return (
              <tr>
                <td>{data.name}</td>
                <td>{data.brand}</td>
                <td>{data.model}</td>
                <td>{data.price}</td>
                <td>{data.color}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Products;

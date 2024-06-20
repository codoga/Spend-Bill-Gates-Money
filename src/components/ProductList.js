import React from 'react';
import Product from './Products';

const ProductList = ({ products, onBuy, onSell, balance }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onBuy={onBuy}
          onSell={onSell}
          balance={balance}
        />
      ))}
    </div>
  );
};

export default ProductList;
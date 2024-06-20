import React from 'react';

const Product = ({ product, onBuy, onSell, balance }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => onBuy(product.id)} disabled={balance < product.price}>
        Buy
      </button>
      <button onClick={() => onSell(product.id)} disabled={product.quantity === 0}>
        Sell
      </button>
      <p>Quantity: {product.quantity}</p>
    </div>
  );
};

export default Product;

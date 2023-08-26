import * as React from 'react';

import './CardList.css';

interface CardListProps {
  products: Product[];
}

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const CardList = (props: CardListProps) => {
  const { products } = props;
  return (
    <div className="card-list">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.name} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{product.name}</h3>
            <p className="card-price">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;

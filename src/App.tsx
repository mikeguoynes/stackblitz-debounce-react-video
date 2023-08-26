import * as React from 'react';
import CardList from './components/CardList';
import './style.css';

const SearchBar = () => {
  return (
    <input type="text" placeholder="Search..." className="search-container" />
  );
};

export default function App() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 20,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 20,
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div>
      <h1>FrontendPulse</h1>
      <SearchBar />
      <CardList products={products} />
    </div>
  );
}

import * as React from 'react';
import CardList from './components/CardList';
import './style.css';

// Method to fetch posts from the demo API
const fetchProducts = async () => {
  try {
    const response = await fetch(
      'https://mockend.com/api/mikeguoynes/stackblitz-debounce-react-video/products'
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error(
        'Failed to fetch posts:',
        response.status,
        response.statusText
      );
      return null;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export default function App() {
  // const products = [
  //   {
  //     id: 1,
  //     name: 'Product 1',
  //     price: 20,
  //     image: 'https://via.placeholder.com/150',
  //   },
  //   {
  //     id: 2,
  //     name: 'Product 2',
  //     price: 20,
  //     image: 'https://via.placeholder.com/150',
  //   },
  // ];

  const products = [];

  const handleSearch = (e) => {
    fetchProducts();
  };

  return (
    <div>
      <h1>FrontendPulse</h1>
      <input
        onChange={handleSearch}
        type="text"
        placeholder="Search..."
        className="search-container"
      />
      <CardList products={products} />
    </div>
  );
}

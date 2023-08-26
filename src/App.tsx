import * as React from 'react';
import './style.css';


const SearchBar = () => {
  return <input type="text" placeholder="Search..." className="search-container" />;
};


export default function App() {
  return (
    <div>
      <h1>FrontendPulse</h1>
      <SearchBar />
    </div>
  );
}

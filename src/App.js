import React from 'react';
import ProductList from './components/ProductList';
import data from './data';

function App() {
  return (
    <div className="App">
      <h1>My App</h1>
      <ProductList products={data} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import data, { allCategories, categoriesUnique, productCount } from './data.js';
import Product from './Products'
import ProductNcp from './ProductNcp'



function App() {

  const [category, setCategory] = useState('All');

  return (
    <div className="App">
      <h1>{category}</h1>
      <Product category={category} setCategory={setCategory} />
      <ProductNcp category={category} />
      {/* <ProductClass /> */}
    </div >

  );
}
export default App;

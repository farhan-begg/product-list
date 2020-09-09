import React from 'react';
import './App.css';
import data, { allCategories, categoriesUnique, productCount } from './data.js';
import Product from './Products'
import ProductNcp from './ProductNcp'
import ProductClass from './ProductClass';


console.log(allCategories)

function App() {
  return (

    <div className="App">
      <p>Product Count: {productCount.length}</p>
      <p>Category: {}</p>
      {/* <Product />
      <ProductNcp /> */}
      <ProductClass />


    </div >
  );
}
export default App;

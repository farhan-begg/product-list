import React from 'react';
import logo from './logo.svg';
import './App.css';
import data, { allCategories, categoriesUnique, productCount } from './data.js';

console.log(allCategories)

const item = data.json

function App() {
  return (
    <div className="App">
          {/* <div key={item} className="products-header">
          <h1 className="block">{item.name}</h1>
          <h4 className="block">{item.price}</h4>
          <h4 className="block">{item.category}</h4>
        </div> */}
  );
}
   

    </div>
  );
}

export default App;

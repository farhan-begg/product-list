import React from 'react';
import logo from './logo.svg';
import './App.css';
import data, { allCategories, categoriesUnique, productCount } from './data.js';

console.log(allCategories)



function App() {
  return (
    <div className="App">
      <div className="posts">
        {data.map(post => {
          return (
            <div>
              <h4>{post.name}</h4>
            </div>
          )
        })}
      </div>

    </div >
  );
}
export default App;

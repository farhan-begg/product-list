import React from 'react'
import data, { categoriesUnique } from './data.js';


export default function Products() {
    console.log(categoriesUnique)
    // a list of buttons 
    const display_cat = categoriesUnique.map((item, index) => {
        return (
            <button className="button-items" key={index}>{item}</button>
        )

    })
    return (
        <div>
            {display_cat}
        </div>
    )
}


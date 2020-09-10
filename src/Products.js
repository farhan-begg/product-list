import React from 'react'
import data, { categoriesUnique } from './data.js';
import { arrowFunctionExpression } from '@babel/types';


export default function Products(props) {
    const { category, setCategory } = props
    // a list of buttons 
    const display_cat = categoriesUnique.map((item, index) => {
        return (
            <button
                className="button-items"
                key={index}
                onClick={() => {
                    setCategory(item)
                    console.log(category, '********')

                }}
            >{item}
            </button>
        )
    })
    return (
        <div>
            {display_cat}
        </div>
    )
}


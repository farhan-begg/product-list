import React from 'react'
import data from './data.js';


export default function ProductNcp() {


    // a list of buttons 
    const display_cat = data.map((item, index) => {
        return (
            <div key={index}>
                <h1>{item.name}</h1>
                <h3>{item.price}</h3>
                <h4>{item.category}</h4>
            </div>

        )

    })
    return (
        <div>
            {display_cat}

        </div>
    )
}

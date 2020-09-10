import React from 'react'
import data from './data.js';


export default function ProductNcp(props) {

    const { category } = props
    // when category is all show all of them
    // a list of buttons 
    const display_cat = data.filter((item, index) => {
        if (item.category === category) {
            return true
        }
        return false

    }).map((item, index) => {
        return (
            <div classname="cat" key={index}>

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

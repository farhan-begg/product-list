import React from 'react'
import data from './data.js';
import './ProductNcp.css';


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



            <div classname="test" key={index}>
                <ul id="cat">

                    <li><h1>{item.name}</h1></li>
                    <li><h3>{item.price}</h3></li>
                    <li><h4>{item.category}</h4></li>
                </ul>
            </div>
        )
    })
    return (
        <div>
            {display_cat}

        </div>
    )
}

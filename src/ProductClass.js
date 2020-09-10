import React, { Component } from 'react'
import data, { categoriesUnique } from './data';



export default class ProductClass extends Component {

    constructor(props) {
        super(props);
        this.state = { currentCategory: null }

    }


    display_cat = data.map((item, index) => {
        return (
            <div classname="display-item" key={index}>
                <h1>{item.name}</h1>
                <h3>{item.price}</h3>
                <h4>{item.category}</h4>
            </div>
        )
    })




    render() {
        return (
            <div>
                {this.display_cat}

            </div>
        )
    }
}

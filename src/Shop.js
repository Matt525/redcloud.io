import React, { Component } from 'react'
import {data} from './data.js';
import './shopMediaStyles.scss'
// Imported data for shop cards

export default class Shop extends Component {


    render() {
        const headerText = { 
            margin: '0 0 2em 0'
        }
    const shopData = data;
    const shopCards = shopData.map((item, index)=>(
                <div class="col d-inline-flex justify-content-center">
                            <div class="card" className="cardStyle">
                                                <img class="card-img-top" key={item.productImage} src={item.productImage} alt="Card image cap" />
                                                <div class="card-body">
                                                <h5 class="card-title">{item.name}</h5>
                                                <p class="card-text">{item.price}</p>
                                                <p>{item.description}</p>
                                                <a href="#" class="btn btn-outline-dark">Buy Now</a>
                                        </div>
                            </div>
                </div>
        
    ))
        return (
            <div className="container">
                <h1 style={headerText}>Apparel</h1>
                
                 <div class="row">
                        
                            {shopCards}
                        
                    </div>
                </div>
                )
    }
}

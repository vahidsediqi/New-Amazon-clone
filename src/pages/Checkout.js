import React, { Component } from 'react';
import Subtotal from '../components/Subtotal'
import './checkout.css'


class Checkout extends Component {
    render() {
        return (
            <div className="checkout">
                <div className="checkout__left">
                    <img 
                     className="checkout__ad"
                     src="https://images-eu.ssl-images-amazon.com/images/G/41/AVS/67fa8838-efec-4b40-abb0-d20faab09f74__1500x80.jpg"/>
                    <h2 className="checkout__title">Your Shopping Cart</h2>
                </div>

                <div className="checkout__right">
                    <Subtotal />
                   <h2>The subtotal will go here</h2>
                </div>
            </div>
        );
    }
}

export default Checkout;
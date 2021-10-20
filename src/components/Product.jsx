import React from 'react';
import './product.css'

const Product = () => {
    return (
        <div className="product">
            <div className="product__info">
                <p>The lean startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                   <p>&#127775;</p>
                   <p>	&#127775;</p>
                   <p>	&#127775;</p>
                </div>
            </div>
            <img src="https://m.media-amazon.com/images/I/41+5Z1FRiZL.jpg" alt="" />
            <button>Add to cart</button>

        </div>
    );
}

export default Product;

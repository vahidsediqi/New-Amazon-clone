import React from 'react';
import './product.css';
import CurrencyFormat from 'react-currency-format';

const Subtotal = () => {
    return (
        <div className="subtotal">
           <CurrencyFormat 
            renderText={(value) => (
               <div>
                  <p>
                      Subtotal(0 item): <strong>{value}</strong>
                  </p>
                  <small className="subtotal__gift">
                     This Order contains a gift
                  </small>
                  </div>
            )}
            decimalScale={2}
            value={10000000}
            thousandSeparator={true}
            prefix={'$'}
           />
        </div>
    );
}

export default Subtotal;

    
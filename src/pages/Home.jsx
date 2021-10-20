import React from "react";
import Product from "../components/Product";
import './home.css'

function Home(){
    return(

        <div className="home">
            <div className="home__container">
                <img className="home__image"
                src="https://m.media-amazon.com/images/I/61ASx7NHTWL._SX3000_.jpg" alt="" />
            </div>

            <div className="home__row">
              <Product/>
            </div>

            <div className="home__row">

            </div>

            <div className="home__row">

            </div>
        </div>

    )
}

export default Home;
import React from "react";
import Product from "../components/Product";
import './home.css'

function Home(){
  
    return(

        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src="https://m.media-amazon.com/images/I/81paxgFgr1L._SX3000_.jpg"
                 alt="" />

                <div className="home__row">
                   <Product
                    title="The Lean Startup" 
                    price={25.99} 
                    image={'https://m.media-amazon.com/images/I/41+5Z1FRiZL.jpg'} 
                    rating={5}/>
                    <Product
                    title="The Storyteller: Tales of Life and Music" 
                    price={41.59} 
                    image={'https://images-na.ssl-images-amazon.com/images/I/91I+w5MwdhS._AC_UL160_SR160,160_.jpg'} 
                    rating={5}/>

                </div>

                <div className="home__row">
                   <Product
                    title="Laptop GPU | 15.6' FHD 144Hz IPS Display | 8GB DDR4 | 256GB NVMe SSD" 
                    price={812.87} 
                    image={' https://m.media-amazon.com/images/I/71m03KItMZL._AC_SY200_.jpg'} 
                    rating={5}/>
                      <Product
                    title="Samsung Electronics Galaxy Watch 4 Classic 42mm Smartwatch with ECG Monitor" 
                    price={299.99} 
                    image={'https://m.media-amazon.com/images/I/61yY7B+O5AS._AC_UY218_.jpg'} 
                    rating={4}/>

                      <Product
                    title="Donerton Smart Watch, Fitness Tracker for Android Phones, Fitness Tracker with Heart Rate" 
                    price={37.99} 
                    image={'https://m.media-amazon.com/images/I/61QHRATj+vL._AC_UY218_.jpg'} 
                    rating={4}/>

                    <Product
                    title="Wireless Gaming Mouse Up to 10000 DPI, UHURU Rechargeable USB Wireless Mouse " 
                    price={30.34} 
                    image={'https://images-na.ssl-images-amazon.com/images/I/61I8BjnzubL._AC_UL160_SR160,160_.jpg'} 
                    rating={5}/>
               
                </div>

                <div className="home__row">
                <Product
                    title="5 Pack: Men’s Dry-Fit Moisture Wicking Active Athletic Performance Crew " 
                    price={29.99} 
                    image={'https://m.media-amazon.com/images/I/812jKl3ubJL._AC_UL320_.jpg'} 
                    rating={4}/>

                      <Product
                    title="5 Pack: Men’s Dry-Fit Moisture Wicking Active Athletic Performance Crew " 
                    price={29.99} 
                    image={'https://m.media-amazon.com/images/I/71Bwaf1QPUL._AC_UL320_.jpg'} 
                    rating={4}/>

                     <Product
                    title="Gildan Men's Ultra Cotton T-Shirt" 
                    price={12.99} 
                    image={'https://m.media-amazon.com/images/I/71tkoCcNQqS._AC_UL320_.jpg'} 
                    rating={3}/>

                    <Product
                    title="Fruit of the Loom Men's Stay Tucked Crew T-Shirt " 
                    price={14.99} 
                    image={'https://m.media-amazon.com/images/I/81UHW0CmGgL._AC_UL320_.jpg'} 
                    rating={2}/>

                     <Product
                    title="Under Armour Men's HeatGear Compression Long-Sleeve T-Shirt" 
                    price={25.31} 
                    image={'https://m.media-amazon.com/images/I/51doqhAEdBL._AC_UL320_.jpg'} 
                    rating={5}/>
                </div>

                <div className="home__row">
                <Product
                    title="Panasonic Electric Shaver for Women, Cordless 3 Blade Razor, " 
                    price={35.99} 
                    image={'https://m.media-amazon.com/images/I/61u0ngwtIlL._AC_UL320_.jpg'} 
                    rating={5}/>

                      <Product
                    title="Schick Hydro Silk Sensitive Skin Razor for Women with 2 Moisturizing Razor " 
                    price={8.50} 
                    image={'https://m.media-amazon.com/images/I/81evcbumPSL._AC_UL320_.jpg'} 
                    rating={4}/>

                     <Product
                    title="Painless Electric Razor for Women, Rechargeable Waterproof Electric " 
                    price={27.99} 
                    image={'https://m.media-amazon.com/images/I/51GztWb7pEL._AC_SR160,160_.jpg'} 
                    rating={5}/>

                    <Product
                    title="4 in 1 Electric Razor for Women,KIBTOY Wet & Dry Painless Rechargeable Shaver" 
                    price={36.99} 
                    image={'https://m.media-amazon.com/images/I/41qrHxGdXeL._AC_SR160,160_.jpg'} 
                    rating={2}/>

                </div>
            </div>
        </div>

    )
}

export default Home;
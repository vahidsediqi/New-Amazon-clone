import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './header.css'

const Header = () => {
    return (
        <div className="header">
          <a href="/"> <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" /> </a>
           <div className="header__search">
               <input className="header__seachInput" type="text"/>
               <SearchIcon className="header__searchIcon" />
           </div>

           <div className="header__nav">
               <div className="header__option">
                  <span className="header__optionLineOne">Hello, Vahid</span>
                  <span className="header__optionLineTwo">Sign In</span>
               </div>

               <div className="header__option">
                  <span className="header__optionLineOne">Returns</span>
                  <span className="header__optionLineTwo">Orders</span>
                </div>

                <div className="header__option">
                   <span className="header__optionLineOne">Your</span>
                  <span className="header__optionLineTwo">Prime</span>
                </div>
                <div className="header__optionBasket">
                   <ShoppingBasketIcon className="header__shoppingBaskit" />
                   <span className="header__optionLineTwo header__basketCount">
                       0
                   </span>
                </div>
           </div>
        </div>
    );
}

export default Header;

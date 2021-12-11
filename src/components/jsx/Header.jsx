import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../icons/coach.svg';
import sfl from '../icons/icon-utility-favorite-default.svg';
import myBag from '../icons/icon-utility-shopping-bag.svg';
import persona from '../icons/icon-utility-account-login.svg';
import location from '../icons/icon-utility-location.svg';
import countryLogo from '../icons/country.svg';
import magnifyGlass from '../icons/icon-utility-search.svg';


function Header(props) {
    return (
      <header className="main-header pt-4 p-3">
            <div className="navigation-container d-flex justify-content-between mb-3">
                <div className="left-section">
                    <div className="country-selector d-flex">
                        <div className="country-logo pr-2">
                            <img src={countryLogo} className="icon" height="14" alt ="country-logo"/>
                        </div>
                        <div className="country-text">US</div>
                        <div className="store-locator d-flex pl-3">
                            <img src ={location} className="icon" alt ="location"/>
                            <div className="d-none d-md-block store-text pl-1">Stores</div>
                        </div>
                    </div>
                </div>
                <div className="brand-logo">
                    <NavLink to="plp/new">
                      <img src={logo} className="brand-icon" alt="brand logo"/>
                    </NavLink>
                </div>
                <div className="right-section d-flex">
                    <div className="d-none d-md-flex flex-row">
                        <div className="search-bar mr-2">
                            <input type="text" placeholder="Search"/>
                            <img src={magnifyGlass} className="icon" alt ="search-icon"/>
                        </div>
                        <div className="my-wishlist pr-2">
                            <img src={sfl} className="icon" alt ="wishlist-icon"/>
                        </div>
                        <div className="my-account pr-2">
                            <img src={persona} className="icon" alt ="persona-icon"/>
                        </div>
                    </div>
                    <div className="my-cart">
                        <img src={myBag} className="icon" alt ="cart-icon"/>
                        <span className="cart-quantity">0</span>
                    </div>
                </div>
            </div>
            {props.categories.length ? (
            <div className="category-links d-none d-md-block mt-4 mb-2">
                <ul className="navbar-nav flex-row justify-content-around">
                {props.categories.map((item, index)=>{
                    return(
                        <li className="nav-item" key = {index}>
                            <NavLink className={"category-text nav-link "+ (({isActive}) => isActive ? "active" : "")} to={`/plp/${item}`} key ={index}>{item.toUpperCase()}</NavLink>
                        </li>
                        )
                })}
                </ul>
            </div>) :""}
            
      </header>
    );
}

export default Header

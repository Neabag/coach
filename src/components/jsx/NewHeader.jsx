import React from 'react'
import { NavLink } from "react-router-dom";

import logo from '../icons/coach.svg';
import sfl from '../icons/icon-utility-favorite-default.svg';
import myBag from '../icons/icon-utility-shopping-bag.svg';
import persona from '../icons/icon-utility-account-login.svg';
import location from '../icons/icon-utility-location.svg';
import countryLogo from '../icons/country.svg';
import magnifyGlass from '../icons/icon-utility-search.svg';

function NewHeader() {
    return (
        <header className="page-header">
            <div className="navigation-container d-flex justify-content-between px-3 mt-4">
                <div className="left-section">
                    <div className="country-selector d-flex">
                        <div className="country-logo pr-2">
                            <img src={countryLogo} height="14" alt ="country-logo"/>
                        </div>
                        <div className="country-text">US</div>
                        <div className="store-locator d-flex">
                            <img src ={location} alt ="location"/>
                            <div className="store-text">Store</div>
                        </div>
                    </div>
                </div>
                <div className="brand-logo">
                    <NavLink to="/new">
                      <img src={logo} alt="brand logo"/>
                    </NavLink>
                </div>
                <div className="right-section d-flex">
                    <div className="d-none d-md-flex flex-row">
                        <div className="search-bar">
                            <input type="text" placeholder="Search"/>
                            <img src={magnifyGlass} alt ="search-icon"/>
                        </div>
                        <div className="my-wishlist">
                            <img src={sfl} alt ="wishlist-icon"/>
                        </div>
                        <div className="my-account">
                            <img src={persona} alt ="persona-icon"/>
                        </div>
                    </div>
                    <div className="my-cart">
                        <img src={myBag} alt ="cart-icon"/>
                    </div>
                </div>
            </div>
            <div className="navigation-links d-none d-md-flex justify-content-around">
                <li className="first">hello</li>
                <li className="first">hello</li>
                <li className="first">hello</li>
                <li className="first">hello</li>
                <li className="first">hello</li>
            </div>
        </header>
    )
}

export default NewHeader

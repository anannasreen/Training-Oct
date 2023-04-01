import React from "react";
import searchButton from "./../assets/searchbutton.svg";
import cart from "./../assets/cart.svg";
import arrowDown from "./../assets/arrowDown.svg";
import "./Header.css";
import DropdownData from "./Dropdown";

function CreateHeaderDesktop() {
  return (
    <header>
      <div className="header-desktop">
        <div className="header-list">
          <div className="logo">
            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" />
            <div className="logo-text">
              <a href="https://www.flipkart.com/plus">
                Explore{" "}
                <span>
                  Plus
                  <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" />
                </span>
              </a>
            </div>
          </div>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search for products, brands and more"
            />
            <div className="search-button-desktop">
              <img src={searchButton} />
            </div>
          </div>
        </div>
        <div className="header-elements">
          <button>Login</button>
          <div className="header-nav-desktop">Become a Seller</div>
          <div className="header-nav-desktop more">
            More <img className="arrow" src={arrowDown} />
            <DropdownData />
          </div>
          <div className="header-nav-desktop">
            <img src={cart} /> Cart
          </div>
        </div>
      </div>
    </header>
  );
}

export default CreateHeaderDesktop;

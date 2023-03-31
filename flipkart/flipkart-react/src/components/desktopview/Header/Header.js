import React from "react";

function CreateHeader() {
  return (
    <header>
      <div className="header-desktop">
        <div className="header-list">
          <div className="logo">
            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" />
            <div className="logo-text">
                <p>Explore <span>Plus<img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"/></span></p>
            </div>
          </div>
          <div className="search-box">
            <input type='text' placeholder="Search for products, brands and more"/>
            <div className="search-button"></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default CreateHeader;

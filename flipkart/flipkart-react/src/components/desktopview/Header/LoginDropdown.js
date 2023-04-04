import React from "react";
import giftSVG from "./../assets/gift.svg";
import ordersSVG from "./../assets/orders.svg";
import plusZoneSVG from "./../assets/plusZone.svg";
import profileSVG from "./../assets/profile.svg";
import rewardSVG from "./../assets/reward.svg";
import wishlistSVG from "./../assets/wishlist.svg";
import "./Header.css";

function CreateLoginDropDown() {
  return (
    <div className="dropdown">
      <div className="triangle"></div>
      <div className="dropdown-list">
        <ul>
          <li className="dropdown-item">
            New customer?
            <span>Sign Up</span>
          </li>

          <li className="dropdown-item">
            <img src={profileSVG} />
            My Profile
          </li>

          <li className="dropdown-item">
            <img src={plusZoneSVG} />
            Flipkart Plus Zone
          </li>

          <li className="dropdown-item">
            <img src={ordersSVG} />
            Orders
          </li>

          <li className="dropdown-item">
            <img src={wishlistSVG} />
            Wishlist
          </li>

          <li className="dropdown-item">
            <img src={rewardSVG} />
            Rewards
          </li>

          <li className="dropdown-item">
            <img src={giftSVG} />
            Gift Cards
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CreateLoginDropDown;

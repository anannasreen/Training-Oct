import React, { useEffect, useState } from "react";
import likeTheImage from "./LikeImage";

const likedImageSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z"></path>
  </svg>
);
const playButtonSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <polygon points="4 4 4 20 20 12 4 4"></polygon>
  </svg>
);
const starSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 5 22 12"
    width="16"
    height="12"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M5,6A1,1,0,0,0,4,7v3H5v9a1,1,0,0,0,1,1h5V6H5Z"></path>
    <path d="M19,6H13.007A4.245,4.245,0,0,0,14.97,3.744a1.614,1.614,0,0,0-2.65-1.375,1.757,1.757,0,0,0-.315.324,1.753,1.753,0,0,0-.315-0.324A1.615,1.615,0,0,0,9.042,3.746,4.257,4.257,0,0,0,11.006,6H13V20h5a1,1,0,0,0,1-1V10h1V7A1,1,0,0,0,19,6Z"></path>
  </svg>
);

const GiftSection = () => {
  const [gift, setGift] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setGift(data.gifts);
      });
  }, []);

  return (
    <section className="gift">
      <div className="header-gift">
        <h2>Popular gifts right now</h2>
      </div>
      <div className="gift-list">
        {gift.map((item, idx) => {
          const {
            url,
            name,
            rating,
            actualprice,
            discount,
            currencySymbol,
            urlType,
            video,
            ratingStar,
          } = item;
          return (
            <div className="gift-items" key={name}>
              <div className="gift-img">
                <video
                  poster={url}
                  className="video"
                  loop={true}
                  src={video}
                ></video>
                <div className="like-gift" onClick={likeTheImage}>{likedImageSVG}</div>
                {playButton(item, idx)}
              </div>
              <div className="gift-txt">
                <h3>{name}</h3>
                <div className="rating">
                  <div className="star-rating">{starRating(item)}</div>
                  <p>({rating})</p>
                </div>
                <div className="price">
                  <p className="priceActual">
                    {currencySymbol}
                    {discountPercentage(actualprice, discount)}
                  </p>
                  <span>
                    {currencySymbol}
                    {actualprice}
                  </span>
                  <a href="">({discount}% off)</a>
                </div>
              </div>
              <div className="gift-name">{name}</div>
              {createDeliveryIcon(item, idx)}
            </div>
          );
        })}
      </div>
    </section>
  );
};

function createDeliveryIcon(data, idx) {
  if (data.actualprice > 2000) {
    return <div className="delivery">Free Delivery</div>;
  } else {
    return "";
  }
}

function playButton(data, idx) {
  if (data.urlType === "Video") {
    return <div className="play-btn">{playButtonSVG}</div>;
  } else {
    return "";
  }
}

function starRating(data) {
  let x = "";

  for (let i = 0; i < data.ratingStar; i++) {
    x += starSVG
  }
  return x;
}

function discountPercentage(actualPrice, discounts) {
  return Math.round(actualPrice * ((100 - discounts) / 100));
}

export default GiftSection;

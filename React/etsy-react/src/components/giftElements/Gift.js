import React, { useEffect, useState } from "react";
import CreateDeliveryIcon from "./DeliveryIcon";
import DiscountPercentage from "./Discount";
import HalfStar from "./HalfStar";
import LikeTheImage from "./LikeImage";
import PauseVideo from "./PauseVideo";
import PlayButton from "./PlayButton";
import PlayVideo from "./PlayVideo";
import LoopStar from "./Star";

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
          return <CreateGiftCards item={item} key={item.name} />;
        })}
      </div>
    </section>
  );
};

// function starRating(data) {
//   let x = "";

//   for (let i = 0; i < data.ratingStar; i++) {
//     x += "★";
//   }
//   return x;
// }

export function CreateGiftCards(props) {
  // console.log(props);
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
    id,
  } = props.item;
  return (
    <div className="gift-items" key={id}>
      <Video value={urlType} url={url} video={video} />
      <div className="gift-txt">
        <h3>{name}</h3>
        <div className="rating">
          <LoopStar value={ratingStar} />
          <HalfStar value={ratingStar} />
          <p>({rating})</p>
        </div>
        <div className="price">
          <p className="priceActual">
            {currencySymbol}
            {/* {discountPercentage(actualprice, discount)} */}
            <DiscountPercentage
              actualPrice={actualprice}
              discounts={discount}
            />
          </p>
          <span>
            {currencySymbol}
            {actualprice}
          </span>
          <a href="">({discount}% off)</a>
        </div>
      </div>
      <div className="gift-name">{name}</div>
      {/* {createDeliveryIcon(props, id)} */}
      <CreateDeliveryIcon value={actualprice} />
    </div>
  );
}

function Video(props) {
  if (props.value === "Photo") {
    return (
      <div className="gift-img">
        <img src={props.url} />;
        <LikeTheImage />
      </div>
    );
  } else if (props.value === "Video") {
    return (
      <div className="gift-img">
        <video
          poster={props.url}
          className="video"
          loop={true}
          muted={true}
          type="video/mp4"
          src={props.video}
          onMouseOver={PlayVideo}
          onMouseLeave={PauseVideo}
        ></video>
        <PlayButton />
        <LikeTheImage />
      </div>
    );
  }
}

// videos.forEach((video) => {
//   video.addEventListener("mouseover", () => {
//     video.play();
//   });
//   video.addEventListener("mouseleave", () => {
//     video.pause();
//     video.currentTime = 0;
//   });
// });

export default GiftSection;

import React, { useEffect, useState, useRef } from "react";
import CreateDeliveryIcon from "./DeliveryIcon";
import DiscountPercentage from "./Discount";
import HalfStar from "./HalfStar";
import LoopStar from "./Star";
import CreateTooltip from "./ToolTip";
import Video from "./Video";

const GiftSection = () => {
  const [gift, setGift] = useState([]);
  const priceValue = useRef();

  useEffect(() => {
    fetch("./data.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setGift(data.gifts);
      });
  }, []);

  const listChange = () => {
    const filterPrice = +priceValue.current.value;
    const filterArr = gift.filter((element) => {
      return DiscountPercentage(element) >= filterPrice;
    });
    setGift(filterArr);
  };

  // createTooltip();

  return (
    <section className="gift">
      <div className="header-gift">
        <h2>Popular gifts right now</h2>
        {/* <CreateFilterButton /> */}
        <div className="filter-button">
          <input type="number" placeholder="Enter price..." ref={priceValue} />
          <button className="filter" onClick={listChange}>
            Filter
          </button>
        </div>
      </div>
      <div className="gift-list">
        {gift.map((item, idx) => {
          return <CreateGiftCards item={item} key={item.name} />;
        })}
      </div>
    </section>
  );
};

export function CreateGiftCards(props) {
  const textElement = useRef();
  const giftCard = useRef();

  function CreateTooltip(e) {
    let x = e.pageX - giftCard.current.offsetLeft + 20;
    let y = e.pageY - giftCard.current.offsetTop + 20;

    // console.log(x, y);

    textElement.current.style.left = `${x}px`;
    textElement.current.style.top = `${y}px`;
  }

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
    <div
      className="gift-items"
      key={id}
      onMouseOver={CreateTooltip}
      ref={giftCard}
    >
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
            <DiscountPercentage actualprice={actualprice} discount={discount} />
          </p>
          <span>
            {currencySymbol}
            {actualprice}
          </span>
          <a href="">({discount}% off)</a>
        </div>
      </div>
      <CreateDeliveryIcon value={actualprice} />
      <div className="gift-name" ref={textElement}>
        {name}
      </div>
    </div>
  );
}

// function Video(props) {
//   console.log(props);
//   if (props.value === "Photo") {
//     return (
//       <div className="gift-img">
//         <img src={props.url} />;
//         <LikeTheImage />
//       </div>
//     );
//   } else if (props.value === "Video") {
//     return (
//       <div className="gift-img">
//         <video
//           poster={props.url}
//           className="video"
//           loop={true}
//           muted={true}
//           type="video/mp4"
//           src={props.video}
//           onMouseOver={PlayVideo}
//           onMouseLeave={PauseVideo}
//         ></video>
//         <LikeTheImage />
//         <PlayButton value={props.value} />
//       </div>
//     );
//   }
// }

export default GiftSection;

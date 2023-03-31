import React, { useEffect, useState } from "react";
import fetchData from "../../../fetchData";
import "./Carousel.css";

function CreateCarousel() {
  const [carousel, setCarousel] = useState([]);
  let [index, setIndex] = useState(0);

  useEffect(() => {
    async function carouselData() {
      const carouselResponse = await fetchData();
      setCarousel(carouselResponse);
    }
    carouselData();
  }, []);

  const data = carousel.carouselData;

  const length = data?.length;
  // console.log(length);
  // console.log(carousel.carouselData)

  const CallIndex = () => {
    // if (index < length) {
    // setIndex(index);
    // index = index + 1;
    // }
    // return index

    // if (index === 8) {
    //   setIndex(0);
    // }

    setIndex(index === length - 1 ? 0 : index + 1);
  };

  // useEffect(() => {
  //   setInterval(CallIndex, 2000);
  //   // clearInterval(i);
  // }, []);
  // console.log(index);

  useEffect(() => {
    setTimeout(CallIndex, 2000);
  });

  return (
    <div className="carousel-mobile">
      {carousel?.carouselData?.map((item) => {
        return (
          <div
            className="carousel-img"
            key={item}
            style={{
              transform: `translateX(${-100 * index}%)`,
              transition: "transform ease-out 0.45s",
            }}
          >
            <img src={item} />
          </div>
        );
      })}
    </div>
  );
}

export default CreateCarousel;

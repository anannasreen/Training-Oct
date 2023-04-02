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

  const CallIndex = () => {
    setIndex(index === length - 1 ? 0 : index + 1);
  };

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

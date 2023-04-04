import React, { useEffect, useRef, useState } from "react";
import fetchData from "../../../fetchData";
import "./Electronics.css";
import arrow from "./../assets/arrowLeft.svg";

function CreateToySection() {
  const [list, setList] = useState([]);
  const imageCard = useRef();
  const arrowRight = useRef();
  const arrowLeft = useRef();

  useEffect(() => {
    async function ElectronicData() {
      const DataResponse = await fetchData();
      setList(DataResponse);
    }
    ElectronicData();
  }, []);

  const handleClickRight = () => {
    console.log(imageCard);
    imageCard.current.style.transform = `translateX(${-35}%)`;
    arrowRight.current.style.display = "none";
    arrowLeft.current.style.display = "flex";
    imageCard.current.style.transition = "transform ease-in-out 0.45s";
  };

  const handleClickLeft = () => {
    imageCard.current.style.transform = `translateX(${2}%)`;
    arrowLeft.current.style.display = "none";
    arrowRight.current.style.display = "flex";
    imageCard.current.style.transition = "transform ease-in-out 0.45s";
  };

  return (
    <div className="electronic-section">
      <div className="electronic-element">
        <h2>Beauty, Food, Toys & more</h2>
        <button className="button">VIEW ALL</button>
        <img src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/b84f1c22cce1a6a3.jpg?q=90" />
      </div>
      <div className="arrow-left-electronic" ref={arrowLeft}>
        <img src={arrow} onClick={handleClickLeft} />
      </div>
      <div className="image-scroll" ref={imageCard}>
        {list?.toySectionData?.map((item) => {
          return (
            <div className="image-card" key={item.title}>
              <div className="image">
                <img src={item.url} />
              </div>
              <div className="image-descr">
                <p>{item.title}</p>
                <span>{item.discount}</span>
                <a href="">{item.type}</a>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="arrow-right-electronic"
        onClick={handleClickRight}
        ref={arrowRight}
      >
        <img src={arrow} />
      </div>
    </div>
  );
}

export default CreateToySection;

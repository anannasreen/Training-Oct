import React, { useState, useEffect } from "react";
import DiscountPercentage from "./Discount";

const CreateFilterButton = () => {
  const [filter, setFilter] = useState("");
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

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const handleClick = () => {
    console.log(filter);
  };

  return (
    <div className="filter-button">
      <input
        type="number"
        placeholder="Enter price..."
        onChange={handleChange}
        value={filter}
      />
      <button className="filter" onClick={handleClick}>
        Filter
      </button>
      {gift.map((props) => {
        console.log(
          <DiscountPercentage
            actualPrice={props.actualprice}
            discounts={props.discount}
          />
        );
        // console.log(props.actualprice, props.discount);
      })}
    </div>
  );
};

export default CreateFilterButton;

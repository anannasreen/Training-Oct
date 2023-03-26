import React, { useState, useEffect } from "react";

const DealsSection = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        // console.log(data.deals);
        setDeals(data.deals);
      });
  }, []);

  return (
    <section className="deals">
      <div className="deals-heading">
        <h2>Deals of the day</h2>
        <a>
          Shop all deals<i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      <ul className="deals-items">
        {deals.map((item) => {
          return (
            <li key={item.category}>
              <div className="deals-img">
                <img src={item.url} />
              </div>
              <div className="deals-txt">
                <span>{item.discount}</span>
                <p>{item.category}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default DealsSection;

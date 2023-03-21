import React, { useEffect, useState } from "react";

const OverviewSection = () => {
  const [overview, setOverview] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setOverview(data.overview);
      });
  }, []);

  return (
    <div className="overview">
      <div className="overview-heading">
        <p>Discover one-of-a-kind items from independent creators</p>
      </div>
      <div className="overview-items">
        <div className="background"></div>
        <ul className="overview-list">
          {overview.map((item) => {
            return (
              <li key={item.name}>
                <div className="overview-img" key={item.name}>
                  <img src={item.img} />
                </div>
                <p>{item.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default OverviewSection;

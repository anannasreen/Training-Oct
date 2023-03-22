import React, { useState, useEffect } from "react";

function SelectionList() {
  const [select, setSelect] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        // console.log(data.select);
        setSelect(data.selection);
      });
  }, []);

  return (
    <div className="selection">
      <div className="selection-heading">
        <h2>
          Shop our selections <i className="fa-solid fa-arrow-right"></i>
        </h2>
        <p>Curated collections hand-picked by Etsy editors</p>
      </div>

      <ul className="selection-items">
        {select.map((item) => {
          return (
            <li key={item.name}>
              <div className="selection-img">
                <img src={item.img} />
              </div>
              <div className="selection-txt">
                <p>{item.name}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SelectionList;

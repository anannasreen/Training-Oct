import React from "react";

function SelctionList() {
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
    <div className="deals">
      <div className="deals-heading">
        <h2>
          Shop our selections<i class="fa-solid fa-arrow-right"></i>
        </h2>
        <p>Curated collections hand-picked by Etsy editors</p>
      </div>

      <ul className="deals-items">
        {deals.map((item) => {
          return (
            <li key={item.name}>
              <div className="deals-img">
                <img src={item.img} />
              </div>
              <div className="deals-txt">
                <p>{item.name}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SelctionList;

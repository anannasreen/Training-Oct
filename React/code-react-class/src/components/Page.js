import React, { useState } from "react";
import "./Page.css";

const obj = [
  {
    id: 1,
    title: "Title 1",
    subtitle: "Subtitle 1",
    name: "Hello world",
  },
  {
    id: 2,
    title: "Title 2",
    subtitle: "Subtitle 2",
    name: "Good Morning",
  },
  {
    id: 3,
    title: "Title 3",
    subtitle: "Subtitle 3",
    name: "Have a nice day",
  },
];

function CreatePage() {
  const [data, setData] = useState(obj);

  const filteredArr = (item) => {
    console.log(item);
    const filter = data.filter((element) => element.id !== item.id);
    setData(filter);
    //setData(data.filter(() => data.id !== item.id));
  };
  //   filteredArr(obj);
  console.log(data)

  return (
    <div>
      {data.map((item) => {
        const { title, subtitle, name } = item;
        return (
          <div className="list" key={title}>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <p>{name}</p>
            <button
              onClick={() => {
                filteredArr(item);
              }}
            >
              DELETE
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default CreatePage;

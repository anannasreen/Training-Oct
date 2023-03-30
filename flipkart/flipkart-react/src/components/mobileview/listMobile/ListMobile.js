import React, { useEffect, useState } from "react";
import fetchData from "../../../fetchData";
import "./ListMobile.css";

function CreateList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function listData() {
      const listResponse = await fetchData();
      setList(listResponse);
    }
    listData();
  }, []);

  return (
    <div className="list-mobile">
      {list?.listData?.map((item) => {
        return (
          <div className="list-img" key={item}>
            <img src={item} />
          </div>
        );
      })}
    </div>
  );
}

export default CreateList;

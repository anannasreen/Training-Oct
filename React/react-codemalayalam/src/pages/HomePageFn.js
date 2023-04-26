import React, { useState, useEffect, useMemo, useCallback } from "react";
import Tools from "../components/Tools";
import SimpleList from "../list/SimpleList";
import JustInfo from "./JustInfo";

import { MyContext, MyNewContext } from "./mycontexts";

function HomePageFn() {
  const [showLabel, setShowLabel] = useState(true);
  const [activeState, setActiveState] = useState("all");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  const onListChange = (e) => {
    const value = e.target.value;
    setActiveState(value);
  };

  const handleDelete = (item) => {
    // console.log("Delete", item);
    const newList = data.filter((element) => element.id !== item.id);
    setData(newList);
  };

  const handleLabelClick = (arg) => {
    setActiveState(arg);
  };

  const handleAdd = (item) => {
    setData([item, ...data]);
  };

  const handleShowLabel = (e) => {
    setShowLabel(e.target.checked);
  };

  const newList = data.filter((item) => {
    if (activeState === "all") {
      return true;
    }
    if (activeState === "active") {
      return item.isActive === true;
    }
    if (activeState === "non-active") {
      return item.isActive === false;
    }
    return false;
  });

  const handleClick = useCallback(() => {
    // console.log("Clicked", activeState);
  }, [activeState]);

  return (
    <div>
      <div>
        <input
          defaultChecked={showLabel}
          type="checkbox"
          onChange={handleShowLabel}
        ></input>
        Show Label
      </div>
      <MyNewContext.Provider value={100}>
        <MyContext.Provider value={showLabel}>
          <Tools
            onAdd={handleAdd}
            labelValue={activeState}
            onAction={onListChange}
            count={data.length}
          >
            <SimpleList
              onLabelClick={handleLabelClick}
              data={newList}
              onAction={handleDelete}
            />
          </Tools>
          <JustInfo onClick={handleClick} showLabel={showLabel} />
        </MyContext.Provider>
      </MyNewContext.Provider>
    </div>
  );
}

export default HomePageFn;

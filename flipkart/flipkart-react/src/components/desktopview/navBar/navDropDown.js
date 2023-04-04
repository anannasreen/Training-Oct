import React, { useEffect, useState } from "react";
import fetchData from "../../../fetchData";

function CreateDropDown() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function DropDownData() {
      const dropDownResponse = await fetchData();
      setList(dropDownResponse);
    }
    DropDownData();
  }, []);

  return (
    <div className="dropdown-desktop">
      <ul>
        {list?.navDataDesktop?.list?.map((item) => {
          console.log(item.list);
          return (
            <li className="nav-dropdown" key={item.title}>
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CreateDropDown;

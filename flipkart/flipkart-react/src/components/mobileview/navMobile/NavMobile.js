import React, { useEffect, useState } from "react";
import fetchData from "../../../fetchData";
import "./NavMobile.css";

function CreateNavMobile() {
  const [nav, setNav] = useState([]);

  useEffect(() => {
    async function navData() {
      const navResponse = await fetchData();
      setNav(navResponse);
    }
    navData();
  }, []);
  // console.log(nav.navData);

  return (
    <div className="nav-mobile">
      {nav?.navData?.map((item) => {
        return (
          <div className="nav-img" key={item}>
            <img src={item} alt="offers" />
          </div>
        );
      })}
    </div>
  );
}

export default CreateNavMobile;

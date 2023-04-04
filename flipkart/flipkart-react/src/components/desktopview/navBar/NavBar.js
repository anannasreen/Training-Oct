import React, { useEffect, useState } from "react";
import fetchData from "../../../fetchData";
import "./NavBar.css";
import navArrow from "./../assets/navArrowDown.svg";
import hoverArrow from "./../assets/hoverArrow.svg";
import CreateDropDown from "./navDropDown";

function CreateNavDesktop() {
  const [nav, setNav] = useState([]);

  useEffect(() => {
    async function NavData() {
      const NavResponse = await fetchData();
      setNav(NavResponse);
    }
    NavData();
  }, []);
  // console.log(nav.navDataDesktop);

  return (
    <div className="nav-desktop">
      <ul>
        {nav?.navDataDesktop?.map((item) => {
          return (
            <li className="nav-list" key={item.title}>
              <div className="nav-img">
                <img src={item.url} />
              </div>
              <div className="nav-text">
                {item.title}
                {item.list !== "" && (
                  <>
                    <img src={navArrow} />
                    <CreateDropDown />
                  </>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CreateNavDesktop;

import React from "react";
import CreateHeaderDesktop from "../desktopview/Header/Header";
import GenerateMainPage from "../desktopview/mainSection/MainPage";
import CreateNavDesktop from "../desktopview/navBar/NavBar";

function GenerateHomepageDesktop() {
  return (
    <div className="homepage-desktop">
      <CreateHeaderDesktop />
      <CreateNavDesktop />
      <GenerateMainPage />
    </div>
  );
}

export default GenerateHomepageDesktop;

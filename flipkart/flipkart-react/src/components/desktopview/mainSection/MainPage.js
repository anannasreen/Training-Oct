import React from "react";
import CreateCarouselDesktop from "./CarouselDesktop";
import "./MainPage.css";

function GenerateMainPage() {
  return (
    <main>
      <div className="main-section">
        <CreateCarouselDesktop />
      </div>
    </main>
  );
}

export default GenerateMainPage;

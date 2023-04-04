import React from "react";
import CreateCarouselDesktop from "./CarouselDesktop";
import CreateElectronicSection from "./Electronics";
import CreateHomeSection from "./HomeSection";
import "./MainPage.css";
import CreateToySection from "./ToysSection";

function GenerateMainPage() {
  return (
    <main>
      <div className="main-section">
        <CreateCarouselDesktop />
        <CreateElectronicSection />
        <CreateToySection />
        <CreateHomeSection />
      </div>
    </main>
  );
}

export default GenerateMainPage;

import React from "react";
import DealsSection from "./elements/Deals";
import Header from "./elements/Header";
import NavBar from "./elements/NavBar";
import OverviewSection from "./elements/Overview";
import SelectionList from "./elements/SelectionList";
import Footer from "./footerElements/Footer";
import GiftSection from "./giftElements/Gift";

function HomePage() {
  return (
    <>
      <Header />
      <NavBar />
      <OverviewSection />
      <DealsSection />
      <GiftSection />
      <SelectionList/>
      <Footer />
    </>
  );
}

export default HomePage;

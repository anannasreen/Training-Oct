import React from "react";
import DealsSection from "./Deals";
import Footer from "./Footer";
import GiftSection from "./giftElements/Gift";
import Header from "./Header";
import NavBar from "./NavBar";
import OverviewSection from "./Overview";
import SelectionList from "./SelectionList";

function HomePage() {
  return (
    <>
      <Header />
      <NavBar />
      <OverviewSection />
      <DealsSection />
      <GiftSection />
      {/* <SelectionList/> */}
      <Footer />
    </>
  );
}

export default HomePage;

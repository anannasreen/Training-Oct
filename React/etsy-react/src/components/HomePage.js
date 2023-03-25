import React from "react";
import DealsSection from "./Deals";
import GiftSection from "./giftElements/Gift";
import Header from "./Header";
import NavBar from "./NavBar";
import OverviewSection from "./Overview";
import SelectionList from "./SelectionList";
import Footer from "./footerElements/Footer";

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

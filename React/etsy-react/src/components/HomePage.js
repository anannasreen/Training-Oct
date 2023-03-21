import React from "react";
import DealsSection from "./Deals";
import Footer from "./Footer";
import GiftSection from "./Gift";
import Header from "./Header";
import NavBar from "./NavBar";
import OverviewSection from "./Overview";

function HomePage() {
  return (
    <>
      <Header />
      <NavBar />
      <OverviewSection />
      <DealsSection />
      <GiftSection />
      <Footer />
    </>
  );
}

export default HomePage;

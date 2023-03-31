import React from "react";
import CreateCarousel from "../mobileview/carousel/Carousel";
import CreateCollectionList from "../mobileview/collections/Collections";
import CreateMobileList from "../mobileview/collections/Mobile";
import CreateHeader from "../mobileview/headerMobile/HeaderMobile";
import CreateList from "../mobileview/listMobile/ListMobile";
import CreateNavMobile from "../mobileview/navMobile/NavMobile";
import CreateOffersList from "../mobileview/offers/Offers";
import './HomePage.css'

function GenerateHomepageMobile() {
  return (
    <div className="homepage-mobile">
      <CreateHeader />
      <CreateNavMobile />
      <CreateCarousel />
      <CreateList />
      <CreateOffersList />
      <CreateCollectionList />
      <CreateMobileList />
    </div>
  );
}

export default GenerateHomepageMobile;

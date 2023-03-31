import React, { useEffect, useState } from "react";
import fetchData from "../../../fetchData";
import './Offers.css'

function CreateOffersList() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function offersData() {
      const offerResponse = await fetchData();
      setOffers(offerResponse);
    }
    offersData();
  }, []);
  console.log(offers.offersData);

  return (
    <div className="offer-mobile">
      {offers?.offersData?.map((item) => {
        return (
          <div className="offer-img" key={item}>
            <img src={item} alt='offers' />
          </div>
        );
      })}
    </div>
  );
}

export default CreateOffersList;

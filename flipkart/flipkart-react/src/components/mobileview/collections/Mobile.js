import React, { useEffect, useState } from "react";
import fetchData from "../../../fetchData";
import "./Collection.css";

function CreateMobileList() {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    async function CollectionData() {
      const collectionResponse = await fetchData();
      setCollection(collectionResponse);
    }
    CollectionData();
  }, []);
  //   console.log(collection.collectionData);

  return (
    <>
      <div className="bg-image">
        <img
          src="https://rukminim1.flixcart.com/fk-p-reco/650/150/images/Reco_BBDH_Apr_fffad6.jpg?q=90"
          alt="bg-image"
        />
        <div className="text">
          <div className="title">
            <span>Mobiles To Check Out</span>
            <p>Suggested for You</p>
          </div>
          <div className="arrow">
            <img
              src="https://rukminim1.flixcart.com/www/70/70/promos/04/08/2021/a76dff7e-d644-455c-9bb1-76ab974c4c5e.png?q=90"
              alt="arrow"
            />
          </div>
        </div>
      </div>
      <div className="collections">
        {collection?.mobileData?.map((item) => {
          return (
            <div className="collection-list" key={item.title}>
              <div className="collection-img">
                <img src={item.url} alt="collection" />
              </div>
              <div className="collection-title">
                <span>{item.title}</span>
                <p>{item.discount}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CreateMobileList;

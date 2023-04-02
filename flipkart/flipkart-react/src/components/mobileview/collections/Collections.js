import React, { useEffect, useState } from "react";
import fetchData from "../../../fetchData";
import "./Collection.css";

function CreateCollectionList() {
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
            <span>Men's Sports Shoes For You</span>
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
        {collection?.collectionData?.map((item) => {
          const { title, url, discount } = item;

          return (
            <div className="collection-list" key={title}>
              <div className="collection-img">
                <img src={url} alt="collection" />
              </div>
              <div className="collection-title">
                <span>{title}</span>
                <p>{discount}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="suggested">
        <div className="suggested-content">
          <div className="mobile-card">
            <img src="https://rukminim1.flixcart.com/image/150/150/l2jcccw0/mobile/i/1/y/-original-imagdu8gtefvchbn.jpeg?q=90" />
          </div>
          <div className="text-mobile">
            <p>Suggested for You</p>
            <span>Based on Your Activity</span>
          </div>
        </div>
        <div className="button">
          <button>
            View all{" "}
            <img src="https://rukminim1.flixcart.com/www/20/20/promos/26/05/2021/bd064927-22ee-4b7b-82db-3bf4c6270184.png?q=90" />
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateCollectionList;

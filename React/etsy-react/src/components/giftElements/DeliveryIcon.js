import React from "react";

function createDeliveryIcon(data, idx) {
  if (data.actualprice > 2000) {
    return <div className="delivery">Free Delivery</div>;
  } else {
    return "";
  }
}

export default createDeliveryIcon;

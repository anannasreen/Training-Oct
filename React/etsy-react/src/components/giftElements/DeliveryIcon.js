import React from "react";

function CreateDeliveryIcon(props) {
  if (props.value > 2000) {
    return <div className="delivery">Free Delivery</div>;
  } else {
    return "";
  }
}

export default CreateDeliveryIcon;

import React from "react";

function DiscountPercentage(props) {
  return Math.round(props.actualPrice * ((100 - props.discounts) / 100));
}

export default DiscountPercentage
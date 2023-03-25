import React from "react";

function DiscountPercentage(props) {
  return Math.round(props.actualprice * ((100 - props.discount) / 100));
}

export default DiscountPercentage
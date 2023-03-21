import React from "react";
import './MyDiv.css'

function MyDiv(props) {
  const { title, subtitle } = props;

  return (
    <div className="MyDiv">
      <div>Title: {title}</div>
      <div>Subtitle: {subtitle}</div>
    </div>
  );
}

export default MyDiv;

import React from "react";

const arr = ["Label 0", "Label 1", "Label 2", "Label 3", "Label 4"];

function Map() {
  return (
    <div>
      {arr.map(function (item) {
        return <h1>{item}</h1>;
      })}
    </div>
  );
}

export default Map;

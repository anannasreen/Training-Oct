import React from "react";

function JustInfo(props) {
  const { showLabel, testValue } = props;

  return (
    <div>
      JUST INFO {showLabel} {testValue.activeState}
    </div>
  );
}

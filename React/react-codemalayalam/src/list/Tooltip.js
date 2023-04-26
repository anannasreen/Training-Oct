import React from "react";

function Tooltip(props, ref) {
  const {
    showTooltip,
    message = `This is ${props.isactive ? "Active" : "Non Active"} tooltip`,
  } = props;

  if (!showTooltip) {
    return null;
  }

  const myTest = () => {
    // console.log("HELLO Im in MyTest");
  };

  return (
    <label className="tooltip" ref={ref}>
      {message}
    </label>
  );
}

export default React.forwardRef(Tooltip);

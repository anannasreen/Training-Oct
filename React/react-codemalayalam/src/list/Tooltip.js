import React from "react";

// const Tooltip = React.forwardRef(function (props, ref) {
//   const { showTooltip } = props;

//   return (
//     <label
//       ref={ref}
//       className={`tooltip ${showTooltip ? "show-tooltip" : "hide-tooltip"}`}
//     >
//       this is {props.isActive ? "Active" : "Non Active"} tooltip
//     </label>
//   );
// });

// export default Tooltip;

function Tooltip(props, ref) {
  const { showTooltip, message } = props;

  if (!showTooltip) {
    return null;
  }

  // const myTest = () => {
  //   console.log("Hello I am in MyTest");
  // };

  // useImperativeHandle(ref, () => {
  //   return {
  //     myTest: () => {
  //       console.log("HELLO Im in MyTest");
  //     },
  //   };
  // });

  return (
    <label
      className="tooltip"
      ref={ref}
      // className={`tooltip ${showTooltip ? "show-tooltip" : "hide-tooltip"}`}
    >
      {/* This is {props.isActive ? "Active" : "Non Active"} tooltip */}
      {message}
    </label>
  );
}

export default React.forwardRef(Tooltip);

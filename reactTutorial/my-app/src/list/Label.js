import React, { useContext } from "react";
import "./label.css";
import { MyContext } from "../pages/HomePage";
import Tooltip from "./Tooltip";
import { useTooltip } from "../hooks/ourHooks";
// import { useSelector } from "react-redux";

function Label(props) {
  const [showTooltip, setShowTooltip, labelRef, refObj] = useTooltip();
  const val = useSelector((state) => state.showLabel);
  const style = props.isActive
    ? { background: "green" }
    : { background: "orange" };
  if (val === false) {
    return null;
  }

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const text = props.isActive ? "Active" : "Non Active";

  return (
    <div className="list-label-item-container">
      <span
        ref={labelRef}
        onClick={() => {
          props.onAction(props.isActive ? "active" : "non-active");
        }}
        className="list-label-item"
        style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </span>
      <Tooltip
        ref={refObj}
        showTooltip={showTooltip}
        message={`This is ${text}`}
      />
    </div>
  );
}

//   return (
//     <div className="list-label-item-container0">
//       <span
//         onClick={() => {
//           props.onAction(props.isActive ? "active" : "non-active");
//         }}
//         className="list-label-item"
//         style={style}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         {props.isActive ? "Active" : "Non Active"} tooltip
//       </span>
//       <label
//         ref={refObj}
//         className={`tooltip${showTooltip ? "show-tooltip" : "hide-tooltip"}`}
//       >
//         This is {props.isActive ? "Active" : "Non Active"} tooltip
//       </label>
//     </div>
//   );
// }

export default Label;
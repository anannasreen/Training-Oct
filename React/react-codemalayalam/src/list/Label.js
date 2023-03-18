import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import "./Label.css";
import { MyContext } from "../pages/HomePage";
import Tooltip from "./Tooltip";
import { useTooltip } from "../hooks/ourHooks";

// function Label() {
//   return <span>Label B</span>;
// }

// class Label extends React.Component {
//   render() {
//     const props = this.props;
//     const style = props.isActive
//       ? { background: "green" }
//       : { background: "orange" };

//     return (
//       <span
//         onClick={() => {
//           props.onAction(props.isActive ? "active" : "non-active");
//           // console.log("clicked");
//         }}
//         className="list-label-item"
//         style={style}
//       >
//         {props.isActive ? "Active" : "Non Active"}
//       </span>
//     );
//   }
// }

function Label(props) {
  const val = useContext(MyContext);
  // const val2 = useContext(MyNewContext);

  const [showTooltip, setShowTooltip, labelRef, refObj] = useTooltip();

  // const [showToolTip, setShowToolTip] = useState(false);

  // const labelRef = useRef();
  // const refObj = useRef();

  // useLayoutEffect(() => {
  //   if (showToolTip) {
  //     console.log(labelRef.current);
  //     const width1 = labelRef.current.getBoundingClientRect().width1;
  //     const width2 = labelRef.current.getBoundingClientRect().width;

  //     labelRef.current.style.left = `${-(width2 - width1) / 2}px`;
  //   }
  // });

  // console.log(val2);

  const style = props.isActive
    ? { background: "green" }
    : { background: "orange" };

  if (val === false) {
    return null;
  }

  const handleMouseEnter = () => {
    // console.log(evt.target)
    // console.log(refObj.current)

    // const width1 = evt.target.getBoundingClientRect().width;
    // const width2 = refObj.current.getBoundingClientRect().width;

    // refObj.current.style.left = `${-(width2 - width1) / 2}px`;

    // console.log(refObj.current.myTest());

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
          props.onAction(props.isActive ? "active" : "non active");
        }}
        className="list-label-item"
        style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {props.isActive ? "Active" : "Non Active"}
      </span>

      <Tooltip
        ref={refObj}
        showToolTip={showTooltip}
        message={`This is ${text}`}
      />

      {/* <label
        ref={refObj}
        className={`tooltip ${showToolTip ? "show-tooltip" : "hide-tooltip"}`}
      >
        This is {props.isActive ? "Active" : "Non Active"} tooltip
      </label> */}
    </div>
  );
}

export default Label;

import "./label.css";
import { MyContext } from "../pages/mycontexts";
import { useContext, useState } from "react";

function Label(props) {
  const val = useContext(MyContext);
  const [showTooltip, setShowTooltip] = useState(false);

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

  return (
    <div className="list-label-item-container0">
      <span
        onClick={() => {
          props.onAction(props.isActive ? "active" : "non-active");
        }}
        className="list-label-item"
        style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {props.isActive ? "Active" : "Non Active"} tooltip
      </span>
    </div>
  );
}

export default Label;

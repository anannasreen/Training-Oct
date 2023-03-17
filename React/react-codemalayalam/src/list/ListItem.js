import React from "react";
import Label from "./Label";
import "./ListItem.css";

function ListItem(props) {
  // console.log(props);

  const { title, descr, isActive, onDelete, onLabelClick } = props;

  return (
    <div className="list-item">
      <div className="list-title">
        <h4>{title}</h4>
        <label onClick={onDelete}>Delete</label>
      </div>

      <div className="list-decr">{descr}</div>

      <div className="list-label">
        <Label
          // onAction={() => {
          //   console.log("Parent Clicked");
          // }}
          isActive={isActive}
          onAction={onLabelClick}
        />
        {/* <Label />
        <Label />
        <Label /> */}

        {/* <span>Label 1</span>
        <span>Label 2</span>
        <span>Label 3</span> */}
      </div>
    </div>
  );
}

export default ListItem;

import React from "react";
import Label2 from "./Label";
import "./ListItem.css";
// import { useTooltip } from '../hooks/ourHooks';
// import Tooltip from './Tooltip';

function ListItem({ title, descr, isActive, onDelete, onLabelClick }) {
  //   const { title, descr, isActive, onDelete, onLabelClick } = props;

  const [showTooltip, setShowTooltip, labelRef, refObj] = useTooltip();

  useEffect(() => {});

  return (
    <div className="list-item">
      <div className="list-title">
        <h4>{title}</h4>
        <label
          onClick={onDelete}
          ref={labelRef}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          Delete
          <Tooltip
            ref={refObj}
            showTooltip={showTooltip}
            message="Delete this"
          />
        </label>
      </div>
      <div className="list-descr">{descr}</div>
      <div className="list-label">
        <Label2 isActive={isActive} onAction={onLabelClick} />
      </div>
    </div>
  );
}

export default ListItem;

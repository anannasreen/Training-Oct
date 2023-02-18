import React, { useEffect } from 'react';
// import Label2 from './Label2';
import LabelCopy from './LabelCopy';
import './ListItem.css';
import { useTooltip } from '../hooks/ourHooks';
import Tooltip from './Tooltip';

function ListItem(props) {
console.log('RENDER LIST ITEM')
  const {
    title,
    descr,
    isActive,
    onDelete,
    onLabelClick
  } = props;

  const [showTooltip, setShowTooltip, labelRef, refObj] = useTooltip();
  
  useEffect(()=>{
    // console.log("Hello" + title);
  });
  
  return (
    <div className="list-item">

      <div className="list-title">
        <h4>{title}</h4>
        <label 
        onClick={onDelete}
        ref={labelRef}
        onMouseEnter={()=>setShowTooltip(true)}
        onMouseLeave={()=>setShowTooltip(false)}
        >Delete
        <Tooltip ref={refObj} showTooltip={showTooltip} message="Delete This"/>
        </label>
      </div>
      <div className="list-descr">
        {descr}
      </div>
      <div className="list-label">
        <LabelCopy isActive={isActive} onAction={onLabelClick}/>
      </div>

    </div>
  );
}

export default ListItem;

// const myFun = ()=>{
//   return 'test' + title
// }
// console.log(props)
/* <Label onAction={()=>{
    console.log('Parent Clicked')
}} isActive={isActive}/> */
/* <Label />
<Label /> */

/* <span>Label 1</span>
<span>Label 2</span>
<span>Label 3</span> */ 
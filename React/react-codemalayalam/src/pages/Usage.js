import React, { useReducer } from "react";
import "./Usage.css";
import { useDispatch, useSelector } from "react-redux";

// import usageReducer, { TYPE } from "../reducers/usageReducers";

// const initialState = {
//   value: 0,
// };

function Usage() {
  // const [state, dispatch] = useReducer(usageReducer, initialState);

  const value = useSelector((state) => {
    return state.value;
  });

  // console.log(value);

  const dispatch = useDispatch();

  return (
    <div className="usage">
      <div className="usage-item">
        {/* <div className="usage-item" style={{ background: state.color }}> */}
        <button
          onClick={() => {
            dispatch({
              type: "increment",
            });

            // dispatch({
            //   type: TYPE.CHANGE_VALUE,
            //   payload: 1,
            // });
          }}
        >
          Increment
        </button>

        {/* <label>{state.value}</label> */}

        <label>{value}</label>

        <button
          onClick={() => {
            dispatch({
              type: "decrement",
            });
            // dispatch({
            //   type: TYPE.CHANGE_VALUE,
            //   payload: -1,
            // });
          }}
        >
          Decrement
        </button>
      </div>
      <button
        onClick={() => {
          // dispatch({
          //   type: TYPE.CHANGE_COLOR,
          //   payload: "green",
          // });
        }}
      >
        Green
      </button>
      <button
        onClick={() => {
          // dispatch({
          //   type: TYPE.CHANGE_COLOR,
          //   payload: "orange",
          // });
        }}
      >
        Orange
      </button>
    </div>
  );
}

export default Usage;

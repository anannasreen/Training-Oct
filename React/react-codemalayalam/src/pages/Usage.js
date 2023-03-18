import React, { useReducer } from "react";
import "./Usage.css";
import usageReducer, { TYPE } from "../reducers/usageReducers";

const initialState = {
  value: 0,
};

function Usage() {
  const [state, dispatch] = useReducer(usageReducer, initialState);

  return (
    <div className="usage">
      <div className="usage-item" style={{ background: state.color }}>
        <button
          onClick={() => {
            dispatch({
              type: TYPE.CHANGE_VALUE,
              payload: 1,
            });
          }}
        >
          Increment
        </button>
        <label>{state.value}</label>
        <button
          onClick={() => {
            dispatch({
              type: TYPE.CHANGE_VALUE,
              payload: -1,
            });
          }}
        >
          Decrement
        </button>
      </div>
      <button
        onClick={() => {
          dispatch({
            type: TYPE.CHANGE_COLOR,
            payload: "green",
          });
        }}
      >
        Green
      </button>
      <button
        onClick={() => {
          dispatch({
            type: TYPE.CHANGE_COLOR,
            payload: "orange",
          });
        }}
      >
        Orange
      </button>
    </div>
  );
}

export default Usage;

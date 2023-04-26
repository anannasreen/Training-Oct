import React, { useReducer } from "react";
import "./Usage.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/store";

function Usage() {
  const value = useSelector((state) => {
    return state.value;
  });

  const dispatch = useDispatch();

  return (
    <div className="usage">
      <div className="usage-item">
        <button
          onClick={() => {
            dispatch({
              type: "increment",
            });
          }}
        >
          Increment
        </button>

        <label>{value}</label>

        <button
          onClick={() => {
            dispatch({
              type: "decrement",
            });
          }}
        >
          Decrement
        </button>
      </div>
      <button onClick={() => {}}>Green</button>
      <button onClick={() => {}}>Orange</button>
    </div>
  );
}

export default Usage;

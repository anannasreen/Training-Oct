import { createStore } from "redux";

const initialState = {
  value: 0,
};

function appReducer(prevState = initialState, action) {
  //   if (prevState === undefined) {
  // return initialState;
  //   }

  switch (action.type) {
    case "increment":
      return {
        ...prevState,
        value: prevState.value + 1,
      };

    case "decrement":
      return {
        ...prevState,
        value: prevState.value - 1,
      };

    default:
      return prevState;
  }

  return prevState;
}

const store = createStore();

const state = store.getState();

store.subscribe(() => {
  // console.log(store.getState);

  document.getElementById("value").innerText = store.getState().value;
});

document.getElementById("value").innerText = state.value;

document.getElementById("increment").onclick = () => {
  //   console.log("increment");
  store.dispatch({
    type: "increment",
  });
};

document.getElementById("decrement").onclick = () => {
  //   console.log("decrement");
  store.dispatch({
    type: "decrement",
  });
};

// console.log(state);

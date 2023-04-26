import { combineReducers, createStore } from "redux";

// const initialState = {
//   value: 0,
//   showLabel: true,
// };

const appReducer = combineReducers({
  value: valueReducer,
  showLabel: showLabelReducer,
});

// function appReducer(prevState = initialState, action) {
//   return {
//     value: valueReducer(prevState.value, action),
//     showLabel: showLabelReducer(prevState.showLabel, action),
//   };

// switch (action.type) {
//   case "increment":
//     return {
//       ...prevState,
//       value: prevState.value + 1,
//     };
//   case "decrement":
//     return {
//       ...prevState,
//       value: prevState.value - 1,
//     };
//   case "show-label":
//     return {
//       ...prevState,
//       showLabel: action.payload,
//     };
//   default:
//     return prevState;
// }
// }

function valueReducer(prevState = 0, action) {
  switch (action.type) {
    case "increment":
      return prevState + 1;

    case "decrement":
      return prevState - 1;

    default:
      return prevState;
  }
}

function showLabelReducer(prevState = true, action) {
  switch (action.type) {
    case "show-label":
      return action.payload;
    default:
      return prevState;
  }
}

function increment() {
  return {
    type: "increment",
  };
}

function decrement() {
  return {
    type: "decrement",
  };
}

// function setShowLabel(payload) {
// return {
// tyep: "show-label",
// payload: checkboxValue,
// };
// }

const store = createStore(appReducer);

export default store;

export { increment, decrement };
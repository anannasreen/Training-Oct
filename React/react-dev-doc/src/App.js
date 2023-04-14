import "./App.css";
import AvatarProfile from "./components/Avatar";
import Card from "./components/Card";
import Board from "./components/Game";
import Game from "./components/Game";
import FilterableProductTable from "./components/Products";
import Gallery from "./components/Profile";
import Time from "./components/Time";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      {/* <Game /> */}
      {/* <Board /> */}
      {/* <Game /> */}
      {/* <FilterableProductTable products={PRODUCTS} /> */}
      {/* <Gallery /> */}
      {/* <ToDoList /> */}
      {/* <AvatarProfile /> */}
      {/* <Card /> */}
      <Time />
    </div>
  );
}

export default App;

// const PRODUCTS = [
//   {
//     category: "Fruits",
//     price: "$1",
//     stocked: true,
//     name: "Apple",
//   },
//   {
//     category: "Fruits",
//     price: "$1",
//     stocked: true,
//     name: "Dragonfruit",
//   },
//   {
//     category: "Fruits",
//     price: "$2",
//     stocked: false,
//     name: "Passionfruit",
//   },
//   {
//     category: "Vegetables",
//     price: "$2",
//     stocked: true,
//     name: "Spinach",
//   },
//   {
//     category: "Vegetables",
//     price: "$4",
//     stocked: false,
//     name: "Pumpkin",
//   },
//   {
//     category: "Vegetables",
//     price: "$1",
//     stocked: true,
//     name: "Peas",
//   },
// ];

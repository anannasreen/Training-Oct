import "./App.css";
import MyApp from "./components/Button";
import MyAppOne from "./components/MyApp";
import MyAppTwo from "./components/MyAppTwo";
import ShoppingList from "./components/Products";
import Profile from "./components/Profile";
import Game from "./components/TicTacToe";

function App() {
  return (
    <div className="App">
      <Game />
      {/* <MyApp /> */}
      {/* <Profile /> */}
      {/* <ShoppingList /> */}
      {/* <MyAppOne /> */}
      {/* <MyAppTwo/> */}
    </div>
  );
}

export default App;

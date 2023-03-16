import "./App.css";
import Car from "./components/Car";
import ChangeColor from "./components/ChangeColor";
import Header from "./components/Color";
import Container from "./components/Container";
import Garage from "./components/Garage";
import FavColor from "./components/Header";
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Hello />
      <Car />
      <Header favcol="yellow" />
      <Garage />
      <FavColor />
      <ChangeColor />
      <Container />
    </div>
  );
}

export default App;

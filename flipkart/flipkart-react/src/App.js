import "./App.css";
import CreateCarousel from "./components/mobileview/carousel/Carousel";
import CreateHeader from "./components/mobileview/headerMobile/HeaderMobile";
import CreateList from "./components/mobileview/listMobile/ListMobile";
import CreateNavMobile from "./components/mobileview/navMobile/NavMobile";

function App() {
  return (
    <div className="App">
      <CreateHeader />
      <CreateNavMobile />
      <CreateCarousel />
      <CreateList />
    </div>
  );
}

export default App;

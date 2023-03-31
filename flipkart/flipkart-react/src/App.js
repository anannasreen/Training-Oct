import "./App.css";
import CreateCarousel from "./components/mobileview/carousel/Carousel";
import CreateHeader from "./components/mobileview/headerMobile/HeaderMobile";
import CreateList from "./components/mobileview/listMobile/ListMobile";
import CreateNavMobile from "./components/mobileview/navMobile/NavMobile";
import CreateOffersList from "./components/mobileview/offers/Offers";

function App() {
  return (
    <div className="App">
      <CreateHeader />
      <CreateNavMobile />
      <CreateCarousel />
      <CreateList />
      <CreateOffersList />
    </div>
  );
}

export default App;

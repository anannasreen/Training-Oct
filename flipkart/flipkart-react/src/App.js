import "./App.css";
import GenerateHomepageDesktop from "./components/HomePage/HomePageDesktop";
import GenerateHomepageMobile from "./components/HomePage/HomePageMobile";

function App() {
  return (
    <div className="App">
      <GenerateHomepageMobile />
      <GenerateHomepageDesktop />
    </div>
  );
}

export default App;

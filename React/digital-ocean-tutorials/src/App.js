import "./App.css";
import Product from "./components/Products";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return <div className="App">
    <h1>Application</h1>
    <BrowserRouter>
    <Switch>
      <Route path="/dashboard">
        
      </Route>
    </Switch>
    </BrowserRouter>
  </div>;
}

export default App;

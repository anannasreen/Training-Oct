import React from "react";
import "./Apps.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Preferences from "../Preferences/Preferences";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import useToken from "./useToken";

// function setToken(userToken) {
//   sessionStorage.setItem("token", JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem("token");
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token;
// }

function Apps() {
  // const token = getToken();
  // const [token, setToken] = useState();

  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <h1 className="text-red">Applications</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Apps;

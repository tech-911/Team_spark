import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./Components/Header/header.components";
import Error from "./Pages/404/error_pages";


function App() {
  return (
    <div>
    <Header/>
      <Switch>
        <Route exact path="/404" component={Error} />

        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;

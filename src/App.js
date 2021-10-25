import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import Header from "./Components/Header/header.components";
import Error from "./Pages/404/error_pages";
import Homepage from "./Pages/HomePage/homepage.components";
import Signup from "./Pages/signin_signUp_Page/signup.page";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/404" component={Error} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;

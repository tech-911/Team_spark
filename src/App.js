import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import Header from "./Components/Header/header.components";
import Error from "./Pages/404/error_pages";
import CatalogueList from "./Pages/catalogue-list/catalogue-list";
import Catalogue from "./Pages/catalogue/first-lodge";
import Forth from "./Pages/catalogue/forth-lodge";
import Second from "./Pages/catalogue/second-lodge";
import Fift from "./Pages/catalogue/fifth-lodge";
import Sixth from "./Pages/catalogue/sixth-lodge";
import Seventh from "./Pages/catalogue/seventh-lodge";
import Third from "./Pages/catalogue/third-lodge";
import GoogleThird from "./Pages/google/google-decamp";
import GoogleForth from "./Pages/google/google-forth";
import GoogleSecond from "./Pages/google/google-greenlodge";
import GoogleFifth from "./Pages/google/google-asglodge";
import GoogleSixth from "./Pages/google/google-salvation";
import GoogleSeventh from "./Pages/google/google-horizon";
import Google from "./Pages/google/google.components";
import Homepage from "./Pages/HomePage/homepage.components";
import Signup from "./Pages/signin_signUp_Page/signup.page";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/404" component={Error} />
        <Route exact path="/catalogue" component={Catalogue} />
        <Route exact path="/second" component={Second} />
        <Route exact path="/third" component={Third} />
        <Route exact path="/forth" component={Forth} />
        <Route exact path="/fifth" component={Fift} />
        <Route exact path="/sixth" component={Sixth} />
        <Route exact path="/seventh" component={Seventh} />
        <Route exact path="/catList" component={CatalogueList} />
        
        <Route exact path="/Google" component={Google} />
        <Route exact path="/GoogleSecond" component={GoogleSecond} />
        <Route exact path="/GoogleThird" component={GoogleThird} />
        <Route exact path="/GoogleForth" component={GoogleForth} />
        <Route exact path="/GoogleFifth" component={GoogleFifth} />
        <Route exact path="/GoogleSixth" component={GoogleSixth} />
        <Route exact path="/GoogleSeventh" component={GoogleSeventh} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import DashboardNav from "./components/DashboardNav";
import HomeContainer from "./components/HomeContainer";
import Hotels from "./components/Hotels";
import Notifications from "./components/Notification";
import Payments from "./components/Payments";
import HotelSearch from "./components/HotelSearch";
const App = () => {
  return (
    <>
      <Router>
        <div className="container">
          <Nav />
          <section className="wMax1000 panel flex-one pl12em pr12em">
            <DashboardNav />
            <Route exact path="/">
              <HomeContainer />
            </Route>
            <Switch>
              <Route exact path="/hotels">
                <Hotels />
              </Route>
              <Route exact path="/notifications">
                <Notifications />
              </Route>
              <Route exact path="/payments">
                <Payments />
              </Route>
              <Route exact path="/search">
                <HotelSearch />
              </Route>
            </Switch>
          </section>
        </div>
      </Router>
    </>
  );
};

export default App;

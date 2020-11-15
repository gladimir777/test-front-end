import React from "react";
import Nav from "./components/Nav";
import DashboardNav from "./components/DashboardNav";
import WelcomeCard from "./components/WelcomeCard";
import HomeNav from "./components/HomeNav";
import Hotels from "./components/Hotels";
import Notification from "./components/Notification";

const App = () => {
  return (
    <>
      <div className="container">
        <Nav />
        <section className="wMax1000 panel flex-one pl12em pr12em">
          <DashboardNav />
          <div className="containerCenter">
            <div className="row flex-dir-c">
              <WelcomeCard />
              <HomeNav />
              <Hotels />
            </div>
            <Notification />
          </div>
        </section>
      </div>
    </>
  );
};

export default App;

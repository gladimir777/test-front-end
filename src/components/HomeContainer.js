import React from "react";
import WelcomeCard from "./WelcomeCard";
import HomeNav from "./HomeNav";
import Hotels from "./Hotels";
import Notification from "./Notifications";

const HomeContainer = () => {
  return (
    <>
      <div className="containerCenter">
        <div className="row flex-dir-c">
          <WelcomeCard />
          <HomeNav />
          <Hotels />
        </div>
        <Notification />
      </div>
    </>
  );
};

export default HomeContainer;

import React from "react";

const DashboardNav = () => {
  return (
    <>
      <div className="cardTop bcWhite flex-display flex-dir-r flexa-jcsb">
        <div>
          <h2>Dashboard</h2>
        </div>
        <div>
          <a className="mr2em" href="#">
            <ion-icon className="icoGray" name="search-outline"></ion-icon>
          </a>
          <a className="mr2em" href="#">
            <ion-icon className="icoGray" name="mail-unread-outline"></ion-icon>
          </a>
          <a className="mr2em" href="#">
            <ion-icon className="icoGray" name="settings-outline"></ion-icon>
          </a>
        </div>
      </div>
    </>
  );
};

export default DashboardNav;

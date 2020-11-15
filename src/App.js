import React from "react";
import Nav from "./components/Nav";
import DashboardNav from "./components/DashboardNav";
import WelcomeCard from "./components/WelcomeCard";
import HomeNav from "./components/HomeNav";
import Hotels from "./components/Hotels";

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

            <div className="sectionRight mb10">
              <h2 className="ml10px textsize-1 fs-sbold cBlack">
                Notificaciones
              </h2>
              <div className="notification mb30 mt10">
                <div className="notif-left flex-display flexa-jcsb">
                  {/* <ion-icon className="icoGray" name="mail-open-outline"></ion-icon> */}
                  <h4 className="textsize-3">02 abril</h4>
                </div>
                <div className="notif-right">
                  <h4 className="mt4 textsize-2 fs-regular cBlue">
                    Miguel Ruiz
                  </h4>
                  <p className="mt4 textsize-3 cGray">
                    It is a long established fact that a reader will
                  </p>
                </div>
              </div>
              <div className="notification mb30">
                <div className="notif-left flex-display flexa-jcsb">
                  {/* <ion-icon className="icoGray" name="mail-open-outline"></ion-icon> */}
                  <h4 className="textsize-3">02 abril</h4>
                </div>
                <div className="notif-right">
                  <h4 className="mt4 textsize-2 fs-regular cBlue">
                    Miguel Ruiz
                  </h4>
                  <p className="mt4 textsize-3 cGray">
                    It is a long established fact that a reader will
                  </p>
                </div>
              </div>
              <div className="notification mb30">
                <div className="notif-left flex-display flexa-jcsb">
                  {/* <ion-icon className="icoGray" name="mail-open-outline"></ion-icon> */}
                  <h4 className="textsize-3">02 abril</h4>
                </div>
                <div className="notif-right">
                  <h4 className="mt4 textsize-2 fs-regular cBlue">
                    Miguel Ruiz
                  </h4>
                  <p className="mt4 textsize-3 cGray">
                    It is a long established fact that a reader will
                  </p>
                </div>
              </div>
              <div className="notification mb30">
                <div className="notif-left flex-display flexa-jcsb">
                  {/* <ion-icon className="icoGray" name="mail-open-outline"></ion-icon> */}
                  <h4 className="textsize-3">02 abril</h4>
                </div>
                <div className="notif-right">
                  <h4 className="mt4 textsize-2 fs-regular cBlue">
                    Miguel Ruiz
                  </h4>
                  <p className="mt4 textsize-3 cGray">
                    It is a long established fact that a reader will
                  </p>
                </div>
              </div>
              <div className="notification mb30">
                <div className="notif-left flex-display flexa-jcsb">
                  {/* <ion-icon className="icoGray" name="mail-open-outline"></ion-icon> */}
                  <h4 className="textsize-3">02 abril</h4>
                </div>
                <div className="notif-right">
                  <h4 className="mt4 textsize-2 fs-regular cBlue">
                    Miguel Ruiz
                  </h4>
                  <p className="mt4 textsize-3 cGray">
                    It is a long established fact that a reader will
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;

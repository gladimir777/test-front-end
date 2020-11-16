import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getHotels } from "../redux/action/hotels";

const Hotels = ({ getHotels, hotels }) => {
  useEffect(() => {
    getHotels();
  }, []);

  console.log("HHHHHHHH", hotels);
  return (
    <>
      <h2 className="ml10px mt10 textsize-1 fs-sbold cBlack">
        Hoteles Disponibles
      </h2>

      <div className="row flex-dir-r w96Porc flex-wrap ">
        <div>
          <img
            src={hotels.hotels[0].imgUrl}
            alt=""
            srcset=""
            className="card row flex-dir-c flexa-jcsb flexa-ai p10 img imghotel-1 wMin150 hMin150 m2px mt10 bcWhite"
          />
          <h2 className="textsize-1 fs-sbold cWhite">WANHARA HOTEL</h2>
          <a href="#" className="btn bcPurple">
            Reservar
          </a>
        </div>

        <div className="card row flex-dir-c flexa-jcsb flexa-ai p10 img imghotel-2 wMin150 hMin150 m2px mt10 bcWhite">
          <h2 className="textsize-1 fs-sbold cWhite">WANHARA HOTEL</h2>
          <a href="#" className="btn bcPurple">
            Reservar
          </a>
        </div>
        <div className="card row flex-dir-c flexa-jcsb flexa-ai p10 img imghotel-3 wMin150 hMin150 m2px mt10 bcWhite">
          <h2 className="textsize-1 fs-sbold cWhite">WANHARA HOTEL</h2>
          <a href="#" className="btn bcPurple">
            Reservar
          </a>
        </div>
        <div className="card row flex-dir-c flexa-jcsb flexa-ai p10 img imghotel-4 wMin150 hMin150 m2px mt10 bcWhite">
          <h2 className="textsize-1 fs-sbold cWhite">WANHARA HOTEL</h2>
          <a href="#" className="btn bcPurple">
            Reservar
          </a>
        </div>

        <div className="card row flex-dir-c flexa-jcsb flexa-ai p10 img imghotel-5 wMin150 hMin150 m2px mt10 bcWhite">
          <h2 className="textsize-1 fs-sbold cWhite">WANHARA HOTEL</h2>
          <a href="#" className="btn bcPurple">
            Reservar
          </a>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  hotels: state.hotels,
});
export default connect(mapStateToProps, { getHotels })(Hotels);

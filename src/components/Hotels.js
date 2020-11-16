import React, { useEffect } from "react";
import { connect } from "react-redux";
import Hotel from "./Hotel";
import { getHotels } from "../redux/action/hotels";

const Hotels = ({ getHotels, hotels }) => {
  useEffect(() => {
    getHotels();
  }, []);

  const hotel = hotels.hotels.map((h) => <Hotel hotel={h} key={h.id} />);
  return (
    <>
      <h2 className="ml10px mt10 textsize-1 fs-sbold cBlack">
        Hoteles Disponibles
      </h2>

      <div className="row flex-dir-r w96Porc flex-wrap ">{hotel}</div>
    </>
  );
};
const mapStateToProps = (state) => ({
  hotels: state.hotels,
});
export default connect(mapStateToProps, { getHotels })(Hotels);

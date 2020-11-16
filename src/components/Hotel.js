import React from "react";

const Hotel = ({ hotel: { imgUrl, name } }) => {
  console.log("name", name);
  return (
    <>
      <div
        className="card row flex-dir-c flexa-jcsb flexa-ai p10 img imghotel-2 wMin150 hMin150 m2px mt10 bcWhite"
        style={{
          backgroundImage: "url(" + imgUrl + ")",
          backgroundSize: "cover",
        }}>
        <h2 className="textsize-1 fs-sbold cWhite">{name}</h2>
        <a href="#" className="btn bcPurple">
          Reservar
        </a>
      </div>
    </>
  );
};

export default Hotel;

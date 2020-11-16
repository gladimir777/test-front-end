import React from "react";
import moment from "moment";

const Payment = ({ payment: { Payments, date, price } }) => {
  const d = moment(date).format("DD-MM-YYYY");
  return (
    <div style={{ backgroundColor: "white", margin: 20, padding: 30 }}>
      <div>
        <span>Tipo pago</span>: <span>{Payments}</span>
      </div>
      <div>
        <span>Precio</span>: <span>{price}</span>
      </div>
      <div>
        <span>Fecha</span>: <span>{d}</span>
      </div>
    </div>
  );
};

export default Payment;

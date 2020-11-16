import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPayments } from "../redux/action/payments";
import Payment from "./Payment";

const Payments = ({ getPayments, payments }) => {
  useEffect(() => {
    getPayments();
  }, []);

  const payment = payments.payments.map((p, i) => (
    <Payment key={i} payment={p} />
  ));
  return (
    <div>
      <h1 style={{ marginTop: 10, marginLeft: 15, fontSize: "1.5rem" }}>
        Pagos
      </h1>
      {payment}
    </div>
  );
};
const mapStateToProps = (state) => ({
  payments: state.payments,
});
export default connect(mapStateToProps, { getPayments })(Payments);

import React, { useEffect } from "react";
import { getPayments } from "../redux/action/payments";

const Payments = ({ getPayments, payments }) => {
  useEffect(() => {
    getPayments();
  }, []);

  console.log("Payments", payments);
  return (
    <div>
      <h1>Payments</h1>
    </div>
  );
};
const mapStateToProps = (state) => ({
  payments: state.payments,
});
export default connect(mapStateToProps, { getPayments })(Payments);

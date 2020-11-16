import React from "react";
import moment from "moment";

const Notification = ({
  notification: {
    content,
    date,
    fromUser: { name },
  },
}) => {
  const d = moment(date, "YYYY-MM-DD").daysInMonth();
  const m = moment(date).subtract(1, "month").format("MMMM", "es");

  return (
    <>
      <div className="notification mb30 mt10">
        <div className="notif-left flex-display flexa-jcsb">
          {/* <ion-icon className="icoGray" name="mail-open-outline"></ion-icon> */}
          <h4 className="textsize-3">
            {d} {m}
          </h4>
        </div>
        <div className="notif-right">
          <h4 className="mt4 textsize-2 fs-regular cBlue">{name}</h4>
          <p className="mt4 textsize-3 cGray">{content}</p>
        </div>
      </div>
    </>
  );
};

export default Notification;

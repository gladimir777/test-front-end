import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNotifications } from "../redux/action/notification";
import Notification from "./Notification";

const Notifications = ({ getNotifications, notifications }) => {
  useEffect(() => {
    getNotifications();
  }, []);

  console.log("Notifications", notifications.notifications);
  const notification = notifications.notifications.map((n) => (
    <Notification key={n.id} notification={n} />
  ));
  return (
    <>
      <div className="sectionRight mb10">
        <h2 className="ml10px textsize-1 fs-sbold cBlack">Notificaciones</h2>
        {notification}
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  notifications: state.notifications,
});

export default connect(mapStateToProps, { getNotifications })(Notifications);

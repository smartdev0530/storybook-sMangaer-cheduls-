import React from "react";
import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import { Status } from "./constant";
import { ReactComponent as MenuIcon } from "../../assets/icons/icon/MenuVertical.svg";
import Icons from "../Icons";
import "./styles.scss";
function AppointmentCard({ status, time, patientName, procedure, doctorName }) {
  let val;
  time === "30"
    ? (val = 24)
    : time === "60"
    ? (val = 52)
    : time === "90"
    ? (val = 82)
    : time === "120"
    ? (val = 112)
    : (val = 0);
  let val3 = Math.floor(time / 60) + "." + (time - Math.floor(time / 60) * 60);
  return (
    <div className="card2">
      {Status.map((element, index) => (
        <div key={index}>
          {status === element.status && val > 0 ? (
            <div className={`container1 ${element.status}`} style={{ height: val + "px", width: "212px" }}>
              <div className={`arrow-left ${element.color}`}></div>
              <div
                className={`patientName 
                                            ${
                                              time === "30"
                                                ? "thirty "
                                                : time === "60"
                                                ? "sixty"
                                                : "moreThanSixty"
                                            }`}
              >
                <Typography text={patientName} size="regular12" />
              </div>
              {time <= 60 ? (
                <div className={`vertical-line ${time === "30" ? "thirty " : "sixty"}`}>|</div>
              ) : (
                ""
              )}
              <div
                className={`procedure  
                                            ${element.status} 
                                            ${
                                              time === "30"
                                                ? "thirty left"
                                                : time === "60"
                                                ? "sixty left"
                                                : "moreThanSixty"
                                            }
                                            `}
              >
                <Typography text={procedure} size="regular10" />
              </div>
              <div className="menu">
                <Icons className="menu" icon={<MenuIcon />} size={"medium"} hover={false} />
              </div>
              {time >= 60 ? (
                <div>
                  <div className="doctor">
                    <Typography text={doctorName} size="regular10" />
                  </div>
                  <div className="time">
                    <Typography text={val3 + " " + (time <= 60 ? "hr" : "hrs")} size="regular10" />
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
AppointmentCard.propTypes = {
  status: PropTypes.string,
  patientName: PropTypes.string,
  procedure: PropTypes.string,
  doctorName: PropTypes.string,
  time: PropTypes.string,
};

export default AppointmentCard;

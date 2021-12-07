import React from "react";
import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import AppointmentDetailTimes from "../AppointmentDetailTimes/AppointmentDetailTimes";
import ActionIcon from "../ActionIcon/ActionIcon";
import { ReactComponent as CloseIcon } from "../../assets/icons/icon/Close.svg";
import { ReactComponent as RadioIcon } from "../../assets/icons/icon/Radio.svg";
import { ReactComponent as CircleOkIcon } from "../../assets/icons/icon/CircleOk.svg";
import { DropDown } from "../AppointmentDetail/AppointmentDetail";
import Chip from "../Chip/Chip";
import Icons from "../Icons";
import "../AppointmentDetail/styles.scss";
import "./styles.scss";

const appointments = [
  { date: "April 26, 2021", items: ["#8 MIFL-C2(P)", "#10 RCT", "#5 MO-C3(P)"] },
  { date: "March 20, 2021", items: ["#3 PFM", "#3 BU", "Pro"] },
  { date: "February 5, 2021", items: ["LL-SRP", "UL-SRP", "#10 RCT", "Pano"] },
  { date: "December 14, 2020", items: ["CompEx", "4BW", "1PA", "Pano", "1PA+"] },
  { date: "December 14, 2020", items: ["AAA", "BBB", "CCC"] },
  { date: "December 1, 2020", items: ["DDAS", "DDB", "ASC"] },
];
function Appointments({ open = true, status = "Enabled", handleClick }) {
  const content = (
    <div className="appointment-detail-wrapper">
      {appointments.map((appointment, index) => (
        <div className="appointment-detail-item">
          {index === 0 ? (
            <div className="appoints-date">
              <Icons icon={<RadioIcon className="icon" />} size={"medium"} hover={false} />
              <AppointmentDetailTimes
                date={appointment.date}
                handleEditClick={() => {}}
                handleDeleteClick={() => {}}
              />
            </div>
          ) : (
            <div className="appoints-date">
              <Icons icon={<CircleOkIcon className="icon" />} size={"medium"} hover={false} />
              <Typography text={appointment.date} size="regular12" color="font-black" />
            </div>
          )}
          <div className="appoints-date-item-wrapper">
            <div className="appoint-detail-item-content">
              {appointment.items.map((item) => (
                <div className="subject-item">
                  <Chip label={item} handleClick={() => {}} icon={index === 0 ? CloseIcon : null} />
                </div>
              ))}
              {index === 0 && (
                <div className="subject-item">
                  <ActionIcon handleClick={() => {}} />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <DropDown
      label="Appointments(16)"
      status={status}
      open={open}
      component={content}
      handleClick={handleClick}
    />
  );
}

Appointments.propTypes = {
  open: PropTypes.bool,
  status: PropTypes.oneOf(["Enabled", "Error", "Disabled", "Verified"]),
  handleClick: PropTypes.func,
};

export default Appointments;

import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import Icons from "../Icons";
import "./styles.scss";

export const STATUS_CONFIRMED = 'Patient Confirmed';
export const STATUS_COMPLETE = 'Appointment Complete';
export const STATUS_ONGOING = 'Ongoing Appointment';
export const STATUS_ARRIVED = 'Patient Arrived';
export const STATUS_UNCONFIRMED = 'Patient Unconfirmed';
export const STATUS_SENT = 'Remainder to be Sent';

function AppointmentDetailStatusToast({ icon: Icon = null, label = null, status = STATUS_CONFIRMED, active = true, handleClick }) {
  const color = 
    status === STATUS_CONFIRMED ? 'green' :
    status === STATUS_COMPLETE ? 'grey-light' :
    status === STATUS_ONGOING ? 'orange' :
    status === STATUS_ARRIVED ? 'yellow' :
    status === STATUS_UNCONFIRMED ? 'red' :
    status === STATUS_SENT ? 'blue' : ''

  return (
    <div
      onClick={handleClick}
      className={`detail-status ${active ? 'active' : ''}`}
    >
      {Icon !== null 
        ? <Icons icon={<Icon className="icon" />} size={"small"} hover={false} /> 
        : <div className={`status-icon ${color}`}/>}
      <Typography text={label ? label : STATUS_CONFIRMED} size="regular12" color="font-black" />
    </div>
  );
}

AppointmentDetailStatusToast.propTypes = {
  icon: PropTypes.element,
  status: PropTypes.oneOf([
    STATUS_CONFIRMED, 
    STATUS_COMPLETE, 
    STATUS_ONGOING, 
    STATUS_ARRIVED, 
    STATUS_UNCONFIRMED, 
    STATUS_SENT
  ]),
  handleClick: PropTypes.func,
};

export default AppointmentDetailStatusToast;

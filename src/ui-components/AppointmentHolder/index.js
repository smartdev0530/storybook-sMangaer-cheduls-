import React from "react";
import Typography from "../Typography/Typography";
import PropTypes from "prop-types";
import { ReactComponent as Cross } from "../../assets/icons/icon/Multiply.svg";
import Icons from "../Icons";
import "./styles.scss";
function HolderCard({ name, time, handleClick }) {
  return (
    <div className="holderCard">
      <div className="container2">
        <div className="names">
          <Typography text={name} size="regular12" />
        </div>
        <div onClick={handleClick}>
          <Icons className="cross1" icon={<Cross />} size={"medium"} hover={false} />
        </div>
        {time > 0 ? (
          <div className="time2">
            <Typography text={time + " " + (time > 1 ? "hours" : "hour")} size="regular10" />
          </div>
        ) : null}
      </div>
    </div>
  );
}
HolderCard.propTypes = {
  name: PropTypes.string,
  time: PropTypes.string,
  handleClick: PropTypes.func,
};
export default HolderCard;

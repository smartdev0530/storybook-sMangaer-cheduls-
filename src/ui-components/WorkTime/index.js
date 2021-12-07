import React from "react";
import Typography from "../Typography/Typography";
import PropTypes from "prop-types";
import "./styles.scss";

function WorkTime({ time, lable }) {
  return (
    <div className="workTime">
      <div className="timeValue">
        <Typography text={time} size="semibold16" />
      </div>
      <div className="lableValue">
        <Typography text={lable} size="regular12" />
      </div>
    </div>
  );
}
WorkTime.propTypes = {
  lable: PropTypes.string,
  time: PropTypes.string,
};
export default WorkTime;

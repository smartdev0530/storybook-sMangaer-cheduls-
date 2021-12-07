import React from "react";
import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import { ReactComponent as MenuIcon } from "../../assets/icons/icon/MenuVertical.svg";
import { ReactComponent as Clock } from "../../assets/icons/icon/Clock.svg";
import { ReactComponent as ProfilePic } from "../../assets/icons/noneIcon/profilepic.svg";
import { ReactComponent as TickMark } from "../../assets/icons/icon/Checkmark.svg";
import { ReactComponent as Cross } from "../../assets/icons/icon/CancelGreen.svg";
import Icons from "../Icons";
import "./styles.scss";

function TaskCard({ role, task, date, handleClick }) {
  return (
    <div className="taskCard">
      <div className="container1">
        <div className={`arrow-left ${role}`} />
        <div className="task">
          <Typography text={task} size="regular12" />
        </div>
        <div onClick={handleClick}>
          <Icons className="menu1" icon={<MenuIcon />} size={"medium"} hover={false} />
        </div>
        <div className="time1">
          <div>
            <Icons className="clock" icon={<Clock />} size={"small"} hover={false} />
          </div>
          <div className="date">
            <p>
              <Typography text={date} size="regular10" />
            </p>
          </div>
        </div>
        {role === "frontOffice" ? (
          <div>
            <div onClick={handleClick}>
              <Icons className="tickmark" icon={<TickMark />} size={"small"} hover={false} />
            </div>
            <div onClick={handleClick}>
              <Icons className="cross" icon={<Cross />} size={"small"} hover={false} />
            </div>
          </div>
        ) : null}
        {role === "shared" ? (
          <div>
            <div className="profile-pic ">
              <ProfilePic />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
TaskCard.propTypes = {
  task: PropTypes.string,
  role: PropTypes.string,
  date: PropTypes.string,
  handleClick: PropTypes.func,
};
export default TaskCard;

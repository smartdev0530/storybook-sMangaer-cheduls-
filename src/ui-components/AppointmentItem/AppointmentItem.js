import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import "./style.scss";

function AppointmentItem({ handleClick, start, end, customer, isActive, isSelect, showTimeCount = 7 }) {
  const [open1, setOpen1] = useState(false);
  const [select, setSelect] = useState(false);
  const [customId, setCustomId] = useState(0);

  function formatNumber(val) {
    var str = new String(val);
    if (str.length < 2) str = "0" + str;
    return str;
  }

  function getAM(val) {
    if (typeof val === "string") return val;
    return val === true ? "AM" : "PM";
  }

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  const handleSelect = () => {
    setSelect(!select);
    if (open1) setOpen1(false);
    if (isActive) setSelect(false);
  };

  function getTimeString(hour, min, am) {
    return formatNumber(hour) + ":" + formatNumber(min) + " " + getAM(am);
  }

  function getTimeStringFromMin(val) {
    var am = true;
    if (val >= 720) am = false;
    var hour = Math.floor(val / 60);
    var min = val % 60;
    if (hour >= 12) hour -= 12;
    if (hour === 0) hour = 12;
    return getTimeString(hour, min, am);
  }

  const getTimeSpanList = () => {
    var startTime = 0;
    var startHour = start.startHour === 12 ? 0 : start.startHour;
    startTime = 60 * startHour + start.startMin;
    if (start.startAM === false) startTime += 60 * 12;
    var endTime = 0;
    var endHour = end.endHour === 12 ? 0 : end.endHour;
    endTime = 60 * endHour + end.endMin;
    if (end.endAM === false) endTime += 60 * 12;
    var result = [];
    for (let i = startTime; i < endTime; i += 15) {
      result.push(getTimeStringFromMin(i));
    }
    return result;
  };

  const selectCustomer = (index) => {
    console.log("this is index", index);
    setCustomId(index);
  };

  const timeSpanList = useMemo(getTimeSpanList, [start, end]);

  const newSelectState = isSelect && !isActive;

  const [Height, setHeight] = useState(showTimeCount * 24 + "px");

  return (
    <div>
      <div className={`Item-ContainerA  ${newSelectState ? "container-active" : ""}`}>
        <div className="custom-dropdown-containerA">
          <div onClick={handleClick1} className="selected-listA" role="presentation">
            <Typography
              text={getTimeString(start.startHour, start.startMin, start.startAM)}
              size={newSelectState ? "semibold12" : "regular12"}
              color={newSelectState ? "font-secondary-color" : isActive ? "font-grey-light" : ""}
            />
            {open1 === false ? (
              <span className="icon align-middle dropDown-down-icon"></span>
            ) : (
              <span className="icon align-middle dropDown-up-icon"></span>
            )}
          </div>

          <div className={open1 === false ? "hide" : "list-items"} style={{ height: Height }}>
            {timeSpanList.map((item, index) => (
              <div className="list selected-list" role="presentation" key={index}>
                <Typography text={item} size="regular12" />
              </div>
            ))}
          </div>
        </div>
        <div className="sub">-</div>
        <div className="endDate">
          <Typography
            text={getTimeString(end.endHour, end.endMin, end.endAM)}
            size={newSelectState ? "semibold12" : "regular12"}
            color={newSelectState ? "font-secondary-color" : isActive ? "font-grey-light" : ""}
          />
        </div>
        <div className="customer">
          {customer.map((item, index) => {
            var flag = newSelectState && index == customId;
            return (
              <div onClick={() => selectCustomer(index)} key={index} style={{marginLeft:'16px'}}>
                <Typography
                  text={item}
                  size={newSelectState ? "semibold12" : "regular12"}
                  color={flag ? "font-secondary-color" : "font-grey-dark"}
                />
               
              </div>
            );
          })}
        </div>
      </div>
      <hr className="line" />
    </div>
  );
}

AppointmentItem.propTypes = {
  handleClick: PropTypes.func,
  data: PropTypes.object,
  isSelect: PropTypes.bool,
  isActive: PropTypes.bool,
  showTimeCount: PropTypes.number,
};

export default AppointmentItem;

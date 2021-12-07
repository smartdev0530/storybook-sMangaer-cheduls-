import { useState } from "react";
import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import "./style.scss";

function DropDown({ type, handleClick,title }) {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);
    if (open1 === false) {
      setOpen2(false);
      setOpen3(false);
    }
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };

    return (
      <div className="custom-dropdown-container">
        
        <div
          onClick={type !== "Disabled" ? handleClick1 : null}
          className={`list selected-list ${open1 ? "active" : ""} ${type === "Disabled" ? "disable" : ""}`}
          role="presentation"
        >
          <div class="ellipsis">
            <Typography text={title} size={open1 ? "semibold14" : "regular14"} />
          </div>
          {type === "Error" ? <span class="icon alert_icon"></span> : ""}
          {type === "Disabled" ? (
            <span class="icon align-middle dropDown-disable-icon"></span>
          ) : open1 === false ? (
            <span class="icon align-middle dropDown-down-icon"></span>
          ) : (
            <span class="icon align-middle dropDown-up-icon"></span>
          )}
        </div>
        <div className={open1 === false ? "hide" : "list-items"}>
          <div onClick={handleClick2} class="list selected-list sub_drop_down" role="presentation">
            <div class="ellipsis">
              <Typography text="Value 1" size="regular12" />
            </div>
            {open2 === false ? (
              <span class="icon align-middle down-icon"></span>
            ) : (
              <span class="icon align-middle up-icon"></span>
            )}
          </div>
          <div onClick={handleClick3} className="list selected-list sub_drop_down" role="presentation">
            <div className="ellipsis">
              <Typography text="Value 2" size="regular12" />
            </div>
            {open3 === false ? (
              <span className="icon align-middle down-icon"></span>
            ) : (
              <span className="icon align-middle up-icon"></span>
            )}
          </div>
        </div>
      </div>
    );

}

DropDown.propTypes = {
  type: PropTypes.oneOf(["Enabled", "Error", "Disabled"]),
  handleClick: PropTypes.func,
};

export default DropDown;

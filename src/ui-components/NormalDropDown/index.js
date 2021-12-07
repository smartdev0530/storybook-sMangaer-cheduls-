import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import "./styles.scss";

function NormalDropDown({ positionUp, type, handleChange, defaultValue, size, list }) {
  const [open1, setOpen1] = useState(false);

  const [val, setVal] = useState(defaultValue);
  const handleClick1 = () => {
    setOpen1(!open1);
  };

  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref && !ref.current?.contains(event.target)) {
      setOpen1(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [val]);

  const renderDrop = () => {
    return (
      <div className={`new-dropdown-variable ${size} ${open1 ? "open" : ""}`} ref={ref}>
        {/* main dropdown */}
        <div
          onClick={type !== "Disabled" ? handleClick1 : null}
          className={`list selected-list ${open1 ? "active" : ""} ${type === "Disabled" ? "disable" : ""}`}
          role="presentation"
        >
          <div class={`${size === "large-dropdown" ? "large-value" : "value"}`}>
            <Typography text={val || defaultValue} size={open1 ? "semibold12" : "regular12"} />
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
        <div
          className={`${open1 === false ? "hide" : "new-dropdown-list-items"} ${
            positionUp ? "dropdown-position-up" : ""
          }`}
        >
          <div className={`${size === "large-dropdown" ? "new-list-large" : "nd-new-list"} `}>
            {list.map((data, index) => (
              <>
                <div
                  className="list"
                  key={index}
                  onClick={() => {
                    setVal(data.name);
                    handleClick1();
                    handleChange(data.key);
                  }}
                >
                  <Typography text={data.name} size="regular12" />
                </div>
                <span></span>
              </>
            ))}
          </div>
        </div>
      </div>
    );
  };
  return renderDrop();
}

NormalDropDown.propTypes = {
  type: PropTypes.oneOf(["Enabled", "Error", "Disabled"]),
  handleClick: PropTypes.func,
};

export default NormalDropDown;

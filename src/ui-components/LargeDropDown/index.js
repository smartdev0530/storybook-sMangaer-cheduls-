import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import "./styles.scss";

function LargeDropdown({ type, handleChange, defaultValue, size, list }) {
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
      <div className={`new-dropdown-variableA ${size} ${open1 ? "open" : ""}`} ref={ref}>
        {/* main dropdown */}
        <div
          onClick={type !== "Disabled" ? handleClick1 : null}
          className={`list selected-list ${open1 ? "active" : ""} ${type === "Disabled" ? "disable" : ""}`}
          role="presentation"
        >
          <div className={`${size === "large-dropdown" ? "large-value" : "value"}`}>
            <Typography text={val || defaultValue} size={open1 ? "semibold14" : "regular14"} />
          </div>
          {type === "Error" ? <span className="icon alert_icon"></span> : ""}
          {type === "Disabled" ? (
            <span className="icon align-middle dropDown-disable-icon"></span>
          ) : open1 === false ? (
            <span className="icon align-middle dropDown-down-icon"></span>
          ) : (
            <span className="icon align-middle dropDown-up-icon"></span>
          )}
        </div>
        <div className={`${open1 === false ? "hide" : "new-dropdown-list-items"}`}>
          
          <div
            className={`${size === "large-dropdown" ? "new-list-large" : "new-list"} `}
          >
            {list.map((data, index) => {
              return <div key={index}>
                <div
                  className="list"
                  onClick={() => {
                    setVal(data.name);
                    handleClick1();
                  }}
                >
                  <Typography text={data.name} size="regular12" />
                </div>
                <span></span>
              </div>
  })}
          </div>
        </div>
      </div>
    );
  };
  return renderDrop();
}

LargeDropdown.propTypes = {
  type: PropTypes.oneOf(["Enabled", "Error", "Disabled"]),
  handleClick: PropTypes.func,
};

export default LargeDropdown;

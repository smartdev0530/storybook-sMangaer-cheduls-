import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import { getCamelCase } from "../../utils/formatString";
import "./styles.scss";

function DropDownWithoutLabel({ type, handleChange, defaultValue, value, size, list, name, positionUp }) {
  const [open1, setOpen1] = useState(false);
  const [options, setOptions] = useState([]);

  const [val, setVal] = useState(defaultValue);

  // for close on outside click
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
  }, [defaultValue]);

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  useEffect(() => {
    list.map((item, index) => {
      if (item.name === "Select" && item.key === "Select") list.splice(index, 1);
      return null;
    });
    let items = list;
    items.splice(0, 0, { key: "Select", name: "Select" });
    if (!defaultValue) {
      setVal("Select");
    }
    setOptions(items);
  }, [list, defaultValue]);

  const renderDrop = () => {
    return (
      <div className={`dropdown-variable ${size}`} ref={ref}>
        {/* main dropdown */}
        <div
          onClick={type !== "Disabled" ? handleClick1 : null}
          className={`selected-list${open1 ? " active" : ""} ${type === "Disabled" ? " disable" : ""}`}
          role="presentation"
        >
          <div class="">
            <Typography
              text={options.map((data) =>
                data.key === val
                  ? getCamelCase(data.name)
                  : data.name === val
                  ? getCamelCase(data.name)
                  : null
              )}
              size={open1 ? "semibold12" : "regular12 selectedItem"}
            />
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
        <div className={`${open1 === false ? "hide" : "dropdown-list-items"} ${positionUp && "position-up"}`}>
          <ul>
            {options.map((data, index) => (
              <>
                <li
                  className="listWithoutLabel"
                  key={index}
                  onClick={() => {
                    handleClick1();
                    if (data.name !== "Select") {
                      handleChange(data.name, name);
                      setVal(data.name);
                    } else {
                      handleChange("", name);
                      setVal("Select");
                    }
                  }}
                >
                  <label>
                    <span>
                      <Typography text={getCamelCase(data.name)} size="regular12" />
                    </span>
                  </label>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  return renderDrop();
}

DropDownWithoutLabel.propTypes = {
  type: PropTypes.oneOf(["Enabled", "Error", "Disabled"]),
  handleClick: PropTypes.func,
};

export default DropDownWithoutLabel;

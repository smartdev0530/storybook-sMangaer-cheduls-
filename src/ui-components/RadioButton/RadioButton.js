import { useState } from "react";
import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import { getCamelCase } from "../../utils/formatString";
import "./style.scss";

function RadioButton({ list, defaultVal, name, handleInputChange, title, titleStyle }) {
  const [isChecked, setIsChecked] = useState(false);
  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div class="radio-inline">
      <div>
        {title && (
          <Typography
            text={
              <span>
                {title}
                <span className="font-red">&nbsp;*</span>
              </span>
            }
            size={`${titleStyle} ${titleStyle === "regular12" && "radioBtnGrpLabel"}`}
          />
        )}
        <div className="radio-button marginTop12">
          {list.map((data, index) => (
            <label key={index}>
              <input
                className="radio-button-input"
                id={index}
                type="radio"
                name={name}
                value={data.name}
                checked={data.name === defaultVal}
                onClick={(event) => {
                  handleInputChange(event.target.value, event.target.name);
                  handleClick();
                }}
              />
              <span>
                <div className="radio-button-label-text">
                  <Typography
                    text={title === "GF Permissions" ? getCamelCase(data.name) : data.name}
                    size="regular12"
                  />
                </div>
              </span>
            </label>
          ))}
          {/* {varient ? (
            <div>
              <Typography text={varient} size="regular10" />
            </div>
          ) : null} */}
        </div>
      </div>
    </div>
  );
}

RadioButton.propTypes = {
  type: PropTypes.oneOf(["select", "noselect", "disabled"]),
  labelText: PropTypes.string,
  handleClick: PropTypes.func,
};

export default RadioButton;

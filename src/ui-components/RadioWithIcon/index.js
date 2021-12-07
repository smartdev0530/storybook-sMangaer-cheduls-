import { useState } from "react";
import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import { getCamelCase } from "../../utils/formatString";
import { ReactComponent as Lock } from "../../assets/icons/icon/Lock.svg";
import { ReactComponent as Unlock } from "../../assets/icons/icon/Unlock.svg";
import Icons from "../Icons";

import "./styles.scss";

function RadioButtonWithIcon({
  type,
  list,
  textLabel,
  headLabel,
  isPrivate,
  defaultVal,
  id,
  name,
  privacy,
  handleInputChange,
  varient,
  title,
  titleStyle,
}) {
  const [isChecked, setIsChecked] = useState(defaultVal);
  const handleClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div classname="radio-privacy">
      <div className="radio-button-privacy">
        {list.map((data, index) => (
          <label key={index}>
            <input
              className="radio-button-input"
              type="radio"
              id={index}
              name={name}
              value={data.value}
              checked={data.value === isChecked}
              onClick={(event) => {
                handleInputChange(event.target.value, event.target.name);
                handleClick();
              }}
            />
            <span>
              <div className="radio-button-label-text-icon">
                <div className="radio-heading">
                  <Typography text={data.heading} size="semibold12" />
                </div>
                {data.value ? (
                  <Icons className="lock-privacy-icon" size="medium" icon={<Lock />} />
                ) : (
                  <Icons className="unlock-privacy-icon" icon={<Unlock />} size={"medium"} hover={false} />
                )}
                <div className="radio-text">
                  <Typography text={data.text} size="regular12" />
                </div>
              </div>
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

RadioButtonWithIcon.propTypes = {
  type: PropTypes.oneOf(["select", "noselect", "disabled"]),
  labelText: PropTypes.string,
  handleClick: PropTypes.func,
};

export default RadioButtonWithIcon;

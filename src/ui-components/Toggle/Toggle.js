import PropTypes from "prop-types";
import { ReactComponent as TogglePrimary } from "../../assets/icons/noneIcon/togglePrimary.svg";
import { ReactComponent as ToggleSecondary } from "../../assets/icons/noneIcon/toggleSecondary.svg";
import { useState } from "react";
import "../../index.scss";

function Toggle() {
  const [switchState, setSwitchState] = useState("On");

  const handleChange = () => {
    if (switchState === "On") setSwitchState("Off");
    else setSwitchState("On");
  };

  return (
    <div>
      {switchState === "On" ? (
        <TogglePrimary onClick={handleChange} />
      ) : (
        <ToggleSecondary onClick={handleChange} />
      )}
    </div>
  );
}

Toggle.propTypes = {
  handleClick: PropTypes.func,
};

export default Toggle;

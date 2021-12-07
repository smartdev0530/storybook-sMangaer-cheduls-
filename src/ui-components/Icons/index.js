import React, { useState } from "react";
import PropTypes from "prop-types";
import Tooltip from "../Tooltip/Tooltip";
import "./styles.scss";

function Icons({ icon, size, hover, tooltip, className, handleClick }) {
  const [show, setShow] = useState(false);
  const handleMouseIn = () => {
    setShow(true);
  };
  const handleMouseOut = () => {
    setShow(false);
  };
  return (
    <div onClick={handleClick}>
      <div
        className={`${className ? className : ""} svgImage ${size ? size : "medium"} ${
          hover ? "hoverOn" : null
        } `}
        onMouseOver={handleMouseIn}
        onMouseOut={handleMouseOut}
      >
        {icon}
      </div>
      {show && tooltip ? (
        // {true ? (
        <Tooltip label={tooltip} />
      ) : null}
    </div>
  );
}
Icons.propTypes = {
  hover: PropTypes.bool,
  icon: PropTypes.object,
  size: PropTypes.string,
  tooltip: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Icons;

import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";

function TextFieldWithoutLabel({ defaultValue, size, handleChange, value, maxLength, type = "text", name }) {
  return (
    <input
      className={`inputFieldEmployee ${size} regular12`}
      type={type}
      defaultValue={defaultValue}
      value={value}
      name={name}
      onChange={(event) => handleChange(event.target.value, event.target.name)}
      required
      maxLength={maxLength}
    />
  );
}

TextFieldWithoutLabel.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(["smallText", "mediumText"]),
};

export default TextFieldWithoutLabel;

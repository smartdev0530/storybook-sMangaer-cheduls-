import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const TextField = ({
  label,
  placeholder,
  defaultValue,
  value,
  handleInputChange,
  varient,
  name,
  maxLength,
  error_message,
  type = "text",
}) => {
  const renderEnable = () => {
    return (
      <div className={`field enable`}>
        <input
          id={1}
          type={type}
          name={name}
          defaultValue={defaultValue}
          value={value}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={(event) => handleInputChange(event.target.value, event.target.name)}
        />
        <label htmlFor={1}>{label}</label>
      </div>
    );
  };
  const renderRequired = () => {
    return (
      <div className={`field enable`}>
        <input
          id={1}
          type={type}
          name={name}
          value={value}
          defaultValue={defaultValue}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={(event) => handleInputChange(event.target.value, event.target.name)}
        />
        <label htmlFor={1}>
          <>
            {label}
            <span className="font-red">&nbsp;*</span>
          </>
        </label>
      </div>
    );
  };

  const renderActive = () => {
    return (
      <div className={`field enable active`}>
        <input
          id={1}
          type={type}
          value={value}
          name={name}
          defaultValue={defaultValue}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={(event) => handleInputChange(event.target.value, event.target.name)}
        />
        <label htmlFor={1}>{label}</label>
      </div>
    );
  };

  const renderError = () => {
    return (
      <div className={`field enable active error`}>
        <input
          id={1}
          type={type}
          value={value}
          name={name}
          defaultValue={defaultValue}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={(event) => handleInputChange(event.target.value, event.target.name)}
        />
        <label htmlFor={1}>
          <span className="errorSpan">
            {label} <span className="font-red">*</span>
          </span>
        </label>
        <span className="errorSpan">{error_message}</span>
      </div>
    );
  };

  return varient === "Active"
    ? renderActive()
    : varient === "Required"
    ? renderRequired()
    : varient === "Error"
    ? renderError()
    : renderEnable();
};

TextField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  varient: PropTypes.oneOf(["Enabled", "Required", "Active", "Error"]),
};

export default TextField;

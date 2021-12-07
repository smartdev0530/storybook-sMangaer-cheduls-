import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { Spinner } from "react-bootstrap";

// Panel Component - A Header with Edit Icon and Display custom HTML from the Parent Component
// This Component Panel doesnt have a fixed height & width, so wrap it inside a <div> having width and height defined
// Example
// <div> <Panel></Panel> </div>
// Donot Override the className mentioned in this Component anywhere, as it might disort the UI

export default function Panel({
  title,
  rightContent,
  children,
  customContentClass = "",
  showSpinner = false,
  customParent,
}) {
  return (
    <div className="panelWrapper">
      <div className="panelHeader">
        <div className="panelTitle">{title}</div>
        <div>{rightContent}</div>
      </div>
      <div className={`panelContent ${customContentClass}${showSpinner ? "panelSpinnerStyling" : ""}`}>
        {showSpinner ? <Spinner animation="border" /> : children}
      </div>
      {customParent === "overview-chart" && <div className={`overview-chart-custom-panel`}>{children}</div>}
    </div>
  );
}

Panel.propTypes = {
  title: PropTypes.string,
  rightContent: PropTypes.string,
  children: PropTypes.string,
  customContentClass: PropTypes.string,
};

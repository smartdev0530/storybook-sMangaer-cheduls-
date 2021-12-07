import React, { useEffect, useState } from "react";
import RoundToggle from "../RoundToggle/RoundToggle";
import PropTypes from "prop-types";
import Typography from '../Typography/Typography'
import './style.scss'

const ChipGroup = ({ type ,names,selected,title,size}) => {
  return (
    <div className="group-container">
      <div className="group-title">
        <Typography text={title} size="regular10" />
      </div>
      <div className="button-group">
        {names.map((name, index) => (
          <div className="btn-customer" key={index}>
            <RoundToggle label={name} size={size} type={type} isActive={selected} />
          </div>
        ))}
      </div>
    </div>
  );
};

ChipGroup.propTypes = {
    type: PropTypes.bool,
    size:PropTypes.oneOf(["sm", "rt_sm", "rt_nor", "rt_lg"]),
    label: PropTypes.object,
    selected : PropTypes.bool,
    

  };


export default ChipGroup;

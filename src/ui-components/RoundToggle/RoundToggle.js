import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import Typography from "../Typography/Typography";
import "./styles.scss";
import {ProcedureContext} from "../../context/ProcedureContext"

function RoundToggle({ type=false, label, icon: Icon = null, size = "sm", handleClick, width, isActive, isToggleEnable=true, tooltip=null }) {
  
  // const [ty, setType] = useState(type);
  
  const {currentProcedure, setCurrentProcedure} = useContext(ProcedureContext)

  // useEffect(() => {
  //   setType(type);
  // }, [type]);
  // const handleButtonClick  = () => {
  //   console.log("called : ", type);
  //   if (isToggleEnable)
  //     setType(!ty);
  //   // setCurrentProcedure({...currentProcedure, [label] : !ty})
  // }

  // useEffect(() => {
  //   setCurrentProcedure({...currentProcedure, [label] : ty})
  // }, [ty])
  return (
    <button
      // onClick={() => handleButtonClick()}
      className={`toggle ` + (type === true ? `btnSelected` : `btnUnselected`) + ` ${size === "sm" ? "rtSmall" : size === "rt_sm" ? "rectSmall" : size === "rt_nor" ? "rectNormal" : "rectLarge"}`}
      style={{ width: width }} disabled={isActive}
      title={tooltip}
    >
      <Typography text={label} size="regular12" color={isActive ? 'font-grey-light' : "font-grey-dark" }/>
      {Icon && <Icon className="toggle-icon"/>}
    </button>
  );
}

RoundToggle.propTypes = {
  type: PropTypes.bool,
  label: PropTypes.string,
  size: PropTypes.oneOf(["sm", "rt_sm", "rt_nor", "rt_lg"]),
  handleClick: PropTypes.func,
  width: PropTypes.string,
  isToggleEnable: PropTypes.bool,
};

export default RoundToggle;

import PropTypes from "prop-types";
import RoundToggle from "../RoundToggle/RoundToggle";
import {ReactComponent as BookedIcon} from '../../assets/icons/icon/iconRedImportant.svg';
import "./styles.scss";

function Room({ label, type=false, booked=false, icon: Icon = BookedIcon, color, size = "rt_nor", handleClick, isActive, isToggleEnable, tooltip }) {
  
  return (
    <RoundToggle label={label} type={type} icon={booked ? Icon : null} size={size} handleClick={handleClick} isActive={isActive} isToggleEnable={isToggleEnable} tooltip={tooltip}/>
  );
}

Room.propTypes = {
  type: PropTypes.bool,
  label: PropTypes.string,
  size: PropTypes.oneOf(["sm", "rt_sm", "rt_nor", "rt_lg"]),
  handleClick: PropTypes.func,
  width: PropTypes.string,
  isToggleEnable: PropTypes.bool,
  tooltip: PropTypes.string,
};

export default Room;

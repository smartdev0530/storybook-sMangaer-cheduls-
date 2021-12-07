import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import "./styles.scss";
function Chip({ label, handleClick,  icon: Icon = null, isActive = false, isRoundType = true }) {
  return (
    <div
      onClick={handleClick}
      className={`chip ${isRoundType ? null : 'bound' } ${isActive? 'active' : null}`}
    >
      <Typography text={label} size="regular12" color="font-black" />
     <div  onClick={handleClick}> {Icon && <Icon className="chip-icon"/>}</div>
    </div>
  );
}

Chip.propTypes = {  
  label: PropTypes.string,  
  handleClick: PropTypes.func,
  // icon: PropTypes.element,
  isActive: PropTypes.bool,
  isRoundType: PropTypes.bool
};

export default Chip;

import PropTypes from "prop-types";
// import { ReactComponent as PillCross } from "../../assets/icons/icon/CancelGreen.svg";
import Typography from "../Typography/Typography";
import Icons from "../Icons";
import "./styles.scss";

function Pill({ label, type = "info", handleClick }) {
  return type === false ? (
    <div onClick={handleClick} className="basicPill">
      <Typography text={label} size="regular12" />
    </div>
  ) : type === "disable" ? (
    <div onClick={handleClick} className="basicPill disablePill">
      <Typography text={label} size="regular12" />
    </div>
  ) : type === "forms" ? (
    <div onClick={handleClick} className="basicPill formsPill">
      <Typography text={label} size="regular12" />
    </div>
  ) : type === true ? (
    <div onClick={handleClick} className="selectesPill">
      {label}
    </div>
  ) : type === "time" ? (
    <div onClick={handleClick} className=" timePill">
      <Typography text={label} size="regular12" />
    </div>
  ) : (
    <div onClick={handleClick} className=" groupPill">
      <Typography text={label} size="regular12" />
    </div>
  );
}
Pill.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["info", "disable", "forms", "selected,time"]),
  handleClick: PropTypes.func,
};

export default Pill;

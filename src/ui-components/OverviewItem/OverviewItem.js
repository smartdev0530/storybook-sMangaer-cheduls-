import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import "./styles.scss";

const OverviewItem = ({ number, text, textColor, displayIcon }) => {
  return (
    <div className="overview-card">
      <div className="overview-icon">{displayIcon}</div>
      <div className="overview-info">
        <Typography text={number} size="semibold32" />
        <div className={`overview-text ${textColor}-text-class`}>
          <Typography text={text} size="regular12" />
        </div>
      </div>
    </div>
  );
};

OverviewItem.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string,
  textColor: PropTypes.oneOf(["green", "red", "orange", "default"]),
  handleClick: PropTypes.func,
};

export default OverviewItem;

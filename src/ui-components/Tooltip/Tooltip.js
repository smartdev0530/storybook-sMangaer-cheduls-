import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import "./styles.scss";

const Tooltip = ({ label = "Tooltip" }) => {
  return (
    <div className="tooltipDiv">
      <Typography text={label} size="regular12" color="font-grey-dark" />
    </div>
  );
};

Tooltip.propTypes = {
  label: PropTypes.string,
};

export default Tooltip;

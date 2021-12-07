import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import "./styles.scss";
function Button({ label, type = "Primary", color, size = "sm", handleClick, width }) {
  return type === "Primary" ? (
    <button
      onClick={handleClick}
      className={`btnPrimary ${size === "sm" ? "btnSmall" : size === "lg" ? "btnLarge" : "btnFit"}`}
      style={{ width: width }}
    >
      <Typography text={label} size="semibold12" color="font-white" />
    </button>
  ) : type === "Secondary" ? (
    <button
      onClick={handleClick}
      className={`btnSecondary ${size === "sm" ? "btnSmall" : size === "lg" ? "btnLarge" : "btnFit"}`}
      style={{ width: width }}
    >
      <Typography text={label} size="semibold12" color="font-primary-action" />
    </button>
  ) : type === "Tertiary" ? (
    <button
      onClick={handleClick}
      className={`btnTertiary ${size === "sm" ? "btnSmall" : size === "lg" ? "btnLarge" : "btnFit"}`}
      style={{ width: width }}
    >
      <Typography text={label} color={color} size="regular14" />
    </button>
  ) : type === "Main" ? (
    <button
      onClick={handleClick}
      className={`btnMain ${size === "sm" ? "btnSmall" : size === "lg" ? "btnLarge" : "btnFit"}`}
      style={{ width: width }}
    >
      <Typography text={label} color={color} size="regular14" />
    </button>
  ) :(
    <button
      onClick={handleClick}
      className={`btnDisable ${size === "sm" ? "btnSmall" : size === "lg" ? "btnLarge" : "btnFit"}`}
      style={{ width: width }}
    >
      <Typography text={label} color={color} size="regular14" />
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg", "fit"]),
  handleClick: PropTypes.func,
};

export default Button;

import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import "./styles.scss";

function ButtonGroup({ list, type, handleClick, width }) {
  return list?.map((item, index) => {
    return (
      <button
        onClick={() => handleClick(item, index)}
        className={
          type === "day"
            ? item.checked === true
              ? "select-btn-style daySlot"
              : "btn-style daySlot"
            : type === "timeslot"
            ? item.checked === true
              ? "select-btn-style timeSlot"
              : "btn-style timeSlot"
            : type === "pslot"
            ? item.checked === true
              ? "select-btn-style providerSlot"
              : "btn-style providerSlot"
            : type === "hslot"
            ? item.checked === true
              ? "select-btn-style hygienistSlot"
              : "btn-style hygienistSlot"
            : type === "room"
            ? item.checked === true
              ? "select-btn-style roomSlot"
              : "btn-style roomSlot"
            : ""
        }
        style={{ width: width }}
      >
        <Typography
          text={<p style={{ fontSize: "12px", textAlign: "center", margin: "0 auto" }}>{item.name}</p>}
          color="font-black"
        />
      </button>
    );
  });
}

ButtonGroup.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(["sm"]),
  handleClick: PropTypes.func,
};

export default ButtonGroup;

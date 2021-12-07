import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import "./styles.scss";
function Comment({ placeholder, color, size = "sm", handleClick, width, title, titleSize }) {
  return (
    <div>
      <Typography text={title} size={titleSize}> </Typography>
      <textarea
        onClick={handleClick}
        className={`comment ${size === "sm" ? "commentSmall" : "commentLarge"} regular12`}
        style={{ width : "-webkit-fill-available", height : "48px", marginTop: "8px"}}
        placeholder={placeholder}
      >
        {/* <Typography text={label} size="regular12" color="font-grey-dark" /> */}
      </textarea>
    </div>
  );
}

Comment.propTypes = {
  title: PropTypes.string,
  titleSize: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg"]),
  handleClick: PropTypes.func,
  placeholder: PropTypes.string
};

export default Comment;

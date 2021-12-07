import PropTypes from "prop-types";
import { ReactComponent as SearchIcon } from "../../assets/icons/icon/Search.svg";
import Icons from "../Icons";
import "./styles.scss";

function SearchField({ label, type = "Primary", handleClick }) {
  const divStyle = {
    width: "fit-content",
    background: "white",
    border: "none",
    borderBottom: "0.5px solid #414141",
  };

  const style = {
    width: "150px",
    border: "none",
    outline: "none",
    borderBottom: "0px solid #414141",
    color: "#414141",
    fontSize: "12px",
  };

  if (type === "Secondary") {
    divStyle.borderBottom = "none";
    divStyle.backgroundColor = "#F6F6F6";
    style.backgroundColor = "#F6F6F6";
    divStyle.borderRadius = "4px";
    style.borderRadius = "4px";
    style.padding = "6px 8px 6px 8px";
  }

  if (type === "Primary") {
    divStyle.backgroundColor = "transparent";
    style.backgroundColor = "transparent";
    style.padding = "6px 8px 6px 8px";
  }

  return (
    <div className="searchField" onClick={handleClick} style={divStyle}>
      {type === "Secondary" ? (
        <>
          &nbsp;&nbsp;
          <Icons className="searchIcon" icon={<SearchIcon />} size={"mediumLarge"} hover={false} />
          &nbsp;&nbsp;
        </>
      ) : (
        ""
      )}
      <input type="text" placeholder={label} style={style} />
      {type === "Primary" ? (
        <>
          <Icons className="searchIcon" icon={<SearchIcon />} size={"mediumLarge"} hover={false} />
          &nbsp;&nbsp;
        </>
      ) : (
        ""
      )}
    </div>
  );
}

SearchField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["Primary", "Secondary"]),
  handleClick: PropTypes.func,
};

export default SearchField;

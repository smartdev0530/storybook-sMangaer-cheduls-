import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import { ReactComponent as DropDownIcon } from "../../assets/icons/icon/CloseArrow.svg";
import "./style.scss";

function SearchDropDown({ label, placeholder, handleChange, renderList, type = "Default", varient, value }) {
  const [openDefault, setOpenDefault] = useState(false);
  const [openSmall, setOpenSmall] = useState(false);
  const [val, setVal] = useState(value);
  const [list, setList] = useState([]);

  // for close on outside click
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref && !ref.current?.contains(event.target)) {
      setOpenSmall(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [val]);

  useEffect(() => {
    renderList.map((item, index) => {
      if (item.name === "Select" && item.key === "Select") renderList.splice(index, 1);
    });
    let items = renderList;
    items.splice(0, 0, { key: "Select", name: "Select" });
    if (!val) {
      setVal("Select");
    }
    setList(items);
  }, [renderList, val]);

  const handleClickDefault = () => {
    setOpenDefault(!openDefault);
  };
  const handleClickSmall = () => {
    setOpenSmall(!openSmall);
  };

  const renderDefault = () => {
    return (
      <div className="search-wrapper cursorPointer" ref={ref} onClick={handleClickDefault}>
        <div className="search-label">
          <Typography text={label} size="regular10" />
        </div>{" "}
        <div className="search-red-star-sym">&nbsp;*</div>
        {/* <div className="search-input-text-div">
          <input className="search-input-text no-outline" type="text" placeholder={placeholder} />
        </div> */}
        <div className="icon align-middle down-arrow">
          <DropDownIcon className={`dropdown-icon ${openDefault ? "dropdown-icon-up" : ""}`} />
        </div>
        {/*list start here*/}
        <div className={openDefault === false ? "hide" : "relation-list-div"}>
          {renderList &&
            renderList.map((item, index) => (
              <div key={index} className="relation-list-element">
                <Typography text={item} size="regular12" />
              </div>
            ))}
        </div>
      </div>
    );
  };

  const renderSmall = () => {
    return (
      //selected-dropdown-value
      <div
        onClick={handleClickSmall}
        className={`cursorPointer search-wrapper-small ${varient === "Error" ? "error" : ""}`}
        ref={ref}
      >
        {val ? (
          <>
            <div className="search-label">
              <span className={`regular10 ${varient === "Error" && "errorSpan"}`}>{label}</span>
            </div>
            <div className="search-red-star-sym">&nbsp;*</div>
            <div className="selected-dropdown-value">
              <Typography text={val} size={`regular12 ${val === "Select" && "font-grey-light"}`} />
            </div>
          </>
        ) : (
          <>
            <div className="search-label">
              <span className={`regular10 ${varient === "Error" && "errorSpan"}`}>{label}</span>
            </div>
            <div className="search-red-star-sym">&nbsp;*</div>
            {/* <div className="search-input-text-div">
              <input
                className="search-input-text no-outline"
                type="text"
                placeholder={placeholder}
                onChange={handleSearch}
              />
            </div> */}
          </>
        )}
        <div className="icon align-middle down-arrow">
          <DropDownIcon
            className={`${val ? "selected-dropdown-value" : ""} dropdown-icon-small ${
              openSmall ? "" : "dropdown-icon-up-small"
            }`}
          />
        </div>
        {/*list start here*/}
        <div className={openSmall === false ? "hide" : "new-list-search"}>
          {renderList &&
            renderList.map((item, index) => (
              <div
                key={index}
                className="search-list"
                onClick={() => {
                  handleClickSmall();
                  if (item.name !== "Select") {
                    handleChange(item.name);
                    setVal(item.name);
                  } else {
                    handleChange("");
                    setVal("Select");
                  }
                }}
              >
                <Typography text={item.name} size="regular12" />
              </div>
            ))}
        </div>
      </div>
    );
  };

  return type === "Small" ? renderSmall() : renderDefault();
}

SearchDropDown.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  renderList: PropTypes.object,
  type: PropTypes.oneOf(["Default", "Small"]),
};

export default SearchDropDown;

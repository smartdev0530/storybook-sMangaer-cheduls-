import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import { ReactComponent as DropDownIcon } from "../../assets/icons/icon/CloseArrow.svg";
import "./styles.scss";
import { getCamelCase } from "../../utils/formatString";

function SearchDropDownNotRequired({
  label,
  placeholder,
  value,
  handleChange,
  renderList,
  type = "Default",
  positionUp,
}) {
  const [openDefault, setOpenDefault] = useState(false);
  const [openSmall, setOpenSmall] = useState(false);
  const [val, setVal] = useState(typeof value === "object" ? value.name : value);
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
  }, [value]);

  useEffect(() => {
    renderList.map((item, index) => {
      if (item.name === "Select" && item.key === "Select") renderList.splice(index, 1);
    });
    let items = renderList;
    items.splice(0, 0, { key: "Select", name: "Select" });
    if (!value) {
      setVal("Select");
    } else setVal(typeof value === "object" ? value.name : value);
    setList(items);
  }, [renderList, value]);

  const handleClickDefault = () => {
    setOpenDefault(!openDefault);
  };
  const handleClickSmall = () => {
    setOpenSmall(!openSmall);
  };
  const handleSearch = (value) => {};
  const renderDefault = () => {
    return (
      <div className="search-wrapper cursorPointer" ref={ref} onClick={handleClickDefault}>
        <div className="search-label">
          <Typography text={label} size="regular10" />
        </div>{" "}
        <div className="search-red-star-sym">*</div>
        {/* <div className="search-input-text-div">
          <input className="search-input-text no-outline" type="text" placeholder={placeholder} />
        </div> */}
        <div className="icon align-middle down-arrow">
          <DropDownIcon className={`dropdown-icon ${openDefault ? "dropdown-icon-up" : ""}`} />
        </div>
        {/*list start here*/}
        <div className={openDefault === false ? "hide" : "relation-list-div"}>
          {renderList &&
            renderList.map((relationText, index) => (
              <div key={index} className="relation-list-element">
                <Typography text={relationText} size="regular12" />
              </div>
            ))}
        </div>
      </div>
    );
  };

  const renderSmall = () => {
    return (
      //selected-dropdown-value
      <div className="search-wrapper-small cursorPointer" ref={ref} onClick={handleClickSmall}>
        {val ? (
          <>
            <div className="search-label">
              <Typography text={label} size="regular10" />
            </div>

            <div className="selected-dropdown-value">
              <Typography
                text={getCamelCase(val)}
                size={`regular12 ${val === "Select" && "font-grey-light"}`}
              />
            </div>
          </>
        ) : (
          <>
            <div className="search-label">
              <Typography text={label} size="regular10 " />
            </div>

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
        <div
          className={`${openSmall === false ? "hide" : "new-list-search"} ${
            positionUp ? "new-list-search-position-up" : ""
          }`}
        >
          {list &&
            list.map((relationText, index) => (
              <div
                key={index}
                className="search-list"
                onClick={() => {
                  handleClickSmall();
                  if (relationText.name !== "Select") {
                    handleChange(relationText.name);
                    setVal(relationText.name);
                  } else {
                    handleChange("");
                    setVal("Select");
                  }
                }}
              >
                <Typography text={getCamelCase(relationText?.name)} size="regular12" />
              </div>
            ))}
        </div>
      </div>
    );
  };

  return type === "Small" ? renderSmall() : renderDefault();
}

SearchDropDownNotRequired.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  renderList: PropTypes.object,
  type: PropTypes.oneOf(["Default", "Small"]),
};

export default SearchDropDownNotRequired;

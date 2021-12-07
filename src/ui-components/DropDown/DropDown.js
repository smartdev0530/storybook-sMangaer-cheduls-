import { useState } from "react";
import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import "./style.scss";

function DropDown({ type, handleClick ,label}) {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);
    if (open1 === false) {
      setOpen2(false);
      setOpen3(false);
    }
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };
  const renderError = () => {
    return (
      <div className="custom-dropdown-container">
        {/* main dropdown */}
        <div
          onClick={type !== "Disabled" ? handleClick1 : null}
          className={`list selected-list ${open1 ? "active" : ""} ${type === "Disabled" ? "disable" : ""}`}
          role="presentation"
        >
          <div className="ellipsis">
            <Typography text={label} size={open1 ? "semibold14" : "regular14"} />
          </div>
          {type === "Error" ? <span className="icon alert_icon"></span> : ""}
          {type === "Disabled" ? (
            <span className="icon align-middle dropDown-disable-icon"></span>
          ) : open1 === false ? (
            <span className="icon align-middle dropDown-down-icon"></span>
          ) : (
            <span className="icon align-middle dropDown-up-icon"></span>
          )}
        </div>
        {/* end */}
        <div className={open1 === false ? "hide" : "list-items"}>
          {/* dropdown list */}
          {/* Append 'active className when list is open' */}
          <div onClick={handleClick2} className="list selected-list sub_drop_down" role="presentation">
            <div className="ellipsis">
              <Typography text="Value 1" size="regular12" />
            </div>
            {open2 === false ? (
              <span className="icon align-middle down-icon"></span>
            ) : (
              <span className="icon align-middle up-icon"></span>
            )}
          </div>
          {/* Append 'hide'to hide list */}
          <ul className={open2 === false ? "hide" : ""}>
            <li className="list" role="presentation">
              <label className="custom_multiline_checkbox">
                <span className="checkbox__label">
                  <Typography text="Value A" size="regular12" />
                </span>
                <input className="chk_multi" type="checkbox" id="call" name="callCommunicationAccepted" />
                <div className="checkbox__tick"></div>
              </label>
            </li>
            <li className="list" role="presentation">
              <label className="custom_multiline_checkbox">
                <span className="checkbox__label">
                  <Typography text="Value B" size="regular12" />
                </span>
                <input className="chk_multi" type="checkbox" id="call" name="callCommunicationAccepted" />
                <div className="checkbox__tick"></div>
              </label>
            </li>
          </ul>
          <div onClick={handleClick3} className="list selected-list sub_drop_down" role="presentation">
            <div className="ellipsis">
              <Typography text="Value 2" size="regular12" />
            </div>
            {open3 === false ? (
              <span className="icon align-middle down-icon"></span>
            ) : (
              <span className="icon align-middle up-icon"></span>
            )}
          </div>
          <ul className={open3 === false ? "hide" : ""}>
            <li className="list" role="presentation">
              <label className="custom_multiline_checkbox">
                <span className="checkbox__label">
                  <Typography text="Value A" size="regular12" />
                </span>
                <input className="chk_multi" type="checkbox" id="call" name="callCommunicationAccepted" />
                <div className="checkbox__tick"></div>
              </label>
            </li>
            <li className="list" role="presentation">
              <label className="custom_multiline_checkbox">
                <span className="checkbox__label">
                  <Typography text="Value B" size="regular12" />
                </span>
                <input className="chk_multi" type="checkbox" id="call" name="callCommunicationAccepted" />
                <div className="checkbox__tick"></div>
              </label>
            </li>
          </ul>
          {/*  */}
        </div>
      </div>
    );
  };

  const renderDisabled = () => {
    return (
      <div className="custom-dropdown-container">
        {/* main dropdown */}
        <div className={`list selected-list disable`} role="presentation">
          <div className="ellipsis">
            <Typography text="Dropdown" size="regular14" />
          </div>
          {type === "Error" ? <span className="icon alert_icon"></span> : ""}
          {type === "Disabled" ? (
            <span className="icon align-middle disable-icon"></span>
          ) : open1 === false ? (
            <span className="icon align-middle down-icon"></span>
          ) : (
            <span className="icon align-middle up-icon"></span>
          )}
        </div>
        {/* end */}
        <div className={open2 === false ? "hide" : "list-items"}>
          {/* dropdown list */}
          {/* Append 'active className when list is open' */}
          <div onClick={handleClick2} className="list selected-list sub_drop_down" role="presentation">
            <div className="ellipsis">
              <Typography text="Value 1" size="regular12" />
            </div>
            {open2 === false ? (
              <span className="icon align-middle down-icon"></span>
            ) : (
              <span className="icon align-middle up-icon"></span>
            )}
          </div>
          {/* Append 'hide'to hide list */}
          <ul className="hide">
            <li className="list" role="presentation">
              <label className="custom_multiline_checkbox">
                <span className="checkbox__label">
                  <Typography text="Value A" size="regular12" />
                </span>
                <input className="chk_multi" type="checkbox" id="call" name="callCommunicationAccepted" />
                <div className="checkbox__tick"></div>
              </label>
            </li>
            <li className="list" role="presentation">
              <label className="custom_multiline_checkbox">
                <span className="checkbox__label">
                  <Typography text="Value B" size="regular12" />
                </span>
                <input className="chk_multi" type="checkbox" id="call" name="callCommunicationAccepted" />
                <div className="checkbox__tick"></div>
              </label>
            </li>
          </ul>
          <div onClick={handleClick3} className="list selected-list sub_drop_down" role="presentation">
            <div className="ellipsis">Value 2</div>
            {open3 === false ? (
              <span className="icon align-middle down-icon"></span>
            ) : (
              <span className="icon align-middle up-icon"></span>
            )}
          </div>
          <ul className="hide">
            <li className="list" role="presentation">
              <label className="custom_multiline_checkbox">
                <span className="checkbox__label">Value A</span>
                <input className="chk_multi" type="checkbox" id="call" name="callCommunicationAccepted" />
                <div className="checkbox__tick"></div>
              </label>
            </li>
            <li className="list" role="presentation">
              <label className="custom_multiline_checkbox">
                <span className="checkbox__label">Value B</span>
                <input className="chk_multi" type="checkbox" id="call" name="callCommunicationAccepted" />
                <div className="checkbox__tick"></div>
              </label>
            </li>
          </ul>
          {/*  */}
        </div>
      </div>
    );
  };

  return type === "Disabled" ? renderDisabled() : renderError();
}

DropDown.propTypes = {
  type: PropTypes.oneOf(["Enabled", "Error", "Disabled"]),
  handleClick: PropTypes.func,
  label:PropTypes.string
};

export default DropDown;

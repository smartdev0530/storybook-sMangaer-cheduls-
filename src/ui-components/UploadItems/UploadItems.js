import React, { useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as WhiteToogle } from "../../assets/icons/icon/CloseArrow.svg";
import { ReactComponent as WhiteCross } from "../../assets/icons/icon/CancelGreen.svg";
import { ReactComponent as PrimaryCross } from "../../assets/icons/icon/CancelGreen.svg";
import { ReactComponent as PrimaryRefresh } from "../../assets/icons/icon/AvailableUpdates.svg";
import { ReactComponent as DocumentProgress } from "../../assets/icons/noneIcon/documentProgressIcon.svg";
import Icons from "../Icons";
import Draggable from "react-draggable";
import Typography from "../Typography/Typography";
import "./styles.scss";

const AccordionComponent = ({ title, children }) => {
  const [isOpen, setOpen] = useState(true);
  return (
    <Draggable>
      <div className="accordion-wrapper-div">
        <div className={`${isOpen ? "title-div" : "title-div-close"}`}>
          <Typography text={title} size="semibold12" />
          <Icons
            className=""
            icon={
              <WhiteToogle
                onClick={() => setOpen(!isOpen)}
                className={`toggle-icon-div ${isOpen ? "up-icon-div" : "down-icon-div"}`}
              />
            }
            size={"extraSmall"}
            hover={false}
          />
          <Icons className="white-cross-icon-div" icon={<WhiteCross />} size={"extraSmall"} hover={false} />
        </div>
        <div className={`accordion-item-div ${!isOpen ? "hide" : ""}`}>
          <div className="accordion-child-div">{children}</div>
        </div>
      </div>
    </Draggable>
  );
};

const UploadItems = ({ uploadList }) => {
  return (
    <div className="wrapper">
      <AccordionComponent
        title={`Uploading ${uploadList.length} ${uploadList.length > 1 ? "items" : "item"}`}
      >
        {uploadList.map((element, index) => (
          <div className="list-class-div">
            <span className="fileName-div">
              <Typography text={element.fileName} size="regular12" />
            </span>
            {element.status == 1 ? (
              <DocumentProgress className="progress-bar-div" />
            ) : (
              <div className="regular12 status-color-div">{`${
                element.status === 0 ? "Failed" : element.size
              }`}</div>
            )}
            {element.status == 0 ? (
              <Icons className="refresh-div" icon={<PrimaryRefresh />} size={"extraSmall"} hover={false} />
            ) : (
              <Icons className="cancel-div" icon={<PrimaryCross />} size={"extraSmall"} hover={false} />
            )}
          </div>
        ))}
      </AccordionComponent>
    </div>
  );
};

UploadItems.propTypes = {
  uploadList: PropTypes.object,
};

export default UploadItems;

import { useState } from "react";
import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import { ReactComponent as AccordionDown } from "../../assets/icons/icon/CloseArrow.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/icon/Pencil.svg";
import Icons from "../Icons";
import "./styles.scss";

const AccordionListUtil = ({ title, children, icon }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="accordion-wrapper">
      <div onClick={() => setOpen(!isOpen)} className="title">
        <Typography text={title} size="semibold14" />
        {icon === "edit" ? (
          <Icons className="toggle-icon edit-icon" icon={<EditIcon />} size={"mediumLarge"} hover={false} />
        ) : (
          <Icons
            className={`toggle-icon ${isOpen ? "up-icon" : "down-icon"}`}
            icon={<AccordionDown />}
            size={"mediumLarge"}
            hover={false}
          />
        )}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapse" : ""}`}>
        <div className="accordion-child">
          {children.map((value, index) => (
            <div className="listdiv" key={index}>
              <span>
                <Typography text={value} size="regular14" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AccordionUtil = ({ title, children, icon }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="accordion-wrapper">
      <div onClick={() => setOpen(!isOpen)} className="title">
        <Typography text={title} size="semibold14" />

        {icon === "edit" ? (
          <Icons className="toggle-icon edit-icon" icon={<EditIcon />} size={"mediumLarge"} hover={false} />
        ) : (
          <Icons
            className={`toggle-icon ${isOpen ? "up-icon" : "down-icon"}`}
            icon={<AccordionDown />}
            size={"mediumLarge"}
            hover={false}
          />
        )}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapse" : ""}`}>
        <div className="accordion-child">
          <Typography text={children} size="regular14" />
        </div>
      </div>
    </div>
  );
};

const CustomAccordion = ({ type = "list", icon }) => {
  return type === "list" ? (
    <AccordionListUtil
      title="Title"
      children={["Value 1", "Value 2", "Value 3", "Value 4", "Value 5"]}
      icon={icon}
    />
  ) : (
    <AccordionUtil
      title="Title"
      children={`But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.`}
      icon={icon}
    />
  );
};

CustomAccordion.propTypes = {
  type: PropTypes.oneOf(["list", "normal"]),
  icon: PropTypes.string,
  accordionList: PropTypes.object,
  handleClick: PropTypes.func,
};

export default CustomAccordion;

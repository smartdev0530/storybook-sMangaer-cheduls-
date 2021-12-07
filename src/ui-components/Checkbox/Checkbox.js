import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as Select } from "../../assets/icons/icon/Attendance.svg";
import { ReactComponent as NoSelect } from "../../assets/icons/icon/UncheckedCheckbox.svg";
import { ReactComponent as SelectAll } from "../../assets/icons/icon/CheckedCheckbox.svg";
import Icons from "../Icons";
import "./styles.scss";

function Checkbox({ type = "Normal", isChecked, handleCheckClick, varient, isDisabled = false }) {
  const [check, setCheck] = useState(isChecked || false);

  const handleChange = (value) => {
    setCheck(value);
    handleCheckClick(value);
  };

  useEffect(() => {
    setCheck(isChecked);
  }, [isChecked]);

  return (
    <div>
      {isDisabled === true ? (
        <Icons
          className={`disableCheckbox marginT custom-checkbox ${varient ? varient : ""}`}
          icon={<NoSelect className="marginT" />}
          size={"medium"}
        />
      ) : check ? (
        <Icons
          className={`selectedColor marginT custom-checkbox ${varient && varient}`}
          icon={<SelectAll className="marginT" onClick={() => handleChange(false)} />}
          size={"medium"}
        />
      ) : (
        <Icons
          className={`marginT custom-checkbox ${varient && varient} defaultColor`}
          icon={<NoSelect onClick={() => handleChange(true)} />}
          size={"medium"}
          hover={true}
        />
      )}
    </div>
  );

  // const renderNormal = () => {
  //   return (
  //     <div>
  //       {check ? (
  //         <Icons
  //           className="marginT custom-checkbox"
  //           icon={<SelectAll className="marginT" onClick={() => handleChange(false)} />}
  //           size={"medium"}
  //           hover={false}
  //         />
  //       ) : (
  //         <Icons
  //           className="marginT custom-checkbox"
  //           icon={<NoSelect onClick={() => handleChange(true)} />}
  //           size={"medium"}
  //           hover={false}
  //         />
  //       )}
  //     </div>
  //   );
  // };
  // const renderMultiselect = () => {
  //   return (
  //     <div>
  //       <Icons className="marginT" icon={<Select />} size={"medium"} hover={false} />
  //     </div>
  //   );
  // };

  // return type === "Normal" ? renderNormal() : renderMultiselect();
}

Checkbox.propTypes = {
  type: PropTypes.oneOf(["Normal", "Multiselect"]),
  handleClick: PropTypes.func,
};

export default Checkbox;

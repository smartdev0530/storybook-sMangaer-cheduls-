import PropTypes from "prop-types";
import { ReactComponent as EditEnable } from "../../assets/icons/icon/Pencil.svg";
import { ReactComponent as EditDisable } from "../../assets/icons/icon/Pencil.svg";
import { ReactComponent as Add } from "../../assets/icons/icon/PlusFilledGreen.svg";
import { ReactComponent as AddWhite } from "../../assets/icons/icon/PlusFilledWhite.svg";
import Icons from "../Icons";
import "./styles.scss";

function ActionIcon({ type = "Add", handleAddProce }) {
  return (
    <div onClick={handleAddProce}>
      {type === "Edit Enable" ? (
        <Icons className="editEnable" icon={<EditEnable />}  size={"mediumLarge"} hover={false} />
      ) : type === "Edit Disable" ? (
        <Icons className="editDisable" icon={<EditEnable />}  size={"mediumLarge"} hover={false} />
      ) : type === "Add White" ? (
        <Icons className="addWhite" icon={<AddWhite />}  size={"mediumLarge"} hover={false} />
      ) : (
        <Icons className="add" icon={<Add />} size={"mediumLarge"} hover={false} />
      )}
    </div>
  );
}

ActionIcon.propTypes = {
  type: PropTypes.oneOf(["Edit Enable", "Edit Disable", "Add White", "Add"]),
  handleAddProce: PropTypes.func,
};

export default ActionIcon;

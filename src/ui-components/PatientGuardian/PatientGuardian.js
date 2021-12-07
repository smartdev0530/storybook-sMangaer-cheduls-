import React from "react";
import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import { ReactComponent as DefaultPic } from "../../assets/icons/noneIcon/TheresaWebb.svg";
import { ReactComponent as Call } from "../../assets/icons/icon/Call.svg";
import { ReactComponent as Email } from "../../assets/icons/icon/Email.svg";
import { ReactComponent as Divider } from "../../assets/icons/noneIcon/vertical-divider.svg";
import Icons from "../Icons";
import "./styles.scss";

function PatientGuardian({ avatar: Avatar, name, relation, number, handleClick }) {
  return (
    <div className={`patient-guardian`}>
      { Avatar ? <Avatar className="avatar" /> : <DefaultPic className="avatar"/>}
      <div className="info">
        <div className="line1">
            <div className="label">
              <Typography text={name} size="semibold12" />
            </div>
            <Divider className="divider" />
            <div className="label">
             <Typography text={relation} size="semibold12" />
            </div>
        </div>
        <div className="line1 connection">
            <Icons icon={<Call className="call" />} size={"medium"} hover={false} />
            <div className="label">
             <Typography text={number} size="regular12" />
            </div>
            <Icons icon={<Divider />} size={"medium"} hover={false} />
            <Icons icon={<Email className="color-active" />} size={"medium"} hover={false} />          
        </div>
      </div>
    </div>
  );
}
PatientGuardian.propTypes = {
  avatar: PropTypes.element,
  name: PropTypes.string,
  number: PropTypes.string,
  handleClick: PropTypes.func,
};
export default PatientGuardian;

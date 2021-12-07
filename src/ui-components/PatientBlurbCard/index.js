import React from "react";
import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import { ReactComponent as DefaultPic } from "../../assets/icons/noneIcon/defaultEmptyPic.svg";
import { ReactComponent as FolderBill } from "../../assets/icons/icon/FolderBills.svg";
import { ReactComponent as Call } from "../../assets/icons/icon/Call.svg";
import { ReactComponent as Email } from "../../assets/icons/icon/Email.svg";
import { ReactComponent as Text } from "../../assets/icons/icon/Message.svg";
import { ReactComponent as Divider } from "../../assets/icons/noneIcon/divider.svg";
import Icons from "../Icons";
import "./styles.scss";

function PatientBlurbCard({ pic, name, gender, age, amount, number, handleClick, size }) {
  return (
    <div className={`patient-blurb-card ${size}`}>
      <div className="profilePic">{pic ? pic : <DefaultPic />}</div>
      <div className="row1">
        <div className="name">
          <Typography text={name} size="semibold14" />
        </div>
        <div>
          <Icons className="horizontal1" icon={<Divider />} size={"medium"} hover={false} />
        </div>
        <div className="gender">
          <Typography text={gender} size="regular12" />
        </div>
        <div>
          <Icons className="horizontal2" icon={<Divider />} size={"medium"} hover={false} />
        </div>
        <div className="age">
          <Typography text={age} size="regular12" />
        </div>
      </div>
      <div className="row2">
        <div>
          <Icons className="call" icon={<Call />} size={"medium"} hover={false} />
        </div>
        <div className="number">
          <Typography text={number} size="regular12" />
        </div>
        <div>
          <Icons className="horizontal3" icon={<Divider />} size={"medium"} hover={false} />
        </div>
        <div>
          <Icons className="folder" icon={<FolderBill />} size={"medium"} hover={false} />
        </div>
        <div className="amount">
          <Typography text={amount} size="regular12" />
        </div>
      </div>
      <div className="row3">
        <div>
          <Icons className="mail" icon={<Email />} size={"large"} hover={false} />
        </div>
        <div>
          <Icons className="message" icon={<Text />} size={"large"} hover={false} />
        </div>
        <div className="">
          <button onClick={handleClick} className="appointmentButton">
            <Typography text="Add appointment" size="semibold12" />
          </button>
        </div>
      </div>
    </div>
  );
}
PatientBlurbCard.propTypes = {
  pic: PropTypes.symbol,
  name: PropTypes.string,
  gender: PropTypes.string,
  name: PropTypes.string,
  age: PropTypes.string,
  number: PropTypes.string,
  amount: PropTypes.string,
  size: PropTypes.oneOf(["smallCard", "largeCard"]),
  handleClick: PropTypes.func,
};
export default PatientBlurbCard;

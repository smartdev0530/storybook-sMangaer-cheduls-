import React, { useState } from "react";
import Typography from "../ui-components/Typography/Typography";
import LargeDropDown from "../ui-components/LargeDropDown/index";
import left from "../assets/images/ComponentImage/Left.svg";
import message from "../assets/images/ComponentImage/Vector.svg";
import message1 from "../assets/images/ComponentImage/icons8-topic 3.svg";
import call from "../assets/images/ComponentImage/call.svg";
import ProfileInfo from "../ui-components/ProfileInfo/ProfileInfo";
import Button from "../ui-components/Button/Button";
import "./style.scss";

export default function Header({ add }) {
  const addAppointment = () => {
    add(true);
  };

  return (
      <div className="sub-header">
        <div className="arrow-left">
          <img src={left} />
        </div>
        <div className="avatar" style={{ width: "fit-content" }}>
          <ProfileInfo type="sm" name="Theresa Webb" age={35} />
        </div>
        <div className="user-history">
          <Typography text="No medial History" size="semibold14" />
        </div>
        <div className="subscriber">
          <LargeDropDown
            defaultValue="Cigna | PRO | Prinmary Subscriber"
            list={[{ name: "Theresa Webb1" }, { name: "Theresa Webb2" }, { name: "Theresa Webb3" }]}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "end",width:'30%' }}>
          <div className="appointment-action">
            <div className="img message">
              <img src={message} />
            </div>
            <div className="img">
              <img src={message1} />
            </div>
            <div className="img call">
              <img src={call} />
            </div>
            <div className="button-appointment">
              <Button label="Add appointment" size="fit" handleClick={addAppointment} />
            </div>
          </div>
        </div>
      </div>
  );
}

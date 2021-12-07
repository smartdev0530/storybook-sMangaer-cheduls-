import { useState } from "react";
import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import { ReactComponent as AccordionDown } from "../../assets/icons/icon/CloseArrow.svg";
import { ReactComponent as ArleneDP } from "../../assets/icons/arleneDP.svg";
import "./styles.scss";

const ProfileInfoSmall = ({ profilePicture, name, age }) => {
  return (
    <div className="profile-card-sm">
      <ArleneDP className="profile-pic-sm" />
      <div className="info-div-sm">
        <Typography text={`${name}, ${age}`} size="semibold14" />
      </div>
    </div>
  );
};

const ProfileInfoLarge = ({ profilePicture, name, email }) => {
  return (
    <div className="profile-card-lg">
      <ArleneDP className="profile-pic-lg" />
      <div className="info-div-lg">
        <Typography text={name} size="semibold14" />
        <div className="email-div">
          <Typography className="email-color" text={email} size="regular12" />
        </div>
      </div>
    </div>
  );
};
const ProfileInfoExtraLarge = ({ profilePicture, name, jobProfile }) => {
  return (
    <div className="profile-card-xl">
      <ArleneDP className="profile-pic-xl" />
      <div className="info-div-xl">
        <Typography text={`${name} | ${jobProfile}`} size="semibold14" />
      </div>
    </div>
  );
};

const ProfileInfo = ({ profilePicture, name, email, age, type, jobProfile }) => {
  return type === "sm" ? (
    <ProfileInfoSmall name={name} age={age} />
  ) : type === "lg" ? (
    <ProfileInfoLarge name={name} email={email} />
  ) : (
    <ProfileInfoExtraLarge name={name} jobProfile={jobProfile} />
  );
};

ProfileInfo.propTypes = {
  type: PropTypes.oneOf(["sm", "lg", "xl"]),
  profilePicture: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  jobProfile: PropTypes.string,
  age: PropTypes.number,
  handleClick: PropTypes.func,
};

export default ProfileInfo;

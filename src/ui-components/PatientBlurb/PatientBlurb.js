import React from 'react';
import PropTypes from "prop-types";
import PatientBlurbCard from '../PatientBlurbCard';
import Guardians from '../Guardians/Guardians';
import MedialHistory from '../MedialHistory/MedialHistory';
import Insurance from '../Insurance/Insurance';
import Appointments from '../Appointments/Appointments';
import { ReactComponent as ProfilePic } from "../../assets/icons/noneIcon/profilePic1.svg";
import "./styles.scss";

function PatientBlurb({handleClick}) {

  return (
    <div className="patient-blurb-wrapper">
      <PatientBlurbCard  pic={<ProfilePic />}  name="Theresa Web" age="35" gender="F" number="(217)-787-4515" size="largeCard" amount="234" />
      <div className="patient-blurb-body-wrapper">
      <div className="patient-blurb-body">
        <div className="patient-blurb-body-item">
          <Guardians />
        </div>
        <div className="patient-blurb-body-item">
          <MedialHistory/>
        </div>
        <div className="patient-blurb-body-item">
          <Insurance open={false} />
        </div>
        <div className="patient-blurb-body-item">
          <Appointments open={false} />
        </div>
      </div>
      </div>
    </div>
  )
}

PatientBlurb.propTypes = {  
  handleClick: PropTypes.func,
};

export default PatientBlurb;

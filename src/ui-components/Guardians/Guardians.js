import React from 'react';
import PropTypes from "prop-types";
import { DropDown } from '../AppointmentDetail/AppointmentDetail';
import PatientGuardian from '../PatientGuardian/PatientGuardian';
import { ReactComponent as ProfilePic } from "../../assets/icons/noneIcon/TheresaWebb.svg";
import { ReactComponent as ProfilePic1 } from "../../assets/icons/noneIcon/JohnWebb.svg";
import { ReactComponent as Divider } from "../../assets/icons/noneIcon/horizontalLine.svg";
import "../AppointmentDetail/styles.scss";

const GUARDIANS = 'Guardians';
const guardians = [
  {
    avatar: ProfilePic,
    name: 'Theresa Webb',
    relation: 'Mother',
    number: '(217)-782-4515‬'
  },
  {
    avatar: ProfilePic1,
    name: 'John Webb',
    relation: 'Father',
    number: '(217)-832-3642'
  }
]
function Guardians({ open = true, status='Enabled', handleClick }) {

  const content = 
    <div className="appointment-detail-wrapper">    
      {guardians.map((guardian, id) =>
        <>
        <div className="appointment-detail-item">
          <PatientGuardian  avatar={guardian.avatar} name={guardian.name} relation={guardian.relation} number={guardian.number} />
        </div>
        {id < guardians.length - 1 && <Divider className="divider" />}
        <div className="appoint-detail-item-content"></div>
        </>
      )}     
    </div>
  
  return (
    <DropDown label={GUARDIANS} open={open} component={content} status={status} handleClick={handleClick} />
  );
}

Guardians.propTypes = {  
  open: PropTypes.bool,
  status: PropTypes.oneOf(["Enabled", "Error", "Disabled", "Verified"]),
  handleClick: PropTypes.func,
};

export default Guardians;

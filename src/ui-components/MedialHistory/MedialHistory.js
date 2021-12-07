import React from 'react';
import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import { ReactComponent as ErrorIcon } from "../../assets/icons/noneIcon/alert_icon.svg";
import AppointmentDetailStatusToast from '../AppointmentDetailStatusToast/AppointmentDetailStatusToast';
import { DropDown } from '../AppointmentDetail/AppointmentDetail';
import Chip from '../Chip/Chip';
import {ReactComponent as PregnantIcon} from '../../assets/icons/icon/Pregnant.svg';
import "../AppointmentDetail/styles.scss";

function MedialHistory({ open = true, status='Error', handleClick }) {

  const content = 
    <div className="appointment-detail-wrapper">
      <div className="appointment-detail-item">
        <AppointmentDetailStatusToast label="Patient is pregnant | Due 09/23/2021" icon={PregnantIcon} status="Patient Confirmed" active={true} handleClick={()=>{}} />        
      </div>
      <div className="appointment-detail-item">
        <Typography text="Allergies" size="semibold12" color="font-black" />
        <div className="appoint-detail-item-content">
          <div className='subject-item'>
            <Chip  label="Lactose Intolerant" handleClick={()=>{}} />          
          </div>
          <div className='subject-item'>
            <Chip  label="Nuts" handleClick={()=>{}} />
          </div>
          <div className='subject-item'>
            <Chip  label="Soy" handleClick={()=>{}} />
          </div>
          <div className='subject-item'>
            <Chip  label="Penicillin" handleClick={()=>{}} />
          </div>
        </div>
      </div>
      <div className="appointment-detail-item">
        <Typography text="Medical Conditions" size="semibold12" color="font-black" />
        <div className="appoint-detail-item-content">
          <div className='subject-item'>
            <Chip  label="High blood pressure" handleClick={()=>{}} />
          </div>
          <div className='subject-item'>
            <Chip  label="Diabetes" handleClick={()=>{}} icon={ErrorIcon} />
          </div>
        </div>
      </div>
    </div>
  
  return (
    <DropDown label="Medical History" open={open} component={content} status={status} handleClick={handleClick} />
  );
}

MedialHistory.propTypes = {  
  open: PropTypes.bool,
  status: PropTypes.oneOf(["Enabled", "Error", "Disabled", "Verified"]),
  handleClick: PropTypes.func,
};

export default MedialHistory;

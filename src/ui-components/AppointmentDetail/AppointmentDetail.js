import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import { ReactComponent as ErrorIcon } from "../../assets/icons/noneIcon/alert_icon.svg";
import { ReactComponent as VerifyIcon } from "../../assets/icons/icon/VerifiedBadge.svg";
import AppointmentDetailStatusToast from '../AppointmentDetailStatusToast/AppointmentDetailStatusToast';
import AppointmentDetailTimes from '../AppointmentDetailTimes/AppointmentDetailTimes';
import Chip from '../Chip/Chip';
import ActionIcon from '../ActionIcon/ActionIcon';
import {ReactComponent as CloseIcon} from '../../assets/icons/icon/Close.svg'
import Icons from "../Icons";
import "./styles.scss";

export function DropDown({label='Appointment Details', status='Enabled', open = true, component, handleClick}) {
  const [isOpen, setOpen] = useState(open);
  const [localStatus, setStatus] = useState(status);
  useEffect(() => {
    setOpen(open);
  }, [open]);
  useEffect(() => {
    setStatus(status);
  }, [status]);

  return (
    <div className="content-drop-down">
      <div className={`header ${isOpen && 'opened'} `} onClick={()=> localStatus !== "Disabled" ? setOpen(!isOpen) : null}>
        <div className='header-label'>
          <Typography text={label} size={`${isOpen? 'semibold14': 'regular14'}`} color="font-black" />
          {localStatus === "Error" &&  <Icons icon={<ErrorIcon className="icon" />} size={"small"} hover={false} />}
          {localStatus === "Verified" &&  <Icons icon={<VerifyIcon className="icon verify-icon" />} size={"small"} hover={false} />}
        </div>
        {isOpen === false
          ? <span class="icon header-down-icon"></span> 
          : <span class="icon header-up-icon"></span>}
      </div>
      {isOpen && component}
    </div>
  )
}
const text1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

function AppointmentDetail({ open = true, status='Enabled', handleClick }) {

  const content = 
    <div className="appointment-detail-wrapper">
      <div className="appointment-detail-item">
        <AppointmentDetailStatusToast status="Patient Confirmed" active={true} handleClick={()=>{}} /> 
        <div className="appoint-detail-item-content"></div>       
      </div>
      <div className="appointment-detail-item">
        <AppointmentDetailTimes date="Thursday, April 26 2021" times="10AM - 12PM" handleEditClick={()=>{}} handleDeleteClick={()=>{}} />
        <div className="appoint-detail-item-content"></div>
      </div>
      <div className="appointment-detail-item">
        <Typography text="Procedures" size="semibold12" color="font-black" />
        <div className="appoint-detail-item-content">
          <div className='subject-item'>
            <Chip  label="#8 MIFL-C2(P)" handleClick={()=>{}}  icon={CloseIcon} />          
          </div>
          <div className='subject-item'>
            <Chip  label="#10 RCT" handleClick={()=>{}}  icon={CloseIcon} />
          </div>
          <div className='subject-item'>
            <ActionIcon  handleClick={()=>{}} />
          </div>
        </div>
      </div>
      <div className="appointment-detail-item">
        <Typography text="Comments" size="semibold12" color="font-black" />
        <div className="appoint-detail-item-content">
          <Typography text={text1} size="regular12" color="font-black" />
        </div>
      </div>
      <div className="appointment-detail-item">
        <Typography text="Copay- $72.50" size="semibold12" color="font-black" />
        <div className="appoint-detail-item-content"></div>
      </div>
    </div>
  
  return (
    <DropDown open={open} component={content} status={status} handleClick={handleClick} />
  );
}

AppointmentDetail.propTypes = {  
  open: PropTypes.bool,
  status: PropTypes.oneOf(["Enabled", "Error", "Disabled", "Verified"]),
  handleClick: PropTypes.func,
};

export default AppointmentDetail;

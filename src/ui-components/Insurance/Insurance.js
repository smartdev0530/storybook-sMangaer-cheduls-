import React from 'react';
import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import { DropDown } from '../AppointmentDetail/AppointmentDetail';
import "../AppointmentDetail/styles.scss";
import "./styles.scss";

const insurance = {
  description: 'Delta Dental - PPO',
  items: [
    {name: 'Diganostic', result: '100%'},
    {name: 'X-Ray', result: '100%'},
    {name: 'Preventive', result: '100%'},
    {name: 'Restorative', result: '80%'},
    {name: 'Endo', result: '80%'},
    {name: 'Perio', result: '80%'},
    {name: 'Oral Surgery', result: '80%'},
    {name: 'Crowns', result: '50%'},
    {name: 'Prosth', result: '50%'},
    {name: 'Diganostic', result: '50%'},
  ],
  copay: {
    total: {
      name: 'Annual Max',
      sum: '$2000'
    },
    items: [
      {name: 'Remaining', result: '100%'},
      {name: 'Pending', result: '100%'},
      {name: 'Deductible', result: '100%'},
    ]
  }

}
function Insurance({ open = true, status='Verified', handleClick }) {

  const content = 
    <div className="appointment-detail-wrapper">
      <Typography text={insurance.description} size="semibold12" color="font-black" />
      <div className="appoint-detail-item-content" />
        <div className="appointment-detail-item">         
          <div className="insurance-item-wrapper">
          {insurance.items.map((item, index) => 
            <div className="insurance-item-content">
              <div className="dot-item">&bull;&nbsp;<Typography text={item.name} size="regular12" color="font-black" /></div>
              <Typography text={item.result} size="regular12" color="font-black" />                          
            </div>
          )}
          <div className="appoint-detail-item-content" />
          <div className="insurance-item-content">
            <div className="dot-item">&bull;&nbsp;<Typography text={insurance.copay.total.name} size="semibold12" color="font-black" /></div>
            <Typography text={insurance.copay.total.sum} size="semibold12" color="font-black" />                          
          </div>
          <div className="appoint-detail-item-content" />
            <div className="insurance-item-wrapper">
            {insurance.copay.items.map((item, index) => 
              <div className="insurance-item-content">
                <div className="dot-item">&bull;&nbsp;<Typography text={item.name} size="semibold12" color="font-black" /></div>                
                <Typography text={item.result} size="semibold12" color="font-black" />                          
              </div>
            )}
            </div>
          </div>
        </div>
    </div>
  
  return (
    <DropDown label="Insurance" status={status} open={open} component={content} handleClick={handleClick} />
  );
}

Insurance.propTypes = {  
  open: PropTypes.bool,
  status: PropTypes.oneOf(["Enabled", "Error", "Disabled", "Verified"]),
  handleClick: PropTypes.func,
};

export default Insurance;

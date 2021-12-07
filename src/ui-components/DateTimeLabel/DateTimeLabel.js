import React ,{useState} from 'react'
import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {ReactComponent as DateTimeIcon} from '../../assets/icons/icon/CalendarIcon.svg'
import {formatCustomDateA} from "../../utils/formatString";

import "./styles.scss";

function DateTimeLabel({ label,isActive }) {
  const [startDate, setStartDate] = useState(new Date());
  const [date,setDate] = useState(formatCustomDateA(new Date()));

  const changeDate =(date) =>{
    setDate(formatCustomDateA(date))
  }
  return (
    <div className="date-time-labelA" >
      <div ><Typography text={date} size="semibold12" color={isActive ? 'font-secondary-color':"font-black"} /></div>
      <div style={{width:'5%',marginLeft:'12px'}}><DatePicker  dateFormat="dddd/MMMM/yyyy" selected={startDate} onChange={(date) =>changeDate(date) } customInput={<DateTimeIcon className="date-time-label-iconA"/>}/></div>
    </div>
  );
}

DateTimeLabel.propTypes = {  
  label: PropTypes.string
};

export default DateTimeLabel;

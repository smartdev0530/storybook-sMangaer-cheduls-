import React, { useState, forwardRef } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import Typography from "../Typography/Typography";
import {
  formatDateMonth,
  formatDayMonthDate,
  formatCustomDate,
  formatShortDayMonthDate,
} from "../../utils/formatString";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.scss";

const SingleMonthCalendar = ({ disableFutureDate, defaultValue, handleChange, varient, name }) => {
  const [startDate, setStartDate] = useState(new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()+1));
  return (
    <div className="semibold14 marginBottom20">
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          date && handleChange(formatCustomDate(date), name);
        }}
        dayClassName={() => "regular12 marginBottom20"}
        weekDayClassName={() => "semibold12 marginTop20 marginBottom15"}
        calendarStartDay={1}
        className={"calender_selector_container calendar-icon"}
        
        minDate={new Date()}
        maxDate={new Date(new Date().getFullYear()+9,12,31)}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        yearDropdownItemNumber={4}
        scrollableYearDropdown
      />
    </div>
  );
};

const SingleMonthCalendarWithLabel = ({
  disableFutureDate,
  topLabel,
  defaultValue,
  handleChange,
  varient,
}) => {
  const [startDate, setStartDate] = useState(defaultValue ? new Date(defaultValue) : null);
  return (
    <div className={`${startDate && "semibold14"} marginBottom20`}>
      <span className="textLabel">
        <Typography
          text={
            <span>
              {topLabel}
              <span className="font-red">&nbsp;*</span>
            </span>
          }
          size={`regular10 ${varient === "Error" && "errorSpan"}`}
          color={"font-grey-dark"}
        />
      </span>
      <DatePicker
        onChange={(date) => {
          setStartDate(date);
          date ? handleChange(formatCustomDate(date)) : handleChange("");
        }}
        selected={new Date(new Date().getMonth() ,new Date().getDate(), new Date().getFullYear())}
        placeholderText="MM/DD/YYYY"
        className={`calender_selector_label_container withLabel ${
          varient === "Error" ? "error" : ""
        } calendar-icon`}
        dayClassName={() => "regular12 marginBottom20"}
        weekDayClassName={() => "semibold12 marginTop20 marginBottom15"}
        calendarStartDay={1}
        dateFormat="MM/dd/yyyy"
        closeOnScroll={true}
        maxDate={disableFutureDate && new Date()}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
    </div>
  );
};
const TwoMonthCalendar = ({ defaultStartDate, handleChange }) => {
  const [startDate, setStartDate] = useState(defaultStartDate || new Date());
  const [endDate, setEndDate] = useState(new Date());

  const calculateMaxDate = new Date(startDate);
  calculateMaxDate.setDate(new Date(startDate).getDate() + 14);

  const [maxDate, setMaxDate] = useState(calculateMaxDate);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    handleChange(dates);
  };
  // Push Date 14 Days Previous
  const previousDate = () => {
    const dates = [];
    const updateStartDate = new Date(startDate);
    updateStartDate.setDate(new Date(startDate).getDate() - 14);
    setStartDate(updateStartDate);
    const updateEndDate = new Date(endDate);
    updateEndDate.setDate(new Date(endDate).getDate() - 14);
    setEndDate(updateEndDate);
    dates.push(updateStartDate);
    dates.push(updateEndDate);
    handleChange(dates);
  };

  // Push Date 14 Days Future
  const nextDate = () => {
    const dates = [];
    const updateStartDate = new Date(startDate);
    updateStartDate.setDate(new Date(startDate).getDate() + 14);
    setStartDate(updateStartDate);
    const updateEndDate = new Date(endDate);
    updateEndDate.setDate(new Date(endDate).getDate() + 14);
    setEndDate(updateEndDate);
    dates.push(updateStartDate);
    dates.push(updateEndDate);
    handleChange(dates);
  };
  const CustomSelect = forwardRef(({ value, onClick }, ref) => (
    <div className="swipe_calender_selector cursorPointer">
      <div className="inner_wrapper" onClick={onClick}>
        <span className="selected">{formatShortDayMonthDate(startDate)}</span>
        <span>-</span>
        <span className="selected">{endDate && formatShortDayMonthDate(endDate)}</span>
        <span className="icon cal_icon cursorPointer" ref={ref}></span>
      </div>
      <div className="icon align-middle left_arrow" onClick={() => previousDate()}></div>
      <div className="icon align-middle right_arrow" onClick={() => nextDate()}></div>
    </div>
  ));

  return (
    <div className="semibold14">
      <DatePicker
        selected={startDate}
        onChange={onChange}
        customInput={<CustomSelect />}
        monthsShown={2}
        dayClassName={() => "regular12 marginBottom20"}
        weekDayClassName={() => "semibold12 marginTop20 marginBottom15"}
        calendarStartDay={1}
        selectsRange
        startDate={startDate}
        endDate={endDate}
        maxDate={maxDate}
      />
    </div>
  );
};

const CustomDatePicker = ({
  defaultStartDate,
  disableFutureDate,
  calendarType,
  topLabel,
  defaultValue,
  handleChange,
  varient,
  name,
}) => {
  return (
    <div>
      {calendarType === "double" ? (
        <TwoMonthCalendar defaultStartDate={defaultStartDate} varient={varient} handleChange={handleChange} />
      ) : calendarType === "singleWithLabel" ? (
        <SingleMonthCalendarWithLabel
          topLabel={topLabel}
          defaultValue={defaultValue}
          handleChange={handleChange}
          varient={varient}
          disableFutureDate={disableFutureDate}
        />
      ) : (
        <SingleMonthCalendar
          disableFutureDate={disableFutureDate}
          defaultValue={defaultValue}
          handleChange={handleChange}
          varient={varient}
          name={name}
        />
      )}
    </div>
  );
};

CustomDatePicker.propTypes = {
  calendarType: PropTypes.oneOf(["single", "double", "singleWithLabel"]),
};
export default CustomDatePicker;

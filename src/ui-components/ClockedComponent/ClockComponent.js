import { useState, useEffect } from "react";
import Typography from "../Typography/Typography";
import DatePicker from "react-datepicker";
import { ReactComponent as WhiteCross } from "../../assets/icons/whiteCross.svg";
import { ReactComponent as WhiteEdit } from "../../assets/icons/whiteEdit.svg";
import ClockIcon from "../../assets/icons/clocked.svg";
import { getTime12hour } from "../../utils/formatString";
import Icons from "../Icons";
import "./styles.scss";

const ClockComponent = ({ lastStatus, onConfirm, handleClose, onCloseClick, onEditConfirm }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isEdit, setIsEdit] = useState(false);
  const [commentText, setCommentText] = useState("");
  const { lastAction, time } = lastStatus;
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let secondTimer = setInterval(() => {
      setCurrentDate(new Date());
    }, 30000);

    return () => clearInterval(secondTimer);
  }, []);

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const composeEditObject = () => {
    let object = {
      editedDate: currentDate,
      comment: commentText,
    };
    if (commentText.length > 0) {
      setIsError(false);
      onEditConfirm(object);
      setIsEdit(false);
      onCloseClick();
    } else {
      setIsError(true);
    }
  };

  const editClockComponent = () => {
    return (
      <>
        <span className="floatRight">
          <Icons icon={<WhiteCross />} size={"medium"} className="marginLeft15" handleClick={onCloseClick} />
        </span>
        <div className="timing-div marginBottom20">
          <div className="marginRight16 paddingLeft16">
            <Typography
              text={`${lastAction === "CLOCK_IN" ? "Clock out at" : "Clock in at"}`}
              size="semibold14"
              color="font-white"
            />
            <div className="react-timepick">
              <DatePicker
                selected={currentDate}
                onChange={(date) => setCurrentDate(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
              />
            </div>
          </div>
          <div className="clockSmall">
            <img src={ClockIcon} />
          </div>
        </div>
        <div className="marginBottom12">
          <textarea
            className={`comment-section-text margin-top-8 ${isError && `textarea-error`}`}
            placeholder="Write a comment..."
            onChange={(e) => handleCommentChange(e)}
          ></textarea>
        </div>
        <div className="clocked-button-div">
          <button className="clocked-secondary-button" onClick={() => setIsEdit(false)}>
            <Typography text="Cancel" size="semibold12" color="font-primary-action" />
          </button>
          <button className="clocked-primary-button" onClick={() => composeEditObject()}>
            <Typography text="Confirm" size="semibold12" color="font-white" />
          </button>
        </div>
      </>
    );
  };
  const normalClockComponent = () => {
    return (
      <>
        <div className="clocked-icon-div marginBottom20">
          <Icons icon={<WhiteCross />} size={"medium"} className="marginLeft15" handleClick={onCloseClick} />
          <Icons icon={<WhiteEdit />} size={"medium"} handleClick={() => setIsEdit(true)} />
        </div>
        <div className="timing-div marginBottom20">
          <div className="marginRight16">
            <Typography
              text={`${lastAction === "CLOCK_IN" ? "Clock out at" : "Clock in at"}`}
              size="semibold14"
              color="font-white"
            />
            <Typography text={getTime12hour(currentDate)} size="regular24" color="font-white" />
          </div>
          <div className="clock-lg-wrapper">
            <img src={ClockIcon} />
          </div>
        </div>
        <div className="clocked-button-div">
          <button className="clocked-secondary-button" onClick={() => onCloseClick()}>
            <Typography text="Cancel" size="semibold12" color="font-primary-action" />
          </button>
          <button className="clocked-primary-button" onClick={() => onConfirm()}>
            <Typography text="Confirm" size="semibold12" color="font-white" />
          </button>
        </div>
      </>
    );
  };
  return <div className="clocked-card">{isEdit ? editClockComponent() : normalClockComponent()}</div>;
};

export default ClockComponent;

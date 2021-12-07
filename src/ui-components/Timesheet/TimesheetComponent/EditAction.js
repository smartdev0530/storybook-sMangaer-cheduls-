import React, { useState } from "react";
import Typography from "../../Typography/Typography";
import DatePicker from "react-datepicker";
import { getTime12hour } from "../../../utils/formatString";

import "./modalStyles.scss";
import { Spinner } from "react-bootstrap";

const EditAction = ({ workTimeDetails, handleEditTime, handleApproveTime, type, handleClose, isLoading }) => {
  const createDateObject = (time) => {
    let d = new Date();
    let tempArr = time.split(":");
    let hours = tempArr[0];
    let minutes = tempArr[1].substring(0, 2);
    if (tempArr[1].substring(3, 5) === "PM") {
      let tempHour = parseInt(hours) + 12;
      hours = tempHour.toString();
    }
    d.setHours(hours);
    d.setMinutes(minutes);
    return d;
  };

  let originalTimeIn = new Date();
  let originalTimeOut = new Date();
  let submittedTimeIn = new Date();
  let submittedTimeOut = new Date();

  if (workTimeDetails && workTimeDetails !== undefined) {
    if (workTimeDetails.clockin !== undefined) {
      if (workTimeDetails.clockin.time !== undefined) {
        originalTimeIn = createDateObject(workTimeDetails.clockin.time);
      }
      if (workTimeDetails.clockin.time !== undefined) {
        submittedTimeIn = createDateObject(workTimeDetails.clockin.time);
      }
    }
    if (workTimeDetails.clockout !== undefined) {
      if (workTimeDetails.clockout.time !== undefined) {
        originalTimeOut = createDateObject(workTimeDetails.clockout.time);
      }
      if (workTimeDetails.clockout.time !== undefined) {
        submittedTimeOut = createDateObject(workTimeDetails.clockout.time);
      }
    }
  }

  const getLastHour = () => {
    let d = new Date();
    d.setHours("23");
    d.setMinutes("45");
    console.log(d);
    return d;
  };

  const getFirstHour = () => {
    let d = new Date();
    d.setHours("00");
    d.setMinutes("00");
    d.setSeconds("00");
    console.log(d);
    return d;
  };

  const [editClockInTime, setEditClockInTime] = useState(originalTimeIn);
  const [editClockOutTime, setEditClockOutTime] = useState(originalTimeOut);
  const [approveClockInTime, setApproveClockInTime] = useState(submittedTimeIn);
  const [approveClockOutTime, setApproveClockOutTime] = useState(submittedTimeOut);
  const [lastHourTime, setLastHourTime] = useState(getLastHour);
  const [firstHourTime, setFirstHourTime] = useState(getFirstHour);
  const [commentText, setCommentText] = useState("");
  const [commentTextError, setCommentTextError] = useState(false);

  const [loading, setLoading] = useState(isLoading);

  const handleCommentChange = (e) => {
    if (e.target.value.trim().length > 0) setCommentTextError(false);
    setCommentText(e.target.value);
  };

  const getRedStar = () => {
    return <span className="red-star-span-edit-modal">*</span>;
  };

  const makeEditChange = () => {
    if (commentText.trim().length === 0) setCommentTextError(true);
    if (
      commentText.trim().length > 0 &&
      editClockInTime !== null &&
      editClockOutTime !== null &&
      editClockInTime <= editClockOutTime
    ) {
      const submitTimeIn = getTime12hour(editClockInTime);
      const submitTimeOut = getTime12hour(editClockOutTime);

      const submitObj = {
        submittedClockIn: submitTimeIn,
        submittedClockOut: submitTimeOut,
        notes: commentText,
      };
      handleEditTime(workTimeDetails.id, submitObj);
    }
  };

  const makeApproveEditChange = () => {
    if (commentText.trim().length === 0) setCommentTextError(true);
    if (
      commentText.trim().length > 0 &&
      approveClockInTime !== null &&
      approveClockOutTime !== null &&
      approveClockInTime <= approveClockOutTime
    ) {
      const submitTimeIn = getTime12hour(approveClockInTime);
      const submitTimeOut = getTime12hour(approveClockOutTime);

      const approveObj = {
        approvedClockIn: submitTimeIn,
        approvedClockOut: submitTimeOut,
        approvalNotes: commentText,
      };
      handleEditTime(workTimeDetails.id, approveObj);
    }
  };

  return (
    <div>
      <div className="body-main container">
        <div className="original-clock-div row">
          <div className="original-clock-in-div col-6 ">
            <span className="original-clock-in-div ">
              <div className="element-text">
                <Typography text="Original Clock-In" size="semibold12" />
              </div>
              <Typography
                text={workTimeDetails ? workTimeDetails.clockin.orignalTime : ""}
                size="regular12"
              />
            </span>
          </div>

          <div className="original-clock-out-div col-6">
            <span className="original-clock-out-div ">
              <div className="element-text">
                <Typography text="Original Clock-Out" size="semibold12" />
              </div>
              <Typography
                text={workTimeDetails ? workTimeDetails.clockout.orignalTime : ""}
                size="regular12"
              />
            </span>
          </div>
        </div>

        <div className="edited-clock-div row margin-top-20">
          <div className="edited-clock-in-div col-6">
            <span className="edited-clock-in-div ">
              <div className="element-text">
                <Typography text="Edited Clock-In" size="semibold12" />
              </div>
              {type === "secondary" ? (
                <Typography
                  text={workTimeDetails ? workTimeDetails.clockin.submittedTime : ""}
                  size="regular12"
                />
              ) : (
                <DatePicker
                  className="approved-section-text margin-top-8"
                  selected={editClockInTime}
                  onChange={(time) => setEditClockInTime(time)}
                  minTime={firstHourTime}
                  maxTime={editClockOutTime}
                  showTimeSelect
                  showTimeSelectOnly={true}
                  dateFormat="h:mm aa"
                  timeIntervals={15}
                />
              )}
            </span>
          </div>

          <div className="edited-clock-out-div col-6">
            <span className="edited-clock-out-div ">
              <div className="element-text">
                <Typography text="Edited Clock-Out" size="semibold12" />
              </div>
              {type === "secondary" ? (
                <Typography
                  text={workTimeDetails ? workTimeDetails.clockout.submittedTime : ""}
                  size="regular12"
                />
              ) : (
                <DatePicker
                  className="approved-section-text margin-top-8"
                  selected={editClockOutTime}
                  onChange={(time) => setEditClockOutTime(time)}
                  minTime={editClockInTime}
                  maxTime={lastHourTime}
                  showTimeSelect
                  showTimeSelectOnly={true}
                  dateFormat="h:mm aa"
                  timeIntervals={15}
                />
              )}
            </span>
          </div>
        </div>
        {type === "primary" ? null : (
          <div className="approved-clock-div row margin-top-20">
            <div className="approved-clock-in-div col-6">
              <span className="approved-clock-in-div ">
                <div className="element-text">
                  <Typography text="Approved Clock-In" size="semibold12" />
                </div>

                <DatePicker
                  className="approved-section-text margin-top-8"
                  selected={approveClockInTime}
                  onChange={(time) => setApproveClockInTime(time)}
                  minTime={firstHourTime}
                  maxTime={approveClockOutTime}
                  showTimeSelect
                  showTimeSelectOnly={true}
                  dateFormat="h:mm aa"
                  timeIntervals={15}
                />
              </span>
            </div>

            <div className="approved-clock-out-div col-6">
              <span className="approved-clock-in-div ">
                <div className="element-text">
                  <Typography text="Approved Clock-Out" size="semibold12" />
                </div>

                <DatePicker
                  className="approved-section-text margin-top-8"
                  selected={approveClockOutTime}
                  onChange={(time) => setApproveClockOutTime(time)}
                  minTime={approveClockInTime}
                  maxTime={lastHourTime}
                  showTimeSelect
                  showTimeSelectOnly={true}
                  dateFormat="h:mm aa"
                  timeIntervals={15}
                />
              </span>
            </div>
          </div>
        )}
        <div className="comment-section-div col-12 margin-top-20">
          <span className="comment-section-div">
            <Typography text={
                  <span>
                    {"Comment"}
                    {getRedStar()}
                  </span>
                } size="semibold12" />
            <textarea
              className={`${
                commentTextError === true
                  ? "edit-modal-comment-section-text-red"
                  : "edit-modal-comment-section-text"
              } margin-top-8`}
              placeholder="Write a comment..."
              onChange={(e) => handleCommentChange(e)}
            ></textarea>
          </span>
        </div>
      </div>

      <div className="footer-body-div ">
        <div className="footer-btn-div ">
          <button className="cancel-button-action" onClick={() => handleClose()}>
            <Typography text="Cancel" size="semibold14" color="font-primary-action" />
          </button>
          <button
            className="approve-button-action cursorPointer"
            onClick={() => {
              if(commentText.trim().length > 0) setLoading(true);
              if (type === "secondary") {
                makeApproveEditChange();
              } else {
                makeEditChange();
              }
              if (commentText.trim().length > 0) {
                if (type === "secondary" && approveClockInTime <= approveClockOutTime) {
                  handleClose();
                }
                if (type !== "secondary" && editClockInTime <= editClockOutTime) {
                  handleClose();
                }
              }
            }}
          >
            {type === "secondary" ? (
              loading ? (
                <div className="btn-loading-state">
                  <Spinner animation="border" size="sm" />
                  <span>Approving</span>
                </div>
              ) : (
                <Typography text="Approve" size="semibold14" color="font-white" />
              )
            ) : (
              <Typography text="Send edit request" size="semibold14" color="font-white" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditAction;

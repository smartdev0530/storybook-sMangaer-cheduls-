import React, { Component } from "react";
import Checkbox from "../../Checkbox/Checkbox";
import Typography from "../../Typography/Typography";
import ModalPopup from "../../Modal";
import EditAction from "./EditAction";
import { ReactComponent as Edit } from "../../../assets/icons/icon/Pencil.svg";
import { ReactComponent as Important } from "../../../assets/icons/icon/iconRedImportant.svg";
import Icons from "../../Icons";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import Popover from "react-bootstrap/Popover";

import "./styles.scss";

class TimesheetComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      titleDate: "",
      workTimeDetails: "",
      selectedIndex: [],
      headerChecked: false,
      popoverObject: {},
    };
  }

  popover = (props, type) => (
    <Popover>
      {props !== undefined && (
        <div
          className={`tooltipDiv ${
            window.screen.availHeight - this.state.popoverObject.screenY < 120
              ? "topToolTipPosition"
              : "defaultToolTipPosition"
          }`}
        >
          <div className="toolTipText margin-bottom-10">
            <span className="inline">
              <Typography
                text={`Original Clock ${type} time : `}
                size={"semibold12"}
                color={"font-dark-blue"}
              />
            </span>
            <span className="inline">
              <Typography
                text={`${props.orignalTime ? props.orignalTime : " N/A"}`}
                size={"regular12"}
                color={"font-dark-blue"}
              />
            </span>
          </div>
          <div className="toolTipText">
            <span className="inline">
              <Typography
                text={`Edited Clock ${type} time : `}
                size={"semibold12"}
                color={"font-dark-blue"}
              />
            </span>
            <span className="inline">
              <Typography
                text={`${props.submittedTime ? props.submittedTime : " N/A"}`}
                size={"regular12"}
                color={"font-dark-blue"}
              />
            </span>
          </div>
          <div className="toolTipText margin-bottom-10">
            <span className="inline">
              <Typography text={`Comment : `} size={"semibold12"} color={"font-dark-blue"} />
            </span>
            <span className="inline">
              <Typography
                text={`${props.notes ? props.notes : " N/A"}`}
                size={"regular12"}
                color={"font-dark-blue"}
              />
            </span>
          </div>
          <div className="toolTipText">
            <span className="inline">
              <Typography
                text={`Approved Clock ${type} time : `}
                size={"semibold12"}
                color={"font-dark-blue"}
              />
            </span>
            <span className="inline">
              <Typography
                text={`${props.approvedTime ? props.approvedTime : " N/A"}`}
                size={"regular12"}
                color={"font-dark-blue"}
              />
            </span>
          </div>
          <div className="toolTipText">
            <span className="inline">
              <Typography text={`Comment : `} size={"semibold12"} color={"font-dark-blue"} />
            </span>
            <span className="inline">
              <Typography
                text={`${props.approvalNotes ? props.approvalNotes : " N/A"}`}
                size={"regular12"}
                color={"font-dark-blue"}
              />
            </span>
          </div>
        </div>
      )}
    </Popover>
  );

  strToMins = (t) => {
    var s = t.split(":");
    return Number(s[0]) * 60 + Number(s[1]);
  };

  minsToStr = (t) => {
    return Math.trunc(t / 60) + ":" + ("00" + (t % 60)).slice(-2);
  };

  getSubstractTime = (time1, time2) => {
    var result = this.minsToStr(this.strToMins(time1) - this.strToMins(time2));
    if (result.length === 4) result = "0" + result;
    return result;
  };

  handleCloseModal() {
    this.setState({ showModal: false });
    this.setState({ titleDate: "" });
    this.setState({ workTimeDetails: "" });
  }

  handleShowModal(InputDate, workTimeDetails) {
    this.setState({ showModal: true });
    this.setState({ titleDate: InputDate });
    this.setState({ workTimeDetails: workTimeDetails });
  }

  removeElement = (arr, val) => {
    const index = arr.indexOf(val);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  };

  renderModal() {
    return (
      <ModalPopup
        size="md"
        modalBody={
          <EditAction
            handleEditTime={(workTimeId, data) => this.props.handleEditTime(workTimeId, data)}
            workTimeDetails={this.state.workTimeDetails}
            type={this.props.type}
            isLoading={this.props.isLoading}
            handleClose={() => this.handleCloseModal()}
          />
        }
        title={this.state.titleDate}
        showModal={this.state.showModal}
        type="addEmployee"
        handleClose={() => this.handleCloseModal()}
      />
    );
  }

  checkHeader = (data) => {
    if (this.state.headerChecked) {
      while (this.state.selectedIndex.length) {
        this.state.selectedIndex.pop();
      }
      this.state.headerChecked = false;
    } else {
      while (this.state.selectedIndex.length) {
        this.state.selectedIndex.pop();
      }
      data !== undefined &&
        data.map((ele) => {
          ele.worktimeDetails.map((worktimeElement) => {
            if (worktimeElement.status !== "Approved") this.state.selectedIndex.push(worktimeElement.id);
          });
        });
      this.state.headerChecked = true;
    }
    this.props.changeRightContentCallback(this.state.selectedIndex);
  };
  checkBody = (ele, idx) => {
    var present = this.state.selectedIndex.indexOf(ele);
    if (present > -1) {
      this.state.selectedIndex.splice(present, 1);
    } else {
      this.state.selectedIndex.push(ele);
    }
    this.setState({ selectedIndex: this.state.selectedIndex });
    this.props.changeRightContentCallback(this.state.selectedIndex);
  };

  render() {
    const { headerArray, dataJson, apiData, type } = this.props;
    const data = apiData;
    return (
      <div className="timesheet-wrapper-div ">
        <div className="timesheet-header-div">
          <span className="header-text col-2 ">
            <Typography text={headerArray[0]} size="semibold14" />
          </span>
          <span className="header-text col-2">
            <Typography text={headerArray[1]} size="semibold14" />
          </span>

          <span className={`header-text ${type === "primary" ? "col-2" : "col-2"}`}>
            <Typography text={headerArray[2]} size="semibold14" />
          </span>

          <span className="header-text col-6">
            {type !== "primary" ? (
              <span className="header-text col-1">
                <Checkbox type="Normal" handleCheckClick={() => this.checkHeader(data)} />
              </span>
            ) : null}

            <span className="header-text col-2">
              <Typography text={headerArray[3]} size="semibold14" />
            </span>
            <span className={`header-text ${type === "primary" ? "col-2" : "col-2"}`}>
              <Typography text={headerArray[4]} size="semibold14" />
            </span>
            <span className={`header-text ${type === "primary" ? "col-6" : "col-2"}`}>
              <Typography text={headerArray[5]} size="semibold14" />
            </span>

            {type !== "primary" ? (
              <span className="header-text col-3">
                <Typography text={headerArray[6]} size="semibold14" />
              </span>
            ) : null}

            <span className={`header-text col-2 ${type === "primary" ? "" : "margin-left-3"}`}>
              <Typography text={headerArray[7]} size="semibold14" />
            </span>
          </span>
        </div>

        <div className="timesheet-body-div">
          {data &&
            data !== undefined &&
            data.map((dataElement, idx) => (
              <div key={idx} className="timesheet-element-wrapper-div">
                <div key={idx} className="timesheet-element-div">
                  <span className="timesheet-element-text col-2">
                    <Typography text={dataElement.date} size="regular12" />
                  </span>

                  <span className="timesheet-element-text col-2">
                    <Typography text={dataElement.regularHours} size="semibold16" />
                  </span>

                  <span className={`timesheet-element-text ${type === "primary" ? "col-2" : "col-2"}`}>
                    <Typography text={dataElement.overtime} size="semibold16" />
                  </span>

                  <span>
                    {dataElement && dataElement !== undefined && dataElement.worktimeDetails.length === 0 ? (
                      <span className={`timesheet-element-text ${type === "primary" ? "col-6" : "col-6"}`}>
                        {
                          <div>
                            {/* column 1: checkbox */}
                            {type !== "primary" ? (
                              <span className="timesheet-element-text col-1">
                                {/* <span className="timesheet-element-text col-1"></span> */}
                                <div className="timesheet-element-text checkbox">
                                  <Checkbox type="Normal" isDisabled={true} />
                                </div>
                              </span>
                            ) : null}

                            <span className="timesheet-element-text transform-down-2 col-2">
                              {/* column 2: clockin */}
                              <Typography text="-" size={"regular12"} color="font-grey-darker" />
                            </span>

                            {/* column 3: clockout */}
                            <span className="timesheet-element-text transform-down-2 col-2">
                              <Typography text={"-"} size={"regular12"} />
                            </span>
                            {/* column 4: Hours */}
                            <span
                              className={`timesheet-element-text transform-down-2 ${
                                type === "primary" ? "col-6" : "col-2"
                              }`}
                            >
                              <Typography text={"-"} size={"regular12"} />
                            </span>

                            {/* column 5: Actions */}
                            {type !== "primary" ? (
                              <span
                                className={`timesheet-element-text transform-down-5 ${
                                  type === "primary" ? "" : "col-3"
                                }`}
                              >
                                <span className="timesheet-element-text width-58">
                                  <Typography text={"-"} size={"regular12"} />
                                </span>

                                <span className="timesheet-element-text">
                                  <Typography text={"-"} size={"regular12"} />
                                </span>
                              </span>
                            ) : null}

                            {/* column 6: status */}
                            {
                              <span
                                className={`timesheet-element-text transform-down-2  ${
                                  type === "primary" ? "col-2" : "col-2"
                                }`}
                              >
                                <Typography text={"-"} size={"regular12"} />
                              </span>
                            }
                          </div>
                        }
                      </span>
                    ) : (
                      <span className={`timesheet-element-text ${type === "primary" ? "col-6" : "col-6"}`}>
                        {dataElement &&
                          dataElement !== undefined &&
                          dataElement.worktimeDetails.map((workTime, index) => (
                            <div>
                              {/* column 1: checkbox */}
                              {type !== "primary" ? (
                                <span className="timesheet-element-text col-1">
                                  {/* <span className="timesheet-element-text col-1"></span> */}
                                  <div className="timesheet-element-text checkbox">
                                    <Checkbox
                                      isChecked={this.state.headerChecked}
                                      type="Normal"
                                      handleCheckClick={() => this.checkBody(workTime.id, index)}
                                      isDisabled={workTime.status === "Approved" ? true : false}
                                    />
                                  </div>
                                </span>
                              ) : null}

                              <span className="timesheet-element-text col-2">
                                {/* column 2: clockin */}
                                <OverlayTrigger
                                  placement="bottom"
                                  trigger={["hover", "focus"]}
                                  overlay={this.popover(workTime.clockin, "in")}
                                >
                                  <div
                                    onMouseEnter={(e) => this.setState({ popoverObject: e })}
                                    className={`line clockin-handle-div`}
                                  >
                                    <Typography
                                      key={index}
                                      text={workTime.clockin.time}
                                      size={"regular12"}
                                      color={workTime.clockin.isEditedByEmployee ? "font-red" : null}
                                    />
                                  </div>
                                </OverlayTrigger>
                              </span>

                              {/* column 3: clockout */}
                              <span className="timesheet-element-text col-2">
                                <OverlayTrigger
                                  className="overlay-timesheet"
                                  placement="bottom"
                                  trigger={["hover", "focus"]}
                                  overlay={this.popover(workTime.clockout, "out")}
                                >
                                  <div
                                    onMouseEnter={(e) => this.setState({ popoverObject: e })}
                                    className={`line`}
                                  >
                                    <Typography
                                      key={index}
                                      text={workTime.clockout.time}
                                      size={"regular12"}
                                      color={workTime.clockout.isEditedByEmployee ? "font-red" : null}
                                    />
                                  </div>
                                </OverlayTrigger>
                              </span>
                              {/* column 4: Hours */}
                              <span
                                className={`timesheet-element-text ${type === "primary" ? "col-6" : "col-2"}`}
                              >
                                <div key={`workdetails ${index}`}>
                                  <span className="hours">
                                    <span className={`hours line ${type === "primary" ? "" : ""}`}>
                                      <Typography key={index} text={workTime.hours} size={"regular12"} />
                                    </span>
                                    <span className="Pencil">
                                      {type === "primary" && workTime.status === "Pending" ? (
                                        <Icons
                                          className="Pencil"
                                          icon={
                                            <Edit
                                              className="Pencil"
                                              key={index}
                                              onClick={() => this.handleShowModal(dataElement.date, workTime)}
                                            />
                                          }
                                          size={"small"}
                                          hover={true}
                                        />
                                      ) : null}
                                    </span>
                                  </span>
                                </div>
                              </span>
                              {/* column 5: Actions */}
                              {type !== "primary" ? (
                                <span
                                  className={`timesheet-element-text  ${type === "primary" ? "" : "col-3"}`}
                                >
                                  <span className="timesheet-element-text">
                                    <span
                                      className={`timesheet-element-text ${
                                        workTime.status === "Approved" ? "" : "cursorPointer"
                                      } width-58 transform-down-9`}
                                      onClick={() => {
                                        if (workTime.status !== "Approved") {
                                          let tempArray = [workTime.id];
                                          const approveIds = {
                                            ids: tempArray,
                                          };
                                          this.props.handleApproveTime(approveIds);
                                        }
                                      }}
                                    >
                                      <Typography
                                        key={index}
                                        text={workTime.status === "Approved" ? "-" : "Approve"}
                                        size={"regular12"}
                                        color={workTime.status === "Approved" ? "" : "font-primary-action"}
                                      />
                                    </span>
                                  </span>
                                  <span className="timesheet-element-text">
                                    <div
                                      className={`timesheet-element-text ${
                                        workTime.status === "Approved" ? "" : "cursorPointer"
                                      } transform-down-9`}
                                    >
                                      <Typography
                                        handleClick={
                                          workTime.status === "Approved"
                                            ? null
                                            : () => this.handleShowModal(dataElement.date, workTime)
                                        }
                                        key={index}
                                        text={workTime.status === "Approved" ? "-" : "Edit"}
                                        size={"regular12"}
                                        color={workTime.status === "Approved" ? "" : "font-primary-action"}
                                      />
                                    </div>
                                  </span>
                                </span>
                              ) : null}

                              {/* column 6: status */}
                              {
                                <span
                                  className={`timesheet-element-text  ${
                                    type === "primary" ? "col-2" : "col-2"
                                  }`}
                                >
                                  <div>
                                    <span className={`status-inline-block`}>
                                      <Typography
                                        key={index}
                                        text={workTime.status}
                                        size={"regular12"}
                                        color={
                                          workTime.status === "Approved"
                                            ? "font-green"
                                            : workTime.status === "Pending"
                                            ? "font-orange"
                                            : ""
                                        }
                                      />
                                    </span>

                                    {workTime.isEditedByEmployee ? (
                                      <span className="status-inline-block marginLeft4">
                                        <Icons
                                          className="Alert"
                                          icon={<Important className="Alert" key={index} />}
                                          size={"small"}
                                        />
                                      </span>
                                    ) : null}
                                  </div>
                                </span>
                              }
                            </div>
                          ))}
                      </span>
                    )}
                  </span>
                </div>
              </div>
            ))}
        </div>
        {this.renderModal()}
      </div>
    );
  }
}

export default TimesheetComponent;

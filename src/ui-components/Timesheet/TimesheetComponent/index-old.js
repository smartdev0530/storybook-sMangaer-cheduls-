import React, { Component } from "react";
import Checkbox from "../../Checkbox/Checkbox";
import Typography from "../../Typography/Typography";
import ModalPopup from "../../Modal";
import EditAction from "./EditAction";
import { ReactComponent as Edit } from "../../../assets/icons/icon/Pencil.svg";
import { ReactComponent as Important } from "../../../assets/icons/icon/iconRedImportant.svg";
import Icons from "../../Icons";
//import Overlay from "react-bootstrap/Overlay";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
//import Tooltip from "react-bootstrap/Tooltip";
import Popover from "react-bootstrap/Popover";

import "./styles.scss";

const popover = (props, type) => (
  <Popover>
    {props !== undefined && (
      <div className="tooltipDiv">
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
            <Typography text={`Edited Clock ${type} time : `} size={"semibold12"} color={"font-dark-blue"} />
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
class TimesheetComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      titleDate: "",
      workTimeDetails: "",
      selectedIndex: [],
      //type: "secondary",
      headerChecked: false,
    };
  }

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
            handleApproveTime={(data) => this.props.handleApproveTime(data)}
            workTimeDetails={this.state.workTimeDetails}
            type={this.props.type}
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
            this.state.selectedIndex.push(worktimeElement.id);
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
          {/* <div className="header-text col-6 "> */}
          <span className="header-text col-2 ">
            <Typography text={headerArray[0]} size="semibold14" />
          </span>
          <span className="header-text col-2">
            <Typography text={headerArray[1]} size="semibold14" />
          </span>

          <span className={`header-text ${type === "primary" ? "col-2" : "col-1"}`}>
            <Typography text={headerArray[2]} size="semibold14" />
          </span>
          {type !== "primary" ? (
            <span className="header-text col-1 margin-left-10">
              <Checkbox type="Normal" handleCheckClick={() => this.checkHeader(data)} />
            </span>
          ) : null}

          {/* </div> */}
          {/* <div classname="header-text col-6 "> */}
          <span className="header-text col-1">
            <Typography text={headerArray[3]} size="semibold14" />
          </span>
          <span className={`header-text ${type === "primary" ? "col-1" : "col-1"}`}>
            <Typography text={headerArray[4]} size="semibold14" />
          </span>
          <span className={`header-text ${type === "primary" ? "col-2" : "col-1"}`}>
            <Typography text={headerArray[5]} size="semibold14" />
          </span>
          {type !== "primary" ? (
            <span className="header-text col-2 margin-left-10">
              <Typography text={headerArray[6]} size="semibold14" />
            </span>
          ) : null}

          <span className={`header-text margin-left-20 ${type === "primary" ? "col-2" : "col-1"}`}>
            <Typography text={headerArray[7]} size="semibold14" />
          </span>
          {/* </div> */}
        </div>

        <div className="timesheet-body-div">
          {data &&
            data !== undefined &&
            data.map((dataElement, index) => (
              <div key={index} className="timesheet-element-wrapper-div">
                <div key={index} className="timesheet-element-div row">
                  {/* <div classname="col-6"> */}
                  <span className="element-text col-2">
                    <Typography text={dataElement.date} size="regular12" />
                  </span>

                  <span className="element-text col-2">
                    <Typography text={dataElement.regularHours} size="semibold16" />
                  </span>

                  <span className={`element-text ${type === "primary" ? "col-2" : "col-1"}`}>
                    <Typography text={dataElement.overtime} size="semibold16" />
                  </span>
                  {type !== "primary" ? (
                    <span className="element-text col-1">
                      {dataElement.worktimeDetails.map((ele, index) => (
                        <div className="checkbox">
                          <Checkbox
                            isChecked={this.state.headerChecked}
                            type="Normal"
                            handleCheckClick={() => this.checkBody(ele.id, index)}
                            isDisabled={ele.status === "Approved" ? true : false}
                          />
                        </div>
                      ))}
                    </span>
                  ) : null}
                  {/* </div> */}

                  {/* <div classname="col-6"> */}
                  <span className="element-text col-1">
                    {dataElement.worktimeDetails.length === 0 ? (
                      <Typography key={index} text={"-"} size={"semibold16"} />
                    ) : (
                      dataElement.worktimeDetails.map((c_in, index) => (
                        <OverlayTrigger
                          placement="bottom"
                          trigger={["hover", "focus"]}
                          overlay={popover(c_in.clockin, "in")}
                        >
                          <div className="line">
                            <Typography
                              key={index}
                              text={
                                c_in.clockin.isEditedByEmployee
                                  ? c_in.clockin.submittedTime
                                  : c_in.clockin.orignalTime
                              }
                              size={"regular12"}
                              color={c_in.clockin.isEditedByEmployee ? "font-red" : null}
                            />
                          </div>
                        </OverlayTrigger>
                      ))
                    )}
                  </span>

                  <span className="element-text col-1">
                    {dataElement.worktimeDetails.length === 0 ? (
                      <Typography key={index} text={"-"} size={"semibold16"} />
                    ) : (
                      dataElement.worktimeDetails.map((c_out, index) => (
                        <OverlayTrigger placement="bottom" overlay={popover(c_out.clockout, "out")}>
                          <div className="line">
                            <Typography
                              className="element-text line"
                              key={index}
                              text={
                                c_out.clockout.isEditedByEmployee
                                  ? c_out.clockout.submittedTime
                                  : c_out.clockout.orignalTime
                              }
                              size={"regular12"}
                              color={c_out.clockout.isEditedByEmployee ? "font-red" : null}
                            />
                          </div>
                        </OverlayTrigger>
                      ))
                    )}
                  </span>

                  <span className={`element-text ${type === "primary" ? "col-2" : "col-1"}`}>
                    {dataElement.worktimeDetails.length === 0 ? (
                      <Typography key={index} text={"-"} size={"semibold16"} />
                    ) : (
                      dataElement.worktimeDetails.map((ele, index) => {
                        const out_time_str =
                          ele.clockout.orignalTime === undefined ? "" : ele.clockout.orignalTime;
                        const in_time_str =
                          ele.clockin.orignalTime === undefined ? "" : ele.clockin.orignalTime;
                        const out_time = out_time_str.substring(0, out_time_str.length - 2);
                        const in_time = in_time_str.substring(0, in_time_str.length - 2);
                        const hours =
                          in_time_str === "" || out_time_str === ""
                            ? ""
                            : this.getSubstractTime(out_time, in_time);

                        return (
                          <div key={`workdetails ${index}`}>
                            <span className="hours">
                              <span className="hours line">
                                <Typography key={index} text={hours} size={"regular12"} />
                              </span>
                              <span className="Pencil">
                                {type === "primary" ? (
                                  <Icons
                                    className="Pencil"
                                    icon={
                                      <Edit
                                        className="Pencil"
                                        key={index}
                                        onClick={() => this.handleShowModal(dataElement.date, ele)}
                                      />
                                    }
                                    size={"small"}
                                    hover={true}
                                  />
                                ) : null}
                              </span>
                            </span>
                          </div>
                        );
                      })
                    )}
                  </span>

                  {type !== "primary" ? (
                    <span className="element-text col-2">
                      <span className="element-text margin-right-30 ">
                        {dataElement.worktimeDetails.length === 0 ? (
                          <div className="line2">
                            <Typography key={index} text={"-"} size={"semibold16"} />
                          </div>
                        ) : (
                          dataElement.worktimeDetails.map((c_out, index) => {
                            const status = c_out.status;

                            return (
                              <div
                                className="line2 cursorPointer"
                                onClick={() => {
                                  if (status !== "Approved") {
                                    let tempArray = [c_out.id];
                                    const approveIds = {
                                      ids: tempArray,
                                    };
                                    this.props.handleApproveTime(approveIds);
                                  }
                                }}
                              >
                                <Typography
                                  key={index}
                                  text={status === "Approved" ? "-" : "Approve"}
                                  size={"regular12"}
                                  color="font-primary-action"
                                />
                              </div>
                            );
                          })
                        )}
                      </span>
                      <span className="element-text">
                        {dataElement.worktimeDetails.length === 0 ? (
                          <div className="line2">
                            <Typography key={index} text={"-"} size={"semibold16"} />
                          </div>
                        ) : (
                          dataElement.worktimeDetails.map((c_out, index) => {
                            const status = c_out.status;

                            return (
                              <div className="line2 cursorPointer">
                                <Typography
                                  handleClick={
                                    status === "Approved"
                                      ? null
                                      : () => this.handleShowModal(dataElement.date, c_out)
                                  }
                                  key={index}
                                  text={status === "Approved" ? "-" : "Edit"}
                                  size={"regular12"}
                                  color="font-primary-action"
                                />
                              </div>
                            );
                          })
                        )}
                      </span>
                    </span>
                  ) : null}

                  <span
                    className={`element-text  ${
                      type === "primary" ? "col-1 margin-left-status" : "col-1 margin-left-5"
                    }`}
                  >
                    {dataElement.worktimeDetails.length === 0 ? (
                      <Typography key={index} text={"-"} size={"semibold16"} />
                    ) : (
                      dataElement.worktimeDetails.map((c_in, index) => {
                        const status = c_in.status;
                        const edited = c_in.isEditedByEmployee;
                        return (
                          <div className="statusLine">
                            <div className="status">
                              <Typography
                                key={index}
                                text={status}
                                size={"regular12"}
                                color={
                                  status === "Approved"
                                    ? "font-green"
                                    : status === "Pending"
                                    ? "font-orange"
                                    : ""
                                }
                              />
                            </div>

                            {edited ? (
                              <div className="Alert marginLeft4">
                                <Icons
                                  className="Alert"
                                  icon={<Important className="Alert" key={index} />}
                                  size={"small"}
                                />
                              </div>
                            ) : null}
                          </div>
                        );
                      })
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

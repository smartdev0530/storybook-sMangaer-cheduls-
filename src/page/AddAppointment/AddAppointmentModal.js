import React, { useEffect, useState, useContext, useMemo } from "react";
import Typography from "../../ui-components/Typography/Typography";
import RoundToggle from "../../ui-components/RoundToggle/RoundToggle";
import Button from "../../ui-components/Button/Button";
import ModalPopup from "../../ui-components/Modal/index";
import Checkbox from "../../ui-components/Checkbox/Checkbox";
import DatePicker from "../../ui-components/CustomDatePicker/";
import slotUrl from "../../assets/images/ComponentImage/calendar.png";
import AppointItem from "../../ui-components/AppointmentItem/AppointmentItem";
import Comment from "../../ui-components/Comment/Comment";
import ActionIcon from "../../ui-components/ActionIcon/ActionIcon";
import AddProcedureModal from "./AddProcedureModal";
import DateTimeLabel from "../../ui-components/DateTimeLabel/DateTimeLabel";
import DurationWithLabel from "../../ui-components/DurationWithLabel/DurationWithLabel";
import { ReactComponent as BookedIcon } from "../../assets/icons/icon/iconRedImportant.svg";
import Room from "../../ui-components/Room/Room";
import ChipGroup from "../../ui-components/ChipGroup/Index";
import "./style.scss";
import { facebookSignInButton } from "@aws-amplify/ui";
import { ProcedureContext } from "../../context/ProcedureContext";

const category = ["New Patient Exam", "Emergency", "Limited Exam", "Treatment Plan"];

const procedures = {
  0: ["CompEx", "4Bw", "Pro", "1PA", "1PA+", "Pano", "Paliative", "Fluoride"],
  1: ["LimEx", "Palliative"],
  2: ["CompEx", "4Bw", "Pro", "1PA", "1PA+", "Pano", "Paliative", "Fluoride"],
  3: ["#7 L Restoration", "#17 B/F Extraction"],
};

const start = { startHour: 9, startMin: 0, startAM: true };
const end = { endHour: 6, endMin: 0, endAM: false };
const customer = ["Dr.McCoy", "Dr. Swanson", "Dr. Pratt", "Dr. Wilson"];

const item = {
  start,
  end,
  customer,
};

const dataList = [item, item, item];

const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
const times = ["9AM - 12PM", "12PM - 3PM", "3PM - 6PM", "6PM - 9PM"];
const providers = [
  "Dr. McCoy",
  "Dr. Richards",
  "Dr. Black",
  "Dr. Floyd",
  "Dr. Pratt",
  "Dr. Sawyer",
  "Dr. Swanson",
  "Dr. Wilson",
];

const hygienists = ["Dr. White", "Dr. Matthew", "Dr. Sullivan", "Dr. Freud"];
const rooms = ["Room 1", "Room 2", "Room 3", "Room 4", "Room 5", "Room 6"];

function Step1({ setIndex, set1, addClicked, buttonStatus, setButtonStatus }) {
  const { currentProcedure, setCurrentProcedure, setCurrentCategory, currentCategory } =
    useContext(ProcedureContext);



  useEffect(() => {
    if (set1 === 0) {
      setCurrentCategory();
    }
    setCurrentCategory("New Patient Exam");
  }, []);

  const handleToggle = (index, item) => {
    setIndex(index);
    setCurrentCategory(item);
  };

  const addProcedure = () => {
    addClicked(true);
  };
  
  const selectedProcedures = useMemo(
    () => currentProcedure[currentCategory],
    [currentProcedure, currentCategory]
  );
  if (selectedProcedures === undefined) setCurrentProcedure({ ...currentProcedure, [currentCategory]: {} });

  const handleProcedureClick = (item) => {
    const status = selectedProcedures[item] === true;
    const newStatus = !status;
   
      const newProcedures = { ...selectedProcedures, [item]: newStatus };
      setCurrentProcedure({ ...currentProcedure, [currentCategory]: newProcedures });
 
  };

  return (
    <div style={{ paddingBottom: "24px" }}>
      <div style={{ marginBottom: "8px" }}>
        <Typography text={"Step 1"} size={"semibold12"} color="font-secondary-color"></Typography>
      </div>
      <Typography text={"Select Procedures"} size={"semibold14 "}></Typography>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <div>
          <div style={{ marginTop: "12px", display: "flex", flexDirection: "row" }}>
            <Typography text={"Category "} size={"regular10"}></Typography>
            <span style={{ fontSize: "10px" }}>&nbsp;</span>
            <Typography text={"*"} size={"regular10"} color="font-red"></Typography>
          </div>

          <div style={{ display: "flex", flexDirection: "row", paddingTop: "8px", flexWrap: "wrap" }}>
            {category.map((item, index) => {
              return (
                <div
                  style={{ margin: "2px 7px 2px 0" }}
                  key={index}
                  onClick={() => handleToggle(index, item)}
                >
                  <RoundToggle size="sm" label={item} type={set1 == index ? true : false} />
                </div>
              );
            })}
          </div>
        </div>
        <DurationWithLabel />
      </div>
      <div>
        <div style={{ marginTop: "12px", display: "flex", flexDirection: "row" }}>
          <Typography text={"Procedures"} size={"regular12"}></Typography>
          <span style={{ fontSize: "10px" }}>&nbsp;</span>
          <Typography text={"*"} size={"regular10"} color="font-red"></Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingTop: "8px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {procedures[set1].map((item) => {
            const bType = selectedProcedures && selectedProcedures[item] === true;
            return (
              <div style={{ margin: "2px 7px 2px 0" }} key={item} onClick={() => handleProcedureClick(item)}>
                <RoundToggle size="sm" label={item} type={bType}></RoundToggle>
              </div>
            );
          })}
          <ActionIcon type={"Add White"} handleAddProce={() => addProcedure()}></ActionIcon>
        </div>
      </div>
      <div style={{ marginTop: "16px" }}>
        <Comment
          title={"Comments"}
          titleSize={"regular10"}
          placeholder={
            "Please give brief overview of patient’s condition e.g. Broken tooth/ severe tooth pain/ etc."
          }
        ></Comment>
      </div>
    </div>
  );
}

export default function AddAppointment({ showModal, handleClose, handleAction }) {
  const [set1, setSet1] = useState(0);
  const [addClicked, setAddClicked] = useState(false);
  const [selected, setSelected] = useState(false);
  const [selectedItem, setSelectItem] = useState();
  const [scrollPos, setScrollPos] = useState(0);

  const handleSelect = (index) => (e) => {
    setSelectItem(index);
    setScrollPos(document.getElementById("schedule_panel").scrollTop);
  };

  const AppointmentList = () => {
    useEffect(() => {
      handleScrollPosition();
    }, [scrollPos]);

    const handleScrollPosition = () => {
      document.getElementById("schedule_panel").scrollTo(0, scrollPos);
    };

    return (
      <div>
        <div style={{ marginLeft: "10px" }}>
          <DateTimeLabel isActive={selected} />
        </div>
        {dataList.map((data, index) => (
          <div onClick={handleSelect(index + "a")} key={index}>
            <AppointItem
              start={data.start}
              end={data.end}
              customer={data.customer}
              isActive={selected}
              isSelect={selectedItem == index + "a" ? true : false}
            />
          </div>
        ))}
        <div style={{ marginLeft: "10px" }}>
          <DateTimeLabel isActive={selected} />
        </div>
        {dataList.map((data, index) => (
          <div onClick={handleSelect(index + "b")} key={index}>
            <AppointItem
              start={data.start}
              end={data.end}
              customer={data.customer}
              isActive={selected}
              isSelect={selectedItem == index + "b" ? true : false}
            />
          </div>
        ))}
        <div style={{ marginLeft: "10px" }}>
          <DateTimeLabel isActive={selected} />
        </div>
        {dataList.map((data, index) => (
          <div onClick={handleSelect(index + "c")} key={index}>
            <AppointItem
              start={data.start}
              end={data.end}
              customer={data.customer}
              isActive={selected}
              isSelect={selectedItem == index + "c" ? true : false}
            />
          </div>
        ))}
      </div>
    );
  };

  const handleCloseMododal = () => {
    setAddClicked(false);
  };

  const handleCheckClick = (status) => {
    if (status == "save") return setSelected(!selected);
  };

  const handleDate = () => {};

  console.log("times", times);

  const Treatment = () => {
    const [buttonStatus, setButtonStatus] = useState({});
    return (
      <div>
        <Step1
          setIndex={setSet1}
          set1={set1}
          addClicked={setAddClicked}
          buttonStatus={buttonStatus}
          setButtonStatus={setButtonStatus}
        ></Step1>
        <div className="treatment-container">
          <div style={{ marginBottom: "8px" }}>
            <Typography text={"Step 2"} size={"semibold12"} color="font-secondary-color"></Typography>
          </div>
          <Typography text={"Select Appointment Slot"} size={"semibold14"}></Typography>
          <div className="checked">
            <Checkbox handleCheckClick={() => handleCheckClick("save")} isChecked={selected} />
            <div style={{ marginTop: "8px" }}>
              <Typography text="Save in appointment holder" size="regular12" />
            </div>
          </div>
          <div style={{ marginTop: "16px" }}>
            <Typography text="Preferences" size="semibold12" />
          </div>
          <div className="treat-content">
            <div className="row1">
              <ChipGroup title="Days" names={days} size="rt_sm" selected={selected} type={false} />
              <ChipGroup title="Provider" names={providers} size="rt_nor" selected={selected} type={false} />
            </div>
            <div className="row2">
              <ChipGroup title="Time Slot" names={times} size="rt_nor" selected={selected} type={false} />
              <ChipGroup
                title="Hygienist"
                names={hygienists}
                size="rt_nor"
                selected={selected}
                type={false}
              />
            </div>
          </div>
          <div
            className="title"
            style={{
              marginTop: "28px",
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Typography text="Available Appointments from" size="semibold12" />
            <div style={{ height: "30px", width: "19%", marginLeft: "20px" }}>
              <DatePicker calendarType="single" handleChange={handleDate} />
            </div>
          </div>
          <div className="appointment-list" id="schedule_panel">
            <AppointmentList />
          </div>
          <div style={{ marginTop: "24px" }}>
            <div style={{ marginBottom: "8px" }}>
              <Typography text="Select Available Room" size="regular10" />
            </div>
            <div className="rooms">
              {rooms.map((item, index) => (
                <div className="room-btn" key={index}>
                  <Room
                    label={item}
                    size="rt_nor"
                    type={false}
                    isActive={selected}
                    icon={BookedIcon}
                    booked={index % 2 == 0}
                    isToggleEnable={index % 2 != 0}
                    tooltip={index % 2 == 0 ? "Already booked" : null}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="checked" style={{ marginTop: "19px" }}>
          <Checkbox handleCheckClick={handleCheckClick} />
          <div style={{ marginTop: "7px" }}>
            {" "}
            <Typography
              text="Send confirmation and appointment reminders to patients"
              size="regular12"
              color={selected ? "font-grey-light" : ""}
            />
          </div>
        </div>

        <AddProcedureModal show={addClicked} close={handleCloseMododal} />
      </div>
    );
  };

  return (
    <ModalPopup
      showModal={showModal}
      title="Add Procedures"
      size="lg"
      className={addClicked ? "custom-dialog2 " : ""}
      handleClose={handleClose}
      modalBody={<Treatment />}
      modalFooter={<Button label="Done" size="lg" handleClick={handleAction} />}
    ></ModalPopup>
  );
}

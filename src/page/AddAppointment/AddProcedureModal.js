import React, { useState, useEffect, useContext,useMemo } from "react";
import Typography from "../../ui-components/Typography/Typography";
import Table from "../../ui-components/Table";
import Button from "../../ui-components/Button/Button";
import ModalPopup from "../../ui-components/Modal/index";
import Chip from "../../ui-components/Chip/Chip";
import "./style.scss";
import ListDropDwon from "../../ui-components/ListItem/Index";
import { ReactComponent as CloseIcon } from "../../assets/icons/icon/Close.svg";

import { data as database } from "../../assets/dental-procedures.json";

import { ProcedureContext } from "../../context/ProcedureContext";

export default function AddProcedureModal({ show, close, action }) {
  const [idList, setIdList] = useState([]);
  const [procedures, setProcedures] = useState([]);

  const { currentProcedure, setCurrentProcedure, setCurrentCategory, currentCategory } =
  useContext(ProcedureContext);
  console.log("currentProcedure", currentProcedure);
  console.log("currentCategory", currentCategory);

  useEffect(() => {
    var list = [];
    for (var i = 0; i < database.length; i++) {
      list.push(false);
    }
  }, []);
  

  useEffect(() => {
   console.log('this is componetdidupdate')

  },[procedures]);

  useEffect(() =>{
   var tmp ={}
   var setlist =[]
    tmp = currentProcedure[currentCategory] &&currentProcedure[currentCategory]
    console.log('tmp',tmp)

    tmp &&  Object.entries(tmp).forEach(([key,value]) =>{
      if(value) {
        setlist.push(key)
      }
    })
    setProcedures(setlist)
  },[])


  const data = [
    { id: 1, tooth: "#2-MOD", code: 2150, des: "Root Canal Treatment", status: "Approved" },
    { id: 2, tooth: "#7-L", code: 1234, des: "Tooth coloured restoration - indirect", status: "N/A" },
    { id: 3, tooth: "#17 - B/F", code: 5678, des: "Extraction", status: "Approved" },
    { id: 4, tooth: "#22 - MOB", code: 1122, des: "Root Canal Treatment", status: "Pending" },
    { id: 5, tooth: "#2 - MOD", code: 2150, des: "Adhesive restoration – direct", status: "Approved" },
    { id: 6, tooth: "#7-L", code: 2134, des: "Root Canal Treatment", status: "N/A" },
    { id: 7, tooth: "#22 - MOB", code: 3212, des: "Extraction", status: "Approved" },
    { id: 8, tooth: "#2-MOD", code: 6443, des: "Tooth coloured restoration - indirect", status: "Denied" },
    { id: 9, tooth: "##17 - B/F", code: 1478, des: "Root Canal Treatment", status: "Pending" },
    { id: 10, tooth: "#2-MOD", code: 4225, des: "Adhesive restoration – direct", status: "Approved" },
    { id: 11, tooth: "#7-L", code: 7532, des: "Tooth coloured restoration - indirect", status: "N/A" },
    { id: 12, tooth: "#17 - B/F", code: 9066, des: "Extraction", status: "Approved" },
  ];

  const header = [
    { id: 0, sortable: false, text: "" },
    { id: 1, sortable: false, text: "Tooth - Surface" },
    { id: 2, sortable: false, text: "Code" },
    { id: 3, sortable: false, text: "Procedure Description" },
    { id: 4, sortable: false, text: "Insurance Status" },
  ];

  const column = ["tooth", "code", "des", "status"];
  const onNavigate = () => {};
  const onSort = () => {};
  const returnParentList = () => {};

  const handleCheckClick = (id) => {
    console.log(id);
    var checkList = idList;
    checkList[id] = !checkList[id];
    setIdList(checkList);

    console.log(checkList);
  };

  const selectedProcedures = useMemo(
    () => currentProcedure[currentCategory],
    [currentProcedure, currentCategory]
  );

  if (selectedProcedures === undefined) setCurrentProcedure({ ...currentProcedure, [currentCategory]: {} });
  const deleteItem = (item) => {
      const status = false;
      const newProcedures = { ...selectedProcedures, [item]: status };
      setCurrentProcedure({ ...currentProcedure, [currentCategory]: newProcedures });

      var tmp ={}
   var setlist =[]
    tmp = currentProcedure[currentCategory] &&currentProcedure[currentCategory]
    console.log('tmp',tmp)

    tmp &&  Object.entries(tmp).forEach(([key,value]) =>{
      if(value) {
        setlist.push(key)
      }
    })
    setProcedures(setlist)
    
  };

  const Content = () => {
    return (
      <div>
        <div className="procedure">
          <div className="subT1">
            <Typography size="semibold14" text="Select New Procedures" />
          </div>
          <div className="subT2">
            <ListDropDwon database={database} idList={idList} handleCheckClick={handleCheckClick} />
          </div>
          <div className="btn-groupB">
            {procedures &&
              procedures.map((item) => {
                return (
                  <div className="btnB" key={item}>
                    <Chip label={item} icon={CloseIcon} handleClick={() => deleteItem(item)} />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="procedure-container">
          <Typography size="semibold14" text="Select Procedures from Treatment Plan (12)" />

          <Table
            headerArray={header}
            columnField={column}
            data={data}
            returnParentList={returnParentList}
            onNavigate={onNavigate}
            onSort={onSort}
            selectedList={[1, 2, 3]}
          />
        </div>
      </div>
    );
  };

  return (
    <ModalPopup
      showModal={show}
      title="Add "
      size="lg"
      handleClose={close}
      className={"custom-dialog1"}
      modalBody={<Content />}
      modalFooter={<Button label="Done" size="lg" handleClick={action} />}
    ></ModalPopup>
  );
}

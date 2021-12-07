import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Checkbox from "../Checkbox/Checkbox";
import { ReactComponent as Message } from "../../assets/icons/icon/Message.svg";
import { ReactComponent as Email } from "../../assets/icons/icon/Email.svg";
import { ReactComponent as SortIcon } from "../../assets/icons/icon/sortDefault.svg";
import { ReactComponent as SortUpIcon } from "../../assets/icons/icon/sortAscending.svg";
import { ReactComponent as SortDownIcon } from "../../assets/icons/icon/sortDescending.svg";
import Icons from "../Icons";
import { copyToClipBoard } from "../../utils/formatString";
import Typography from "../Typography/Typography";
import PropTypes from "prop-types";
import "./styles.scss";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const CustomTable = ({
  headerArray,
  columnField,
  data,
  onNavigate,
  selectedList,
  returnParentList,
  onSort,
}) => {
  const [selectedColumn, setSelectedColumn] = useState(-1);
  const [selectedRecordList, setselectedRecordList] = useState(selectedList);
  const [sortOrder, setSortOrder] = useState("ascending");
  const [isAscending, setIsAscending] = useState(false);
  const [itemCopied, setItemCopied] = useState(false);
  const handleSortClick = (sortColumnName) => {
    setIsAscending(!isAscending);
    isAscending ? setSortOrder("ascending") : setSortOrder("descending");
    setSelectedColumn(sortColumnName);
    onSort(sortColumnName, sortOrder);
  };

  useEffect(() => {
    setselectedRecordList(selectedList);
  }, [selectedList]);

  const checkSelected = (emp, value) => {
    let selected = selectedRecordList;

    for (let i = 0; i < data.length; i++) {
      if (data[i].id === emp.id) {
        if (!value) {
          data[i].isChecked = false;
          const index = selected.indexOf(emp.id);
          if (index > -1) selected.splice(index, 1);
        } else {
          data[i].isChecked = true;
          selected.push(data[i].id);
        }
      }
    }
    setselectedRecordList(selected);
    returnParentList(selected);
  };

  return (
    <div className="table-wrapper">
      <Table hover className="table-main-container">
        <thead className="table-container">
          <tr className="tbl-head-section">
            {headerArray &&
              headerArray.map((element, index) => (
                <th
                  key={index}
                  className="main-heading cursorPointer table-main-header"
                  onClick={() => handleSortClick(element.sortColumnName)}
                >
                  <span
                    className={`table-header-text ${
                      selectedColumn === element.id ? "selected-table-header-text" : ""
                    }`}
                  >
                    <Typography text={element.text} size="semibold14" />
                  </span>
                  {element.sortable && (
                    <span className="table-header-sort-icon marginLeft4">
                      {element.sortColumnName !== selectedColumn ? (
                        <Icons icon={<SortIcon />} size={"mediumLarge"} />
                      ) : (
                        ""
                      )}
                      {isAscending && element.sortColumnName === selectedColumn ? (
                        <Icons size={"mediumLarge"} icon={<SortUpIcon />} />
                      ) : (
                        ""
                      )}
                      {!isAscending && element.sortColumnName === selectedColumn ? (
                        <Icons size={"mediumLarge"} icon={<SortDownIcon />} />
                      ) : (
                        ""
                      )}
                    </span>
                  )}
                </th>
              ))}
            {/* <th className="main-heading table-main-header"></th> */}
          </tr>
        </thead>
        {data.length === 0 && (
          <div className="emptyData">
            <Typography text={"No Records Found for selected criteria"} size="semibold14" />
          </div>
        )}
        <tbody className="tbl-row">
          {data &&
            data.map((dataElement, index) => (
              <tr className="tbl_cell_row" key={index}>
                <td className="tbl-cell">
                  <Checkbox
                    type="Normal"
                    isChecked={dataElement.isChecked}
                    handleCheckClick={(index) => {
                      checkSelected(dataElement, index);
                    }}
                  />
                </td>
                {columnField &&
                  columnField.map((element,index) => (
                    <td
                      className="tbl-cell table-cell cursorPointer" key= {index}
                      onClick={() => onNavigate(dataElement.id)}
                    >
                      <Typography text={dataElement[element]} size="regular12" />
                    </td>
                  ))}
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

CustomTable.propTypes = {
  headerArray: PropTypes.array,
  columnField: PropTypes.array,
};

export default CustomTable;

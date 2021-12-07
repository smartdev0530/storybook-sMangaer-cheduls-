import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import Checkbox from "../Checkbox/Checkbox";
import "./styles.scss";
import _ from "lodash";

function ListDropDwon({ database, idList, handleCheckClick }) {
  const [title, setTitle] = useState("D7140 Extraction, erupted tooth or exposed root");
  const [isDrop, setIsDrop] = useState(false);
  const [list, setList] = useState(database);

  const handleChange = (e) => {
    setIsDrop(true);
    setTitle(e.target.value);
    var desList = database;
    var key = e.target.value;
    var result = _.filter(desList, function (item) {
      return (
        item.name.indexOf(key) > -1 || item.simpleName.indexOf(key) > -1 || item.cdtCode.indexOf(key) > -1
      );
    });
    setList(result);
  };
  const handleClick = () => {
    setIsDrop(!isDrop);
  };
  return (
    <div className="list-dropdown-container">
      <div className="drop-down-container">
        <div className="list-title" onClick={handleClick}>
          <div className="small-title">
            <Typography text={"Select CDT Code - procedure  "} size={"regular10"}></Typography>
            <span style={{ fontSize: "10px" }}>&nbsp;</span>
            <Typography text={"*"} size={"regular10"} color="font-red"></Typography>
          </div>
          <div className="big-title">
            <input type="text" className="txt-input" value={title} onChange={handleChange} />
            {isDrop ? <span className="up-icon"></span> : <span className="down-icon"></span>}
          </div>
        </div>

        {isDrop ? (
          <div className="list-container">
            <div className="item-container">
              {list.map((item, index) => {
                return (
                  <div className="one-item" key={index}>
                    <div className="checked">
                      <Checkbox
                        handleCheckClick={() => handleCheckClick(item.id - 1)}
                        isChecked={idList[index]}
                      />
                    </div>
                    <div className="code">
                      <Typography text={item.cdtCode} size="regular12" />
                    </div>
                    <div className="des">
                      <Typography text={item.name} size="regular12" />
                    </div>
                    <div className="other">
                      <Typography text={item.simpleName} size="regular12" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

ListDropDwon.propTypes = {};
export default ListDropDwon;

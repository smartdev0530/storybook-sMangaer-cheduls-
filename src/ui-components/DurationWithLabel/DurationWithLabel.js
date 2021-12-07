import React from "react";
import Duration from "../Duration/Duration";
import Typography from "../Typography/Typography";
import "./styles.scss";

function DurationWithLabel({label="Duration"}) {
  return (
    <div>
      <div style={{marginBottom: '4px'}}><Typography text={label} size={`regular10`} /></div>
      <Duration/>
    </div>
  );
};

DurationWithLabel.propTypes = {
  
};

export default DurationWithLabel;

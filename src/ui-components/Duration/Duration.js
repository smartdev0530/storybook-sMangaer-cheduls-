import React from "react";
import "./styles.scss";

function Duration({}) {
  const [value, setValue] = React.useState("0:00");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onBlur = (event) => {
    const value = event.target.value;
    const minutes = Math.max(0, getMinutesFromHHMM(value));

    const time = toHHMM(minutes);
    setValue(time);
  };

  const getMinutesFromHHMM = (value) => {
    const [str1, str2] = value.split(":");

    const val1 = Number(str1);
    const val2 = Number(str2);

    if (!isNaN(val1) && isNaN(val2)) {
      return val1;
    }

    if (!isNaN(val1) && !isNaN(val2)) {
      return val1 * 60 + val2;
    }

    return 0;
  };

  const toHHMM = (mins) => {
    const minNum = parseInt(mins.toString(), 10);
    const hours = Math.floor(minNum / 60);
    const minutes = minNum % 60;

    return [hours, minutes]
      .map((val) => (val < 10 ? `0${val}` : val))
      .filter((val, index) => val !== "00" || index > 0)
      .join(":")
      .replace(/^0/, "");
  };

  return (
    <input type="text" className={`regular12`} onChange={onChange} onBlur={onBlur} value={value} />
  );
};

Duration.propTypes = {
  
};

export default Duration;

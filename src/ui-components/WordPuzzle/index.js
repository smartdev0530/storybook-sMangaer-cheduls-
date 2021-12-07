import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const WordPuzzle = (props) => {
  const data = props.data;

  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="transitionDiv">
      <p>{data[index % data.length]}</p>
    </div>
  );
};

WordPuzzle.propTypes = {
  props: PropTypes.array,
};

export default WordPuzzle;

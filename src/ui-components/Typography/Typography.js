import "./styles.scss";
function Typography({ text, size, color, handleClick }) {
  return (
    <div onClick={handleClick} className={`${size} ${color && color}`}>
      {text || "-"}
    </div>
  );
}

Typography.defaultProps = {
  color: "font-grey-dark",
};
export default Typography;

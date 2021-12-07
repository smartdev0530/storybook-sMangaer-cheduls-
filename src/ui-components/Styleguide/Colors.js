import "../../assets/styles/_color.scss";

function Colors({ className }) {
  return (
    <div>
      <div>
        <div>
          <i>This is an illustration of the Colors</i>
        </div>
        <div>
          <i>For applying this Color use Propertyname : ${className}</i>
        </div>
        <div>
          Example : <b>backgroundColor : ${className}</b>
        </div>
        <div className={`circle ${className}`}></div>
        <div>Refer only color, Border is given to illustrate a circle</div>
      </div>
    </div>
  );
}

export default Colors;

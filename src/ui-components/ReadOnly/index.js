import Typography from "../Typography/Typography";

function ReadOnlyInstructions() {
  return (
    <div>
      <Typography size="semiBold14" text="Grid Layout" />
      <ul>
        <li className="regular12">App is using Standard Bootstrap classes </li>
        <li className="regular12">Bootstrap basically works on classes: row and col classes</li>
        <li className="regular12">A row comprises of 12 columns i.e col-(n : 1 to 12) as childrens</li>
      </ul>
      <div className="row componentShadow">
        <div className="col-3 componentShadow">Col 3</div>
        <div className="col-5 componentShadow">Col 5</div>
        <div className="col-4 componentShadow">Col 4</div>
      </div>
      <Typography size="semiBold14" text="Margin and Padding Classes" />
      <ul>
        <li className="regular12">There are set of margin and padding classes defined in Base Stylesheet</li>
        <li className="regular12">Example : marginLeft10, marginRight10, etc</li>
        <li className="regular12">
          If there arises some not mentioned margin, Kindly first add margin classes and then use it
        </li>
        <li className="semibold12">
          Note: In some npm components, our margin class might not work and we need to override the npm
          component class, to match Figma, in that case we can use custom properties for that particular
          component
        </li>
      </ul>
    </div>
  );
}

export default ReadOnlyInstructions;

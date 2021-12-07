import { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import Select,{components} from 'react-select';


// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ]

// function Selector({ items=options, isClearable=true, isSearchable=false }) {
//   return <Select options={items} isClearable={isClearable} isSearchable={isSearchable}/>
// }

// Select.propTypes = {
//   items: PropTypes.array,
//   isClearable: PropTypes.bool,
//   isSearchable: PropTypes.bool,
// };

// export default Selector;
const Control = ({ children, ...rest }) => {
  console.log("control's children : ", rest)
  return <components.Control {...rest}>
    👍 {children}
  </components.Control>
};

const GoodSelect = props => <Select {...props} components={{ Control }} />

export default function Selector () {
  return (
    <>
      <GoodSelect >
        <div>Value</div>
      </GoodSelect>
    </>
  )
}

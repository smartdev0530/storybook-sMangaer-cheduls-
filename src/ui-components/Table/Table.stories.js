import CustomTable from "./index";
import { headerArray, columnField, data } from "../../constants/TableData";

export default {
  title: "Components/Table",
  component: CustomTable,
};

const Template = (args) => <CustomTable {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  headerArray: headerArray,
  columnField: columnField,
  data: data,
};

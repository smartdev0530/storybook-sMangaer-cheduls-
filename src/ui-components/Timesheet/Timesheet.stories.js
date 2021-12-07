import TimesheetComponent from "./TimesheetComponent";
import { headerArrayAction, dataJson } from "../../constants/TimesheetConstants";

export default {
  title: "Components/TimeSheetAction",
  component: TimesheetComponent,
};

const Template = (args) => <TimesheetComponent {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  headerArray: headerArrayAction,
  dataJson: dataJson,
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  headerArray: headerArrayAction,
  dataJson: dataJson,
};

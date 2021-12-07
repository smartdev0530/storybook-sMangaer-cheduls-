import DropDownWithoutLabel from ".";
import { Gender } from "./constant";

export default {
  title: "Components/DropDownWithoutLabel",
  component: DropDownWithoutLabel,
  argTypes: { handleChange: { action: "handleClick" } },
};

const Template = (args) => <DropDownWithoutLabel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "Enabled",
  data1: "Male",
  size: "mediumText",
  list: Gender,
};
export const Secondary = Template.bind({});
Secondary.args = {
  type: "Enabled",
  data1: "Male",
  size: "mediumText",
  list: Gender,
};

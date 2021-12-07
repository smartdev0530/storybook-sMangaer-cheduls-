import LargeDropdown from ".";
import { Gender } from "../DropDownWithoutLabel/constant";

export default {
  title: "Components/LargeDropdown",
  component: LargeDropdown,
  argTypes: { handleChange: { action: "handleClick" } },
};

const Template = (args) => <LargeDropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "Enabled",
  defaultValue: "Male",
  size: "largeText",
  list: Gender,
};
export const Secondary = Template.bind({});
Secondary.args = {
  type: "Disabled",
  defaultValue: "Male",
  size: "largeText",
  list: Gender,
};

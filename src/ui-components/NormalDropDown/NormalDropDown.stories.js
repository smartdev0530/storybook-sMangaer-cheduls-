import NormalDropDown from ".";
import { Gender } from "../DropDownWithoutLabel/constant";
import { Gender2 } from "../DropDownWithoutLabel/constant";

export default {
  title: "Components/NormalDropDown",
  component: NormalDropDown,
  argTypes: { handleChange: { action: "handleClick" } },
};

const Template = (args) => <NormalDropDown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "Enabled",
  defaultValue: "Male",
  size: "mediumText",
  list: Gender,
};
export const Secondary = Template.bind({});
Secondary.args = {
  type: "Enabled",
  defaultValue: "Male",
  size: "mediumText",
  list: Gender2,
};

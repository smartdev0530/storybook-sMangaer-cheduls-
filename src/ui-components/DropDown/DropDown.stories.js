import DropDown from "./DropDown";

export default {
  title: "Components/DropDown",
  component: DropDown,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <DropDown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "Enabled",
  label:"DropDown"
};

import Checkbox from "./Checkbox";
export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "Normal",
};

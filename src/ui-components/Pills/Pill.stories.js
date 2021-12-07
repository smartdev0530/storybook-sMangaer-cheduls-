import Pill from "./Pill";
export default {
  title: "Components/Pills",
  component: Pill,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Pill {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "pill - info",
  type: "info",
};

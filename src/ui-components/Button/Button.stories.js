import Button from "./Button";
export default {
  title: "Components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "Primary",
  label: "Button",
  size: "lg",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "Secondary",
  label: "Button",
  size: "lg",
};

export const Main = Template.bind({});
Main.args = {
  type: "Main",
  label: "Button",
  size: "lg",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: "Tertiary",
  label: "Button",
  size: "lg",
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: "Disable",
  label: "Button",
  size: "lg",
};

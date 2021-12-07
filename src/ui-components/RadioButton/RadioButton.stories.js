import RadioButton from "./RadioButton";
export default {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <RadioButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "select",
};

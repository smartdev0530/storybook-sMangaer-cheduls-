import TextField from "./TextField";
export default {
  title: "Components/Input Forms/Text Field",
  component: TextField,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <TextField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Name",
  varient: "Enable",
  value: "Data",
  defaultValue: "textbox",
};

import TextFieldWithoutLabel from ".";
export default {
  title: "Components/Input Forms/Text ",
  component: TextFieldWithoutLabel,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <TextFieldWithoutLabel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Name",
  size: "mediumText",
};

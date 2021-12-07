import ActionIcon from "./ActionIcon";
export default {
  title: "Components/Action Icon",
  component: ActionIcon,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <ActionIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "Add",
};

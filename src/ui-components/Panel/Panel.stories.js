import Panel from "./index";

export default {
  title: "Components/Panel",
  component: Panel,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Panel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "title",
  rightContent: "rightContent",
  children: "children",
  customContentClass: "",
};

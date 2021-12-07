import RoundToggle from "./RoundToggle";
export default {
  title: "Components/RoundToggle",
  component: RoundToggle,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <RoundToggle {...args} />;

export const Selected = Template.bind({});
Selected.args = {
  type: true,
  label: "Toggle",
  size: "sm",
};

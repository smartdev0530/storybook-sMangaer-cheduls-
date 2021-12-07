import Room from "./Room";
export default {
  title: "Components/Room",
  component: Room,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Room {...args} />;

export const Selected = Template.bind({});
Selected.args = {
  type: true,
  label: "Toggle",
  size: "sm",
};

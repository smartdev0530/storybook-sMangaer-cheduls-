import HolderCard from ".";

export default {
  title: "Components/Appointment Holder Cards",
  component: HolderCard,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <HolderCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "John Jacobs",
  time: "1",
};

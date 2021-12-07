import Insurance from "./Insurance";

export default {
  title: "Components/Insurance",
  component: Insurance,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Insurance {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  open: true,
  status: 'Verified'
};



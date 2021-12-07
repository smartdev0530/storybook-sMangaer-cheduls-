import Guardians from "./Guardians";

export default {
  title: "Components/Guardians",
  component: Guardians,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Guardians {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  open: true,
  status: 'Error'
};



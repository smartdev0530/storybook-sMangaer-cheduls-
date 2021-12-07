import Appointments from "./Appointments";

export default {
  title: "Components/Appointments",
  component: Appointments,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Appointments {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  open: true,
  status: 'Error'
};



import AppointmentDetail from "./AppointmentDetail";

export default {
  title: "Components/AppointmentDetail",
  component: AppointmentDetail,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <AppointmentDetail {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  open: true,
  status: 'Enabled'
};



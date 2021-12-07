import AppointmentDetailTimes from "./AppointmentDetailTimes";

export default {
  title: "Components/AppointmentDetailTimes",
  component: AppointmentDetailTimes,
  argTypes: { 
    handleEditClick: { action: "handleClick" },
    handleDeleteClick: { action: "handleClick" } 
    },
};

const Template = (args) => <AppointmentDetailTimes {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  date: "Thursday, April 26 2021",
  times:"10AM - 12PM"
};



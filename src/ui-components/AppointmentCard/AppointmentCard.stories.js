import AppointmentCard from ".";

export default {
  title: "Components/Appointment Card",
  component: AppointmentCard,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <AppointmentCard {...args} />;

export const Ongoing = Template.bind({});

Ongoing.args = {
  status: "ongoing",
  patientName: "Patient Name",
  procedure: "Procedure",
  doctorName: "Doctor 1",
  time: "120",
};

export const Complete = Template.bind({});

Complete.args = {
  status: "completed",
  patientName: "Patient Name",
  procedure: "Procedure",
  doctorName: "Doctor 1",
  time: "120",
};

export const Arrived = Template.bind({});

Arrived.args = {
  status: "arrived",
  patientName: "Patient Name",
  procedure: "Procedure",
  doctorName: "Doctor 1",
  time: "120",
};

export const Confirmed = Template.bind({});

Confirmed.args = {
  status: "confirmed",
  patientName: "Patient Name",
  procedure: "Procedure",
  doctorName: "Doctor 1",
  time: "120",
};

export const Reminder = Template.bind({});

Reminder.args = {
  status: "reminder",
  patientName: "Patient Name",
  procedure: "Procedure",
  doctorName: "Doctor 1",
  time: "120",
};

export const Unconfirmed = Template.bind({});

Unconfirmed.args = {
  status: "unconfirmed",
  patientName: "Patient Name",
  procedure: "Procedure",
  doctorName: "Doctor 1",
  time: "120",
};

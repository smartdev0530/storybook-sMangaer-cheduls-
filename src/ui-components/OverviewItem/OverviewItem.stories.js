import OverviewItem from "./OverviewItem";
import {
  renderThreePeople,
  renderAppointmentIcon,
  renderErrorIcon,
  renderDataPendingIcon,
} from "../../constants/OverviewItemUtils";

export default {
  title: "Components/Overview Item Card",
  component: OverviewItem,
  //argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <OverviewItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  number: 378,
  text: "Contextual text",
  textColor: "default",
  displayIcon: renderThreePeople,
};

export const Appointment = Template.bind({});
Appointment.args = {
  number: 378,
  text: "Contextual text",
  textColor: "default",
  displayIcon: renderAppointmentIcon,
};

export const Error = Template.bind({});
Error.args = {
  number: 378,
  text: "Contextual text",
  textColor: "default",
  displayIcon: renderErrorIcon,
};

export const DataPending = Template.bind({});
DataPending.args = {
  number: 378,
  text: "Contextual text",
  textColor: "default",
  displayIcon: renderDataPendingIcon,
};

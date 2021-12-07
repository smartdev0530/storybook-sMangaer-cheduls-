import AppointmentDetailStatusToast from "./AppointmentDetailStatusToast";
import {ReactComponent as Icon} from '../../assets/icons/icon/Pregnant.svg';
export default {
  title: "Components/AppointmentDetailStatusToast",
  component: AppointmentDetailStatusToast,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <AppointmentDetailStatusToast {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: null,
  status: "Patient Confirmed",
  active: true
};
export const NormalWithIcon = Template.bind({});
NormalWithIcon.args = {
  icon: Icon,
  label: "Patient is pregnant | Due 09/23/2021",
  status: "Patient Confirmed",
  active: true
};



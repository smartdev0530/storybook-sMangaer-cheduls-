import PatientGuardian from "./PatientGuardian";
import { ReactComponent as ProfilePic } from "../../assets/icons/noneIcon/TheresaWebb.svg";
export default {
  title: "Components/PatientGuardian",
  component: PatientGuardian,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <PatientGuardian {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  avatar: ProfilePic,
  name: "Theresa Web",
  relation: "Mother",
  number: "(217)-787-4515"
};

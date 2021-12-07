import PatientBlurbCard from ".";
import { ReactComponent as ProfilePic } from "../../assets/icons/noneIcon/profilePic1.svg";
export default {
  title: "Components/Patient Blurb Card",
  component: PatientBlurbCard,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <PatientBlurbCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  pic: <ProfilePic />,
  name: "Theresa Web",
  age: "35",
  gender: "F",
  number: "(217)-787-4515",
  size: "largeCard",
  amount: "234",
};

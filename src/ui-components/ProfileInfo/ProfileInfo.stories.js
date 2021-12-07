import ProfileInfo from "./ProfileInfo";
export default {
  title: "Components/Profile Info Card",
  component: ProfileInfo,
  //argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <ProfileInfo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "lg",
  profilePicture: "",
  name: "Arlene McCoy",
  email: "arlene1234@gmail.com",
  jobProfile: "Associate Dentist",
  age: 35,
};

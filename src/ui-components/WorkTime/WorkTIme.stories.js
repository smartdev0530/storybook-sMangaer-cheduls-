import WorkTime from ".";
export default {
  title: "Components/Work Time",
  component: WorkTime,
};

const Template = (args) => <WorkTime {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  lable: "Weekly Total Working Hours",
  time: "31:30",
};

export const Secondry = Template.bind({});
Secondry.args = {
  lable: "Monthly Total Working Hours",
  time: "130",
};

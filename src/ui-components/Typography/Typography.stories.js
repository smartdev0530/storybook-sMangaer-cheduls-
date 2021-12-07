import Typography from "./Typography";

export default {
  title: "Styleguide/Typography",
  component: Typography,
};

const Template = (args) => <Typography {...args} />;

export const SemiBold24 = Template.bind({});
SemiBold24.args = {
  size: "semibold24",
  text: "I'm Open Sans Semibold 24px",
};

export const SemiBold16 = Template.bind({});
SemiBold16.args = {
  size: "semibold16",
  text: "I'm Open Sans Semibold 16px",
};
export const SemiBold14 = Template.bind({});
SemiBold14.args = {
  size: "semibold14",
  text: "I'm Open Sans Semibold 14px",
};

export const SemiBold12 = Template.bind({});
SemiBold12.args = {
  size: "semibold12",
  text: "I'm Open Sans Semibold 12px",
};
export const SemiBold10 = Template.bind({});
SemiBold10.args = {
  size: "semibold10",
  text: "I'm Open Sans Semibold 10px",
};

export const Regular16 = Template.bind({});
Regular16.args = {
  size: "regular16",
  text: "I'm Open Sans Regular 16px",
};
export const Regular14 = Template.bind({});
Regular14.args = {
  size: "regular14",
  text: "I'm Open Sans Regular 14px",
};
export const Regular12 = Template.bind({});
Regular12.args = {
  size: "regular12",
  text: "I'm Open Sans Regular 12px",
};
export const Regular10 = Template.bind({});
Regular10.args = {
  size: "regular10",
  text: "I'm Open Sans Regular 10px",
};

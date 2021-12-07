import DateTimeLabel from "./DateTimeLabel";
export default {
  title: "Components/DateTimeLabel",
  component: DateTimeLabel,
  // argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <DateTimeLabel {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: "Monday, April 12"
};




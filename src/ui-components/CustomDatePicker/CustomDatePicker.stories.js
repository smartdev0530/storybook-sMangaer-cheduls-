import CustomDatePicker from "./index";

export default {
  title: "Components/Date Picker",
  component: CustomDatePicker,
  argTypes: { handleChange: { action: "handleClick" } },
};

const Template = (args) => (
  <div style={{ width: "200px", height: "30px" }}>
    <CustomDatePicker {...args} />
  </div>
);
export const SingleCalendar = Template.bind({});
SingleCalendar.args = {
  calendarType: "single",
};

export const DoubleCalendar = Template.bind({});
DoubleCalendar.args = {
  calendarType: "double",
};
export const SingleCalendarWithLabel = Template.bind({});
SingleCalendarWithLabel.args = {
  calendarType: "singleWithLabel",
  topLabel: "text",
};

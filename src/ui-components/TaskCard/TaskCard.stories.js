import TaskCard from ".";

export default {
  title: "Components/Task Cards",
  component: TaskCard,
  argTypes: { handleClick: { action: "handleClick" } },
};
const Template = (args) => <TaskCard {...args} />;

export const FrontOffice = Template.bind({});
FrontOffice.args = {
  role: "frontOffice",
  task: "Task",
  date: "5 Apr",
};
export const Private = Template.bind({});
Private.args = {
  role: "private",
  task: "Task",
  date: "5 Apr",
};
export const Shared = Template.bind({});
Shared.args = {
  role: "shared",
  task: "Task",
  date: "5 Apr",
};

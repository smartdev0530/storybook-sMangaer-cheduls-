import Comment from "./Comment";
export default {
  title: "Components/Comment",
  component: Comment,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Comment {...args} />;

export const Selected = Template.bind({});
Selected.args = {
  type: "Selected",
  label: "Comment",
  size: "lg",
};
import MedialHistory from "./MedialHistory";

export default {
  title: "Components/MedialHistory",
  component: MedialHistory,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <MedialHistory {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  open: true,
  status: 'Error'
};



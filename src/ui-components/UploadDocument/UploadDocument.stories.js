import UploadDocument from "./UploadDocument";
export default {
  title: "Components/Upload Document",
  component: UploadDocument,
  //argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <UploadDocument {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "sm",
};

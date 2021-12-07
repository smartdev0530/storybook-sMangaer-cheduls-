import DocumentViewer from ".";

export default {
  title: "Components/Document Viewer",
  component: DocumentViewer,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <DocumentViewer {...args} />;

export const Normal = Template.bind({});

Normal.args = {
  name: "File Name",
  src: "www.google.com",
  width: "1020",
  height: "746",
};

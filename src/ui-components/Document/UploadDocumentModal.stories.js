import FileUploadModal from "./FileUploadModal";
// import { Folder } from "./constatnts";

export default {
  title: "Components/File Upload Modal",
  component: FileUploadModal,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <FileUploadModal {...args} />;

export const Normal = Template;

import Documents from ".";
import { File1, File2, File3, Folder } from "./constatnts";
import { RadioList } from "../RadioWithIcon/constants";

export default {
  title: "Components/Documents",
  component: Documents,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Documents {...args} />;

export const Normal = Template.bind({});

Normal.args = {
  name: "File Name",
  src: "www.google.com",
  width: "1020",
  height: "746",
  list: Folder,
  radioList: RadioList,
  children: [1, 2, 3],
  privacy: true,
  fileList: File1,
};

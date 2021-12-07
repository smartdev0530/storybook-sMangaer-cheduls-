import UploadItems from "./UploadItems";

export default {
  title: "Components/UploadItems",
  component: UploadItems,
};

const uploadList = [
  {
    fileName: "fileOne.exe",
    status: 2,
    percent: 100,
    size: "2mb",
  },
  {
    fileName: "fileTwo.exe",
    status: 0,
    percent: 0,
    size: "5mb",
  },
  {
    fileName: "fileThree.exe",
    status: 1,
    percent: 20,
    size: "65mb",
  },
];

const Template = (args) => <UploadItems {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  uploadList: uploadList,
};

import Icons from ".";
import { ReactComponent as Download } from "../../assets/icons/icon/CancelGreen.svg";

export default {
  title: "Components/Icons Viewer",
  component: Icons,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Icons {...args} />;

export const Normal = Template.bind({});

Normal.args = {
  icon: <Download />,
  size: "large",
  hover: true,
  tooltip: "746",
};

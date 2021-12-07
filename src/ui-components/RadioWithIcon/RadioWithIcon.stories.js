import RadioButtonWithIcon from ".";
import { RadioList } from "./constants";
export default {
  title: "Components/Radio Button With Icon",
  component: RadioButtonWithIcon,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <RadioButtonWithIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "select",
  list: RadioList,
  name: "privacy",
};

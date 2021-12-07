import Chip from "./Chip";
import {ReactComponent as CloseIcon} from '../../assets/icons/icon/Close.svg'
export default {
  title: "Components/Chip",
  component: Chip,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Chip {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: "Chip",
  isActive: false,
  isRoundType: true
};

export const NormalWithIcon = Template.bind({});
NormalWithIcon.args = {
  label: "Chip With Icon ",
  icon: CloseIcon,
  isActive: false,
  isRoundType: true
};



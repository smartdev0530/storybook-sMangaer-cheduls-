import ButtonGroup from "./ButtonGroups";
export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <ButtonGroup {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "hslot",
  label: "Button",
  size: "sm",
  list:[{name:'Button1',checked:true},{name:'Button2',checked:false},{name:'Button3',checked:true}]
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "day",
  label: "Button",
  size: "sm",
  list:[{name:'Mon',checked:true},{name:'Tues',checked:false},{name:'Wed',checked:true},{name:'Thurs',checked:true},{name:'Fri',checked:false},{name:'Sat',checked:true}]
};



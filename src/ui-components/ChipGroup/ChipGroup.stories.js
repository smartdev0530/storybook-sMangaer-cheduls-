import ChipGroup from "./Index";

export default {
  title: "Components/ChipGroup",
  component: ChipGroup,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <ChipGroup {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    type:false ,
    names:['Mon','Tues','Wed','Thurs','Fri','Sat','Sun'],
    selected :'',
    title:'Days',
    size:'rt_nor'
};

import Selector from "./Selector";

export default {
  title: "Components/Selector",
  component: Selector,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Selector {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  items: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ],
  isClearable: true,
  isSearchable: false,
};

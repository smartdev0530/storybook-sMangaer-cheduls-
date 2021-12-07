import SearchField from "./SearchField";

export default {
  title: "Components/Search Field",
  component: SearchField,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <SearchField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Search patient",
  type: "Primary",
};

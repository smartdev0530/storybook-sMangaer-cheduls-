import SearchDropDownNotRequired from ".";

export default {
  title: "Components/Search DropDown Not Required",
  component: SearchDropDownNotRequired,
  argTypes: { handleClick: { action: "handleClick" } },
};

const renderList = ["Father", "Mother", "Spouse", "Brother", "Sister"];

const Template = (args) => <SearchDropDownNotRequired {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Relationship with Patient",
  placeholder: "Select relationship e.g. Spouse",
  renderList: renderList,
  type: "Default",
};

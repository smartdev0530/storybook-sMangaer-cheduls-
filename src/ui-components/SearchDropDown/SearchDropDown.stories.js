import SearchDropDown from "./SearchDropDown";

export default {
  title: "Components/Search DropDown",
  component: SearchDropDown,
  argTypes: { handleClick: { action: "handleClick" } },
};

const renderList = ["Father", "Mother", "Spouse", "Brother", "Sister"];

const Template = (args) => <SearchDropDown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Relationship with Patient",
  placeholder: "Select relationship e.g. Spouse",
  renderList: renderList,
  type: "Default",
};

import CustomAccordion from "./CustomAccordion";
export default {
  title: "Components/Accordion",
  component: CustomAccordion,
  //argTypes: { handleClick: { action: "handleClick" } },
};

const accordionList = [
  {
    title: "Title 1",
    subList: ["Value 1", "Value 2", "Value 3", "Value 4", "Value 5"],
  },
  {
    title: "Title 2",
    subList: ["Value 1", "Value 2", "Value 3", "Value 4", "Value 5"],
  },
  {
    title: "Title 3",
    subList: ["Value 1", "Value 2", "Value 3", "Value 4", "Value 5"],
  },
];

const Template = (args) => <CustomAccordion {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "list",
  icon: "edit",
  accordionList: accordionList,
};

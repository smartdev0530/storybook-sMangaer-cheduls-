import PatientBlurb from "./PatientBlurb";

export default {
  title: "Components/PatientBlurb",
  component: PatientBlurb,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <PatientBlurb {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};



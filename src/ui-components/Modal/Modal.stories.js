import ModalPopup from ".";

export default {
  title: "Components/ModalPopup",
  component: ModalPopup,
  argTypes: { handleClose: { action: "handleClick" } },
};
const Template = (args) => <ModalPopup {...args} />;

export const ModalTrue = Template.bind({});

ModalTrue.args = {
  title: "Header",
  showModal: true,
  size: "xl",
  modalBody: "Body",
  modalFooter: "Footer",
};
export const ModalFalse = Template.bind({});

ModalFalse.args = {
  title: "Header",
  showModal: false,
  size: "xl",
  modalBody: "Body",
  modalFooter: "Footer",
};

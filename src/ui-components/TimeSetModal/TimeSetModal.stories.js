import TimeSetModal from ".";

export default {
  title: "Components/TimeSetModal",
  component: TimeSetModal,
  argTypes: { handleClose: { action: "handleClick" } },
};
const Template = (args) => <TimeSetModal {...args} />;

export const ModalTrue = Template.bind({});
ModalTrue.args = {
  showModal: true,
  type: 'In',
  time: '9:02 AM',
  isComment: false,
  handleClose: ()=>{},
  handleOk: ()=>{},
  handleCancel: ()=>{}
};


import DeleteAppointmentModal from ".";

export default {
  title: "Components/DeleteAppointmentModal",
  component: DeleteAppointmentModal,
  argTypes: { handleClose: { action: "handleClick" } },
};
const Template = (args) => <DeleteAppointmentModal {...args} />;

export const ModalTrue = Template.bind({});
ModalTrue.args = {
  showModal: true,
  handleClose: ()=>{},
  handleOk: ()=>{},
  handleCancel: ()=>{}
};


import React from "react";
import { Modal } from "react-bootstrap";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import PropTypes from "prop-types";
import "./styles.scss";

const head = 'Are you sure you want to delete this appointment?';
const desc='If you confirm, all procedures and other data linked to this appointment will be permanently deleted from the appointment holder.';
const instruction = 'Do not show this message again.';
function DeleteAppointmentModal({ showModal, handleClose, handleOk, handleCancel }) {
  return (
    <div>
      <Modal show={showModal} onHide={handleClose} >
        <Modal.Body >
          <Typography text={head} size="semibold14" color="font-black" /> 
          <Typography text={desc} size="regular12" color="font-black" />
          <div className="d-flex justify-content-around button-group">
            <Button label='Cancel' type="Secondary" color size="sm" handleClick={()=>{handleClose();handleCancel()}} width={120} />
            <Button label='Ok' type="Primary" color size="sm" handleClick={()=>{handleClose();handleOk()}} width={120} />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Checkbox handleCheckClick={()=>{}} />
            <Typography text={instruction} size="regular12" color="font-black" />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
DeleteAppointmentModal.propTypes = {
  showModal: PropTypes.bool,
  handleClose: PropTypes.func,
  handleOk: PropTypes.func,
  handleCancel: PropTypes.func
};
export default DeleteAppointmentModal;

import React from "react";
import { Modal } from "react-bootstrap";
import Typography from "../Typography/Typography";
import PropTypes from "prop-types";
import { ReactComponent as Close } from "../../assets/icons/icon/CancelGreen.svg";
import Icons from "../Icons";
import "./styles.scss";

function ModalPopup({ showModal, modalBody, title, modalFooter, handleClose, size, type, className }) {
  return (
    <div>
      <Modal show={showModal} onHide={handleClose} size={size} className={className ? className : ""} dialogClassName={className}>
        {title ? (
          <Modal.Header>
            <Modal.Title>
              <Typography text={title} size="semibold16" />
            </Modal.Title>
          </Modal.Header>
        ) : null}
        <span onClick={handleClose}>
          {title ? <Icons className="closeIcon" icon={<Close />} size={"mediumLarge"} hover={false} /> : null}
        </span>
        <Modal.Body className={className ? className : ""}>{modalBody}</Modal.Body>
        {modalFooter && <Modal.Footer >{modalFooter}</Modal.Footer>}
      </Modal>
    </div>
  );
}
ModalPopup.propTypes = {
  size: PropTypes.string,
  title: PropTypes.string,
  modalBody: PropTypes.object,
  modalFooter: PropTypes.object,
  showModal: PropTypes.bool,
};
export default ModalPopup;

import React from "react";
import { Modal } from "react-bootstrap";
import Typography from "../Typography/Typography";
import { ReactComponent as ClockImage } from '../../assets/icons/icon/ClockImg.svg';
import { ReactComponent as PencilSvg} from '../../assets/icons/icon/Pencil.svg';
import { ReactComponent as CloseSvg} from '../../assets/icons/icon/Close.svg';
import Button from "../Button/Button";
import PropTypes from "prop-types";
import Icons from "../Icons";
import "./styles.scss";

function TimeSetModal({ showModal, type='In', time='9:02 AM', isComment=false,  handleClose, handleOk, handleCancel }) {
  const body = isComment 
      ? <Modal.Body >
          <div className="d-flex time-set-close">
            <Icons icon={<CloseSvg className="icon" />} size={"small"} hover={false} /> 
          </div>
          <div className="d-flex justify-content-between align-items-center time-set-wrapper">
            <div className="d-flex flex-column justify-content-center">
              <Typography text={`Clock ${type==='In' ? 'in': 'out'} time`} size="semibold14" color="font-white" />
              <div className="time-comment" >
                <Typography text={time} size="regular24" color="font-white" />
              </div>
            </div>
            <ClockImage />
          </div>
          <textarea className="time-set-comment" placeholder="Write a comment... (*Required)" />
          <div className="d-flex justify-content-around button-group-comment">
            <Button label='Cancel' type="Secondary" color size="sm" handleClick={()=>{handleClose();handleCancel()}} />
            <Button label='Send edit request' type="Primary" color size="sm" handleClick={()=>{handleClose();handleOk()}} />
          </div>          
        </Modal.Body>
      : <Modal.Body >
          <div className="d-flex justify-content-end">
            <div className="d-flex time-set-top">
              <Icons icon={<PencilSvg className="icon" />} size={"small"} hover={false} /> 
              <Icons icon={<CloseSvg className="icon" />} size={"small"} hover={false} /> 
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column justify-content-center">
              <Typography text={`Clock ${type==='In' ? 'in': 'out'} time`} size="semibold14" color="font-white" /> 
              <Typography text={time} size="regular24" color="font-white" />
            </div>
            <ClockImage />
          </div>
          <div className="d-flex justify-content-around button-group">
            <Button label='Cancel' type="Secondary" color size="sm" handleClick={()=>{handleClose();handleCancel()}} />
            <Button label='Confirm' type="Primary" color size="sm" handleClick={()=>{handleClose();handleOk()}} />
          </div>          
        </Modal.Body>
  return (
    <div>
      <Modal show={showModal} onHide={handleClose} >
        {body}
      </Modal>
    </div>
  );
}
TimeSetModal.propTypes = {
  showModal: PropTypes.bool,
  type: PropTypes.oneOf(['In', 'Out']),
  time: PropTypes.string,
  isComment: PropTypes.bool,
  handleClose: PropTypes.func,
  handleOk: PropTypes.func,
  handleCancel: PropTypes.func
};
export default TimeSetModal;

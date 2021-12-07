import React ,{useEffect, useState} from "react";
import Button from "../ui-components/Button/Button";
import "./style.scss";
import url from "../assets/images/ComponentImage/undraw_schedule_meeting_52nu 1.svg";
import Typography from "../ui-components/Typography/Typography";
import ModalPopup from "../ui-components/Modal/index";

export default function Message({showMessage,onStayAction}) {

  // const [show,setShow] = useState();

  // const onStayAction =() =>{
    
  //   setShow(false)
  // }
  // useEffect(() =>{
  //   console.log('this is useEffect funciton')
  //   setShow(showMessage)
  // },[show]);
  return (
    <ModalPopup
      showModal={showMessage}
      handleClose={onStayAction}
      modalBody={
        <div className="message-modal">
          <div className="message_img">
            <img src={url} />
          </div>
          <div className="message-status">
            <Typography text="Appointment Created" color="$secondary-color" size="semibold24" />
          </div>
          <div className="button-groupC">
            <div className="button-left">
              <Button label="Stay on current page" size="fit" type="Secondary" handleClick={onStayAction}/>
            </div>
            <div className="button-right">
              <Button label="View on Schedule" size="fit" handleClick={onStayAction}/>
            </div>
          </div>
        </div>
      }
    ></ModalPopup>
  );
}

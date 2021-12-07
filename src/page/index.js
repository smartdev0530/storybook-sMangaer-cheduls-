import React, { useState } from "react";
import Header from "./Header";
import Message from "./Message";
import AddAppointmentModal from "./AddAppointment/AddAppointmentModal";
import "bootstrap/dist/css/bootstrap.css";

import { ProcedureContextProvider } from "../context/ProcedureContext";

export default function Index() {
  const [showModal, setShowModal] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };
  const ShowMessage = () => {
    setShowModal(false);
    setShowMessage(true);
  };
  const handleMessageClose = () => {
    setShowMessage(false);
  };

  return (
    <div>
      <ProcedureContextProvider>
        <Header add={setShowModal} />
        <AddAppointmentModal showModal={showModal} handleClose={handleClose} handleAction={ShowMessage} />
        {showMessage ? <Message showMessage={showMessage} onStayAction={handleMessageClose} /> : ""}
      </ProcedureContextProvider>
    </div>
  );
}

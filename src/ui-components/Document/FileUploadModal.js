import React, { useState } from "react";
import ModalPopup from "../Modal";
import UploadModalBody from "./UploadModalBody";
import { Folder } from "./constatnts";

const FileUploadModal = ({
  showFileModal,
  showFileModalfun,
  folderList,
  uploadFile,
  empId,
  deleteFileData,
  uploadFileData,
  deleteDocument,
  callbackMessage,
  fetchFolder,
}) => {
  const [showDelete, setShowDelete] = useState(false);
  return (
    <div>
      <ModalPopup
        size="md"
        modalBody={
          <UploadModalBody
            folderList={folderList}
            uploadFile={uploadFile}
            empId={empId}
            uploadFileData={uploadFileData}
            deleteDocument={deleteDocument}
            callbackMessage={callbackMessage}
            deleteFileData={deleteFileData}
            handleUploadButton={() => {
              setShowDelete(false);
              showFileModalfun(false);
            }}
            fetchFolder={fetchFolder}
          />
        }
        title="Upload Files"
        showModal={showFileModal}
        type="addEmployee"
        //handleClose={() => setShowDetails(false)}
        handleClose={() => {
          setShowDelete(false);
          showFileModalfun(false);
        }}
      />
    </div>
  );
};

export default FileUploadModal;

import React, { useState } from "react";
import Typography from "../Typography/Typography";
import UploadDocument from "../UploadDocument/UploadDocument";
import NormalDropDown from "../NormalDropDown/index";
import "./modalStyles.scss";

const UploadModalBody = ({
  folderList,
  uploadFile,
  empId,
  handleUploadButton,
  uploadFileData,
  deleteFileData,
  deleteDocument,
  callbackMessage,
  fetchFolder,
}) => {
  const [folderId, setFolderId] = useState(null);
  //console.log(uploadFileData)
  const createFolderList = (elementList) => {
    let FolderList = [];
    elementList.map((item) => {
      let obj = {};
      obj.key = item.id;
      obj.name = item.name;
      FolderList.push(obj);
    });
    return FolderList;
  };

  const handleListChange = (id) => {
    setFolderId(id);
  };

  return (
    <div className="upload-doc-list-div">
      <div className="">
        <Typography text="Select a Folder for the files to be put in" size="semibold12" />
        <div className="custom-line-break"></div>
        <NormalDropDown
          type="Enabled"
          size="large-dropdown"
          list={createFolderList(folderList)}
          defaultValue={folderList[0]?.name}
          handleChange={handleListChange}
        />
      </div>
      <div className="upload-doc-area-div">
        <Typography text="Upload Files" size="semibold12" />
        <div className="custom-line-break"></div>
        <UploadDocument
          type="lg"
          customWidth={504}
          uploadFile={uploadFile}
          uploadFileData={uploadFileData}
          deleteDocument={deleteDocument}
          callbackMessage={callbackMessage}
          deleteFileData={deleteFileData}
          empId={empId}
          folderId={folderId ? folderId : folderList[0]?.id}
        />
      </div>

      <div className="footer-body-div">
        <div className="footer-btn-div">
          {/* <button className="cancel-button-action">
            <Typography text="Cancel" size="semibold14" color="font-primary-action" />
          </button> */}
          <button
            className="upload-button-action"
            onClick={() => {
              handleUploadButton();
              fetchFolder("employee", empId);
            }}
          >
            <Typography text="Done" size="semibold14" color="font-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModalBody;

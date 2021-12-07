import React, { useEffect, useState } from "react";
import Typography from "../Typography/Typography";
import PropTypes from "prop-types";
import { ReactComponent as Download } from "../../assets/icons/icon/DownloadingUpdates.svg";
import { ReactComponent as Print } from "../../assets/icons/icon/SendToPrinter.svg";
import { ReactComponent as Share } from "../../assets/icons/icon/Share.svg";
import { ReactComponent as Menu } from "../../assets/icons/icon/MenuVertical.svg";
import { ReactComponent as EditFile } from "../../assets/icons/icon/EditFile.svg";
import { ReactComponent as SendFile } from "../../assets/icons/icon/SendFile.svg";
import { ReactComponent as Info } from "../../assets/icons/icon/Info.svg";
import { ReactComponent as Unlock } from "../../assets/icons/icon/Unlock.svg";
import { ReactComponent as Delete } from "../../assets/icons/icon/TrashCan.svg";
import { ReactComponent as DownBlackArrow } from "../../assets/icons/icon/DownBlackArrow.svg";
import RadioButtonWithIcon from "../RadioWithIcon";
import Icons from "../Icons";
import ModalPopup from "../Modal";
import Button from "../Button/Button";
import "./styles.scss";

function DocumentViewer({
  name,
  folderId,
  documentId,
  radioList,
  src,
  width,
  height,
  isSetOpen,
  handleClick,
  handlefileClose,
  documentViewerDeleteFunction,
  getDetailsDocument,
  documentDetails,
  getDocumentPrivacy,
  getDownloadDocument,
  documentDownload,
  handleRenameFile,
  isPrivate,
}) {
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [renameId, setRenameId] = useState(false);
  const [renameData, setRenameData] = useState(name);
  const [fileTypeCheck, setFileTypeCheck] = useState(false);
  const handleClick2 = () => {
    setShow(!show);
  };

  useEffect(() => {
    {
      fileTypeChecker(renameData);
    }
  }, [src]);

  const deleteFileFunction = () => {
    setShowDelete(false);
    handleClick(false);
    documentViewerDeleteFunction(folderId, documentId);
  };

  const deleteModalPopup = () => {
    return (
      <div className="deleteFileModal">
        <div className="delete-text">
          <div className="delete-text-header">
            <Typography text={"Are you sure want to delete this file?"} size="semibold14" />
          </div>
          <div>
            <Typography
              text={
                "If you confirm,all contents of this file will be permanently deleted and will no longer be accessible by admin or the employee."
              }
              size="regular12"
            />
          </div>
        </div>
        <div className="buttons">
          <div
            className="cancel-button"
            onClick={() => {
              setShowDelete(false);
            }}
          >
            <Button type="Secondary" size="lg" label="Cancel" />
          </div>
          <div className="delete-button">
            {/* <Button type="Primary" size="lg" label="Confirm" handleClick={() => deleteFolderFunction(id)} /> */}
            <Button type="Primary" size="lg" label="Confirm" handleClick={() => deleteFileFunction()} />
          </div>
        </div>
      </div>
    );
  };
  const deleteModal = (defaultVal) => {
    return (
      <ModalPopup
        size="md"
        modalBody={deleteModalPopup()}
        showModal={defaultVal}
        handleClose={() => {
          setShowDelete(false);
        }}
        className="delete-modal-popup-document"
      />
    );
  };

  const documentDetailsPopup = () => {
    return (
      <div className="documentDetailsPopup">
        <div className="lable1">
          <Typography text="Name" size="semibold12" />
        </div>
        <div className="lable1 margin-bottom-20">
          <Typography text={documentDetails === null ? "-" : documentDetails.name} size="regular12" />
        </div>
        <div className="lable1">
          <Typography text="Type" size="semibold12" />
        </div>
        <div className="lable1 margin-bottom-20">
          <Typography text={documentDetails === null ? "-" : documentDetails.type} size="regular12" />
        </div>
        <div className="lable1 ">
          <Typography text="Uploaded On" size="semibold12" />
        </div>

        <div className="lable1 margin-bottom-20">
          <Typography text={documentDetails === null ? "-" : documentDetails.createdAt} size="regular12" />
        </div>
        <div className="lable1">
          <Typography text="Uploaded By" size="semibold12" />
        </div>
        <div className="lable1">
          <Typography text={documentDetails === null ? "-" : documentDetails.createdBy} size="regular12" />
        </div>
      </div>
    );
  };

  const documentDetailsModal = (defaultVal) => {
    return (
      <div>
        <ModalPopup
          size="sm"
          modalBody={documentDetailsPopup()}
          title="Details"
          showModal={defaultVal}
          type=""
          handleClose={() => setShowDetails(false)}
          className="details-modal-popup-documents"
        />
      </div>
    );
  };

  const privacyInputPopup = (isPrivate) => {
    return (
      <div classname="radio-privacy">
        <RadioButtonWithIcon
          list={radioList}
          defaultVal={isPrivate}
          name="isPrivate"
          handleInputChange={(val, name) => {
            getDocumentPrivacy(folderId, documentId, val);
          }}
        />
      </div>
    );
  };

  const privacyModal = (isPrivate, defaultVal) => {
    return (
      <div className="privacyModal" id="privacyModal">
        <ModalPopup
          size="sm"
          modalBody={privacyInputPopup(isPrivate)}
          title="Privacy"
          showModal={defaultVal}
          type=""
          handleClose={() => setShowPrivacyModal(false)}
          className="privacyModal-document"
        />
      </div>
    );
  };
  const handleRenamefileClick = (event) => {
    if (event.key === "Enter") {
      handleRenameFile(folderId, documentId, renameData);
      setRenameId(null);
    }
  };

  const fileTypeChecker = (renameData) => {
    let fileType = renameData.split(".");
    fileType[1] === "pdf" ? setFileTypeCheck(true) : setFileTypeCheck(false);
  };
  return (
    <div className="document-viewer">
      <div className="header-component">
        <div onClick={handlefileClose}>
          <Icons className="green-left-icon" icon={<DownBlackArrow />} size={"mediumLarge"} hover={false} />
        </div>
        {renameId === true ? (
          <div className="input-name grey-document-name">
            <input
              typer={"text"}
              onChange={(event) => setRenameData(event.target.value)}
              defaultValue={name}
              onKeyPress={handleRenamefileClick}
            />
          </div>
        ) : (
          <div className="name">
            <Typography text={renameData} size="semibold16" />
          </div>
        )}

        <div className="header-icon-document-viewer marginRight10">
          {fileTypeCheck ? null : (
            <>
              <div className="marginLeft20" onClick={() => getDownloadDocument(folderId, documentId, name)}>
                <Icons className="download" icon={<Download />} size={"mediumLarge"} hover={false} />
              </div>
              <div className="marginLeft20">
                <Icons className="print" icon={<Print />} size={"mediumLarge"} hover={false} />
              </div>
            </>
          )}
          <div className="marginLeft20" onClick={handleClick2}>
            <Icons className="menuDoc" icon={<Menu />} size={"mediumLarge"} hover={false} />
          </div>
        </div>

        {show ? (
          <div className="dr">
            <div
              className="row-menu-document-viewer"
              onClick={() => {
                handleClick2();
                setRenameId(true);
              }}
            >
              <div className="col-2">
                <Icons className="editIcon" icon={<EditFile />} size={"medium"} hover={false} />
              </div>
              <div className="col-10 lable1">
                <Typography text="Rename" size="regular12" />
              </div>
            </div>
            <div
              className="row-menu-document-viewer"
              onClick={() => {
                setShowDetails(true);
                getDetailsDocument(folderId, documentId);
                documentDetailsModal(true);
                handleClick2();
              }}
            >
              <div className="col-2">
                <Icons className="infoIcon" icon={<Info />} size={"medium"} hover={false} />
              </div>
              <div className="col-10 lable1">
                <Typography text="Details" size="regular12" />
              </div>
            </div>
            <div
              className="row-menu-document-viewer"
              onClick={() => {
                setShowPrivacyModal(true);
                privacyModal(isPrivate, showPrivacyModal);
                handleClick2();
              }}
            >
              <div className="col-2">
                <Icons className="unlockIcon" icon={<Unlock />} size={"medium"} hover={false} />
              </div>
              <div className=" col-10 lable1">
                <Typography text="Privacy" size="regular12" />
              </div>
            </div>
            <div
              className="row-menu-document-viewer"
              onClick={() => {
                setShowDelete(true);
                deleteModal(showDelete);
                handleClick2();
              }}
            >
              <div className="col-2">
                <Icons className="archiveIcon" icon={<Delete />} size={"medium"} hover={false} />
              </div>
              <div className="col-10 lable1">
                <Typography text="Delete" size="regular12" />
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="document1">
        <iframe src={src} allowfullscreen={false} width={"100%"} height={"100%"}></iframe>
      </div>
      {deleteModal(showDelete)}
      {documentDetailsModal(showDetails)}
      {privacyModal(isPrivate, showPrivacyModal)}
    </div>
  );
}
DocumentViewer.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
  handleClick: PropTypes.func,
};
export default DocumentViewer;

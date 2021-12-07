import React, { useState, useEffect, useRef } from "react";
import Typography from "../Typography/Typography";
import PropTypes from "prop-types";
import { ReactComponent as Menu } from "../../assets/icons/icon/MenuVertical.svg";
import { ReactComponent as EditFile } from "../../assets/icons/icon/EditFile.svg";
import { ReactComponent as Info } from "../../assets/icons/icon/Info.svg";
import { ReactComponent as Unlock } from "../../assets/icons/icon/Unlock.svg";
import { ReactComponent as Delete } from "../../assets/icons/icon/TrashCan.svg";
import { ReactComponent as AddFolder } from "../../assets/icons/icon/AddFolder.svg";
import { ReactComponent as UploadFile } from "../../assets/icons/icon/UploadFile.svg";
import { ReactComponent as AddIcon } from "../../assets/icons/icon/PlusFilledGreen.svg";
import { ReactComponent as AccordionDown } from "../../assets/icons/icon/CloseArrow.svg";
import { ReactComponent as FolderLock } from "../../assets/icons/icon/FolderLock.svg";
import { ReactComponent as Folder } from "../../assets/icons/icon/Folder.svg";
import { ReactComponent as Lock } from "../../assets/icons/icon/Lock.svg";
import { Accordion, Card, ListGroup, Modal } from "react-bootstrap";
import ModalPopup from "../Modal";
import Button from "../Button/Button";
import Icons from "../Icons";
import "./styles.scss";
import RadioButtonWithIcon from "../RadioWithIcon";
import DocumentViewer from "../DocumentViewer";

function Documents({
  fileListLoading,
  RadioListFolder,
  RadioListDocument,
  handleClick,
  fetchFiles,
  foldersList,
  getDetailsFolder,
  folderDetails,
  getFolderPrivacy,
  folderDeleteFunctionProp,
  handleDocumentView,
  documentViewModal,
  documentDeleteFunctionProp,
  isAddFolder,
  handleCreateFolder,
  handleAddFolder,
  getDetailsDocument,
  documentDetails,
  getDocumentPrivacy,
  getDownloadDocument,
  documentDownload,
  handleRenameFolder,
  handleRenameFile,
  setIsAddFolderOpen,
  allFolderClose,
  setAllFolderClose,
}) {
  const [show, setShow] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [privacyId, setPrivacyId] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showDocument, setShowDocument] = useState(false);
  const [fileUrl, setFileUrl] = useState(null);
  const [fileData, setFileData] = useState(null);
  const [renameId, setRenameId] = useState(null);
  const [renameData, setRenameData] = useState({});
  const [isOpen, setOpen] = useState(false);
  const [isIndex, setIndex] = useState(null);
  const [foldersName, setFolderName] = useState("");
  const ref = useRef(null);
  const [loading, setLoading] = useState(fileListLoading);

  useEffect(() => {
    if (allFolderClose) {
      setIndex(null);
      setShow("");
    }
  }, [allFolderClose]);

  useEffect(() => {
    setLoading(fileListLoading)
  }, [fileListLoading]);

  const handleAccordionOpen = (val, folderId) => {
    if (isIndex === val) {
      //isIndex.splice(isIndex.indexOf(val), 1);
      setIndex(null);
      setShow("");
      setOpenMenu(null);
    } else {
      setIndex(val);
      setOpenMenu(null);
      fetchFiles(folderId);
      setShow(folderId);
    }
  };
  const handlefileClose = () => {
    setShowDocument(false);
  };
  const handleMenuOpen = (index, folderId) => {
    return openMenu === folderId
      ? (setOpenMenu(null), setIndex(null))
      : (setOpenMenu(folderId), setIndex(index));
  };
  const menuPopup = (index, folderId, isPrivate, name) => {
    return (
      <div>
        {openMenu === folderId && isIndex === index ? (
          <div className="document-popup">
            <div
              className="row1"
              onClick={() => {
                setRenameId(folderId);
                handleMenuOpen(index, folderId);
              }}
            >
              <div className="menu-popup-icons">
                <Icons className="editIcon" icon={<EditFile />} size={"medium"} hover={false} />
              </div>
              <div className="lable1">
                <Typography text="Rename" size="regular12" />
              </div>
            </div>
            <div
              className="row1"
              onClick={() => {
                setShowDetails(true);
                //setShow(folderId)
                getDetailsFolder(folderId);
                handleMenuOpen(index, folderId);
              }}
            >
              <div className="menu-popup-icons">
                <Icons className="infoIcon" icon={<Info />} size={"medium"} hover={false} />
              </div>
              <div className="lable1">
                <Typography text="Details" size="regular12" />
              </div>
            </div>
            <div
              className="row1"
              onClick={() => {
                setShowPrivacyModal(true);
                setPrivacyId([{ folderId: folderId, isPrivate: isPrivate }]);
                handleMenuOpen(index, folderId);
              }}
            >
              <div className="menu-popup-icons">
                <Icons className="unlockIcon" icon={<Unlock />} size={"medium"} hover={false} />
              </div>
              <div className="lable1">
                <Typography text="Privacy" size="regular12" />
              </div>
            </div>
            <div
              className="row1"
              onClick={() => {
                setShowDelete(true);
                setShow(folderId);
                //deleteModal(index, folderId, showDelete);
                handleMenuOpen(index, folderId);
              }}
            >
              <div className="menu-popup-icons">
                <Icons className="archiveIcon" icon={<Delete />} size={"medium"} hover={false} />
              </div>
              <div className="lable1">
                <Typography text="Delete" size="regular12" />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  };
  const deleteFolderFunction = (folderId) => {
    folderDeleteFunctionProp(folderId);
    setShowDelete(false);
  };

  const privacyInputPopup = (folderId, defaultVal) => {
    return (
      <div classname="radio-privacy">
        <RadioButtonWithIcon
          list={RadioListFolder}
          name="isPrivate"
          defaultVal={defaultVal}
          handleInputChange={(val) => {
            getFolderPrivacy(folderId, val);
          }}
        />
      </div>
    );
  };

  const privacyModal = (privacyData, defaultVal) => {
    return typeof privacyData !== "undefined" && privacyData.length !== 0 ? (
      <ModalPopup
        size="sm"
        modalBody={privacyInputPopup(privacyData[0].folderId, privacyData[0].isPrivate)}
        title="Privacy"
        showModal={defaultVal}
        type=""
        handleClose={() => setShowPrivacyModal(false)}
        className="privacyModal-folder"
      />
    ) : null;
  };

  const folderDetailsPopup = (index, name, type, createdOn, createdBy, defaultVal, setDetailsFolder) => {
    return (
      <div className="folderDetails">
        <div className="lable1">
          <Typography text="Name" size="semibold12" />
        </div>
        <div className="lable1 margin-bottom-20">
          <Typography text={folderDetails === undefined ? "" : folderDetails.name} size="regular12" />
        </div>
        <div className="lable1">
          <Typography text="Type" size="semibold12" />
        </div>
        <div className="lable1 margin-bottom-20">
          <Typography text={folderDetails === undefined ? "" : folderDetails.type} size="regular12" />
        </div>
        <div className="lable1 ">
          <Typography text="Created On" size="semibold12" />
        </div>

        <div className="lable1 margin-bottom-20">
          <Typography text={folderDetails === undefined ? "" : folderDetails.createdAt} size="regular12" />
        </div>
        <div className="lable1">
          <Typography text="Created By" size="semibold12" />
        </div>
        <div className="lable1">
          <Typography text={folderDetails === undefined ? "" : folderDetails.createdBy} size="regular12" />
        </div>
      </div>
    );
  };

  const folderDetailsModal = (defaultVal) => {
    return (
      <div className="details-modal-popup">
        <ModalPopup
          size="sm"
          modalBody={folderDetailsPopup()}
          title="Details"
          showModal={defaultVal}
          type=""
          handleClose={() => setShowDetails(false)}
          className="details-modal-popup"
        />
      </div>
    );
  };

  const deletModalPopup = (folderId) => {
    return (
      <div>
        <div className="delete-text">
          <div className="delete-text-header">
            <Typography text={"Are you sure want to delete this folder?"} size="semibold14" />
          </div>
          <div>
            <Typography
              text={
                "If you confirm,all contents of this folder will be permanently deleted and will no longer be accessible by admin or the employee."
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
            <Button
              type="Primary"
              size="lg"
              label="Confirm"
              handleClick={() => deleteFolderFunction(folderId)}
            />
          </div>
        </div>
      </div>
    );
  };
  const deleteModal = (index, folderId, defaultVal) => {
    // console.log(index, folderId, defaultVal)
    return (
      <ModalPopup
        size="md"
        modalBody={deletModalPopup(folderId)}
        showModal={defaultVal}
        handleClose={() => {
          setShowDelete(false);
        }}
        className="delete-modal-popup"
      />
    );
  };
  const documentModalViewer = (folderId, documentId, documentName, isPrivate) => {
    return (
      <div>
        <DocumentViewer
          name={documentName}
          width={500}
          height={500}
          src={documentViewModal}
          folderId={folderId}
          documentId={documentId}
          isPrivate={isPrivate}
          radioList={RadioListDocument}
          handlefileClose={handlefileClose}
          documentViewerDeleteFunction={(folderId, documentId) =>
            documentDeleteFunctionProp(folderId, documentId)
          }
          getDetailsDocument={(folderId, documentId) => getDetailsDocument(folderId, documentId)}
          documentDetails={documentDetails}
          getDocumentPrivacy={(folderId, documentId, data) => getDocumentPrivacy(folderId, documentId, data)}
          handleClick={() => {
            setShowDocument(false);
          }}
          getDownloadDocument={(folderId, documentId, documentName) =>
            getDownloadDocument(folderId, documentId, documentName)
          }
          documentDownload={documentDownload}
          handleRenameFile={handleRenameFile}
        />
      </div>
    );
  };
  const documentViewModalPopup = (folderId, documentId, documentName, isPrivate, defaultVal) => {
    return (
      <div className="document-viewer1">
        <ModalPopup
          size="xl"
          className="document-viewer1"
          modalBody={documentModalViewer(folderId, documentId, documentName, isPrivate)}
          showModal={showDocument}
          handleClose={() => {
            setShowDocument(false);
            setFileUrl(null);
            setFileData(null);
          }}
        />
      </div>
    );
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleCreateFolder(foldersName);
      handleAddFolder(false);
    }
  };
  const handleRenameClick = (event) => {
    if (event.key === "Enter") {
      handleRenameFolder(renameId, renameData);
      setRenameId(null);
    }
  };
  return (
    <div className="documents">
      <div className="document1">
        <div>
          {privacyModal(privacyId, showPrivacyModal)}
          {documentViewModalPopup(
            fileData?.folderId,
            fileData?.fileId,
            fileData?.fileName,
            fileData?.isPrivate,
            showDocument
          )}
          {folderDetailsModal(showDetails)}
          {deleteModal(isIndex, show, showDelete)}
          {foldersList?.length !== 0 ? (
            foldersList?.map((item, index) => (
              <>
                <Accordion>
                  <Card>
                    <Card.Header
                      className={` ${isIndex === index + 1 ? "greyBackground" : "whiteBackgroundBorder"}`}
                    >
                      <div
                        className="menu-icon-documents"
                        onClick={() => {
                          handleMenuOpen(index + 1, item.id, isOpen, openMenu, isIndex);
                          fetchFiles(item.id);
                          setRenameData(item.name)
                        }}
                      >
                        <div className="menu-icon" ref={ref}>
                          <Icons icon={<Menu />} size={"medium"} hover={false} />
                        </div>
                      </div>
                      {menuPopup(index + 1, item.id, item.isPrivate, item.name)}
                      <Accordion.Toggle
                        as={Card.Header}
                        className={` ${isIndex === index + 1 ? "greyBackground" : "whiteBackgroundBorder"}`}
                        eventKey={index + 1}
                        onClick={() => {
                          handleAccordionOpen(index + 1, item.id);
                        }}
                      >
                        <div className="heading-document">
                          {item.isPrivate ? (
                            <div>
                              <Icons className="heading-icon" icon={<FolderLock size="medium" />} />
                            </div>
                          ) : (
                            <div>
                              <Icons className="heading-icon" icon={<Folder size="medium" />} />
                            </div>
                          )}
                          {item.id === renameId ? (
                            <div className="folder-name-input">
                              <input
                                typer={"text"}
                                onChange={(event) => setRenameData(event.target.value)}
                                defaultValue={item.name}
                                onKeyPress={handleRenameClick}
                              />
                            </div>
                          ) : (
                            <div className="folder-name">
                              {isIndex === index + 1 ? (
                                <Typography text={item.name} size="semibold12" />
                              ) : (
                                <Typography text={item.name} size="regular12" />
                              )}
                            </div>
                          )}
                        </div>
                        <Icons
                          className={`toggle-icon ${isIndex === index + 1 ? "down-icon" : "up-icon"}`}
                          icon={<AccordionDown />}
                          size={"medium"}
                          hover={false}
                        />
                      </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse
                      eventKey={index + 1}
                      className={`${isIndex === index + 1 ? "show" : "hide"}`}
                    >
                      <Card.Body>
                        {/* {console.log(typeof item.fileList !== "undefined" ? item.fileList.length !== 0 : item?.fileList?"1": "2")} */}
                        {typeof item.fileList !== "undefined" && item?.fileList.length !== 0 ? (
                          item?.fileList.map((file) => (
                            <div className="content">
                              <div className="lock-icon">
                                {file.isPrivate ? (
                                  <Icons size="medium" icon={<Lock />} />
                                ) : (
                                  <Icons size="medium" icon={<Unlock />} />
                                )}
                              </div>
                              <div
                                className="folder-name"
                                onClick={() => {
                                  handleDocumentView(item.id, file.id);
                                  setShowDocument(true);
                                  setFileData({
                                    folderId: item.id,
                                    fileId: file.id,
                                    fileName: file.name,
                                    isPrivate: file.isPrivate,
                                    showDocument: showDocument,
                                  });
                                }}
                              >
                                <Typography text={file.name} size="regular12" />
                              </div>
                            </div>
                          ))
                        ) : loading ? (
                          <Typography text="Loading..." size="regular12" />
                        ) : (
                          <Typography text="No documents" size="regular12" />
                        )}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
                <div className="horizontal-divider"></div>
              </>
            ))
          ) : foldersList?.length === 0 && isAddFolder !== true ? (
            <div className="no-folder-text">
              <Typography text="No Folders" size="regular14" />
            </div>
          ) : null}
          {isAddFolder ? (
            <Accordion>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey={10} className="newFolderHeader">
                  <div className="heading-document-disable">
                    <div>
                      <Icons className="heading-icon" icon={<FolderLock size="medium" />} />
                    </div>
                    <div className="folder-name">
                      <input
                        typer={"text"}
                        onChange={(event) => setFolderName(event.target.value)}
                        defaultValue={"New Folder"}
                        onKeyPress={handleKeyPress}
                      />
                    </div>
                  </div>
                  <div onClick={() => handleAddFolder(false)}>
                    <Icons
                      className={`down-icon-disable`}
                      icon={<AccordionDown />}
                      size={"medium"}
                      hover={false}
                    />
                  </div>
                  <Icons className="menu-icon-disable" icon={<Menu />} size={"medium"} hover={false} />
                </Accordion.Toggle>
              </Card>
            </Accordion>
          ) : null}
        </div>
      </div>
    </div>
  );
}
Documents.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
};
export default Documents;

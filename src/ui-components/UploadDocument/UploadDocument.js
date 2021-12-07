import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import { ReactComponent as DeleteDocumentIcon } from "../../assets/icons/deleteDocumentIcon.svg";
import { ReactComponent as UploadDocumentIcon } from "../../assets/icons/uploadDocumentIcon.svg";
import Icons from "../Icons";
import "./styles.scss";

const formatBytes = (bytes, decimals = 0) => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["bytes", "kb", "mb", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + sizes[i];
};

const UploadDocument = ({
  type = "sm",
  icon,
  customWidth,
  uploadFile,
  deleteFileData,
  empId,
  folderId,
  uploadFileData,
  deleteDocument,
  callbackMessage,
}) => {
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState({});
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const createFormDataForFiles = () => {
    files.map((tempFile, index) => {
      if (tempFile?.file) {
        var formData = new FormData();
        formData.append("documentName", "");
        formData.append("document", tempFile.file);
        uploadFile("employee", empId, folderId, formData);
        formData = [];
       // files.splice(index, index);
      }
    });
    setFiles([])
    // if (file?.file) {
    //   var formData = new FormData();
    //   formData.append("documentName", "");
    //   formData.append("document", file.file);
    //   uploadFile("employee", empId, folderId, formData);
    // }
  };
  const onDrop = useCallback((accFiles, rejFiles) => {
    // Do something with the files
    const mappedAcc = accFiles.map((file) => ({ file }));

    setFiles((curr) => [...curr, ...mappedAcc, ...rejFiles]);
    setFile(mappedAcc.pop());
  }, []);

  // const removeName = (index) => {
  //   console.log(uploadFileData);
  //   if (deleteFileData?.message === "Document Deleted successfully") {
  //     files.splice(index, 1);
  //     let arr = uploadedFiles;
  //     arr.splice(index, 1);
  //     setUploadedFiles(arr);
  //     setFiles(files);
  //   }
  // };

  useEffect(() => {
    createFormDataForFiles();
  }, [file]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div className="upload-document-wrapper">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={type === "sm" ? "upload-zone-sm" : "upload-zone-lg"}>
          <div className="upload-icon-div">
            <Icons
              className=""
              icon={<UploadDocumentIcon className={type === "sm" ? "upload-icon-sm" : "upload-icon-lg"} />}
              size={"Large"}
              hover={false}
            />
          </div>
          <div className={type === "sm" ? "upload-text-div-sm" : "upload-text-div-lg"}>
            <span className={type === "sm" ? "drag-drop-text-sm" : "drag-drop-text-lg"}>
              <Typography text="Drag & drop to upload or" size="regular14" color="font-grey-light" />
            </span>
            <span className={type === "sm" ? "browse-files-text-sm" : "browse-files-text-lg"}>
              <Typography text="Browse files" size="semibold14" color="font-primary-action" />
            </span>
          </div>
        </div>
      </div>
      <div className={type === "sm" ? "wrapper-uploaded-list-sm" : "wrapper-uploaded-list-lg"}>
        {uploadFileData &&
          uploadFileData.map((file, index) => (
            <div key={index} className={type === "sm" ? "uploaded-file-div-sm" : "uploaded-file-div-lg"}>
              <span className="file-name-text">
                <Typography text={file.name} size="regular12" />
              </span>
              <div className="right-file-div">
                <span className="">
                  <span className="file-size-text">
                    <Typography text={"Uploaded"} size="regular12" />
                  </span>
                </span>
                <span className="">
                  <div>
                    <Icons
                      className=""
                      icon={<DeleteDocumentIcon className="delete-uploaded-file-icon" />}
                      size={"Large"}
                      hover={false}
                      handleClick={() => {
                        deleteDocument("employee", empId, folderId, file?.id, index);
                        //removeName(index);
                      }}
                    />
                  </div>
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

UploadDocument.propTypes = {
  type: PropTypes.oneOf(["sm", "lg"]),
};

export default UploadDocument;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, ProgressBar, Alert, Modal } from "react-bootstrap";
import { uploadFile } from "../redux/slice/fileUploadReducer";

const FileUploadComponent = ({ showUpload, handleCloseUpload, userId }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.fileUpload.loading);
  const error = useSelector((state) => state.fileUpload.error);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      dispatch(uploadFile({ file: selectedFile, type: "profile", id: userId }));
    }
  };

  return (
    <Modal show={showUpload} onHide={handleCloseUpload} dialogClassName="uploadPictureModal">
      <Modal.Header closeButton>
        <Modal.Title>Modifica la tua immagine di profilo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Choose a file</Form.Label>
            <Form.Control type="file" onChange={handleFileChange} />
          </Form.Group>

          <Button variant="primary" onClick={handleUpload} disabled={loading}>
            Upload
          </Button>
        </Form>

        {loading && <ProgressBar animated now={100} label="Uploading..." />}

        {error && <Alert variant="danger">Error: {error}</Alert>}
      </Modal.Body>
    </Modal>
  );
};

export default FileUploadComponent;

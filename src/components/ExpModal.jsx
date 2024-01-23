import { Alert, Button, Form, FormControl, Modal } from "react-bootstrap";

const expModal = ({ showExp, handleCloseExp, showAlert, statusPut }) => {
  const max = new Date().toISOString().split("T")[0];

  return (
    <Modal show={showExp} onHide={handleCloseExp} dialogClassName="addExpModal">
      <Modal.Header closeButton>
        <Modal.Title>Modifica di presentazione</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="mx-2">
          {showAlert === true && statusPut === "success" ? (
            <Alert variant="success">Modifica avvenuta con successo</Alert>
          ) : (
            ""
          )}
          {showAlert === true && statusPut === "failed" ? (
            <Alert variant="warining">Errore nella modifica dei dati</Alert>
          ) : (
            ""
          )}
          <Form.Group className="mb-3" controlId="editForm.ControlInput1">
            <Form.Label className="fw-semibold w-100">
              Ruolo
              <FormControl required placeholder="Inserisci il tuo ruolo" />
            </Form.Label>
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-start w-100" controlId="editForm.ControlInput2">
            <Form.Label className="fw-semibold w-100">
              Azienda
              <FormControl required placeholder="Inserisci il tuo nome della azienda" />
            </Form.Label>
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-start w-100" controlId="editForm.ControlInput3">
            <Form.Label className="fw-semibold w-100">
              Data di inizio
              <FormControl required type="date" max={max} />
            </Form.Label>
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-start w-100" controlId="editForm.ControlInput4">
            <Form.Label className="fw-semibold w-100">
              Data di fine
              <FormControl type="date" max={max} />
            </Form.Label>
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-start w-100" controlId="editForm.ControlInput5">
            <Form.Label className="fw-semibold w-100">
              Descrizione
              <FormControl
                required
                as="textarea"
                rows={3}
                placeholder="Inserisci la descrizione della tua esperienza"
              />
            </Form.Label>
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-start w-100" controlId="editForm.ControlInput7">
            <Form.Label className="fw-semibold w-100">
              Località
              <FormControl required placeholder="Località" />
            </Form.Label>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button type="submit">Save</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default expModal;

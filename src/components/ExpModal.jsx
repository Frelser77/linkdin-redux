import { Alert, Button, Form, FormControl, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addExperience,
  resetExperience,
  setExperienceArea,
  setExperienceCompany,
  setExperienceDescription,
  setExperienceEndDate,
  setExperienceRole,
  setExperienceStartDate,
  setExperienceUser,
} from "../redux/slice/ExperienceSlice";

const ExpModal = ({ showExp, handleCloseExp, showAlert, statusPut, userId }) => {
  const max = new Date().toISOString().split("T")[0];
  const experience = useSelector((state) => state.fetchExperiences.experience);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setExperienceUser(userId));
    console.log("from submit: " + experience);
    dispatch(addExperience({ userId, experience }));
  };

  return (
    <Modal show={showExp} onHide={handleCloseExp} dialogClassName="addExpModal">
      <Modal.Header closeButton>
        <Modal.Title>Modifica di presentazione</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="mx-2" onSubmit={(event) => handleSubmit(event)}>
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
              <FormControl
                required
                placeholder="Inserisci il tuo ruolo"
                value={experience.role}
                onChange={(e) => dispatch(setExperienceRole(e.target.value))}
              />
            </Form.Label>
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-start w-100" controlId="editForm.ControlInput2">
            <Form.Label className="fw-semibold w-100">
              Azienda
              <FormControl
                required
                placeholder="Inserisci il tuo nome della azienda"
                value={experience.company}
                onChange={(e) => dispatch(setExperienceCompany(e.target.value))}
              />
            </Form.Label>
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-start w-100" controlId="editForm.ControlInput3">
            <Form.Label className="fw-semibold w-100">
              Data di inizio
              <FormControl
                required
                type="date"
                max={max}
                value={experience.startDate}
                onChange={(e) => dispatch(setExperienceStartDate(e.target.value))}
              />
            </Form.Label>
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-start w-100" controlId="editForm.ControlInput4">
            <Form.Label className="fw-semibold w-100">
              Data di fine
              <FormControl
                type="date"
                max={max}
                value={experience.endDate}
                onChange={(e) => dispatch(setExperienceEndDate(e.target.value))}
              />
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
                value={experience.description}
                onChange={(e) => dispatch(setExperienceDescription(e.target.value))}
              />
            </Form.Label>
          </Form.Group>
          <Form.Group className="mb-3 d-flex align-items-start w-100" controlId="editForm.ControlInput7">
            <Form.Label className="fw-semibold w-100">
              Località
              <FormControl
                required
                placeholder="Località"
                value={experience.area}
                onChange={(e) => dispatch(setExperienceArea(e.target.value))}
              />
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
export default ExpModal;

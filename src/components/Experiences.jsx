import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchExperiences,
  selectAllExperiencesData,
  setExperienceArea,
  setExperienceCompany,
  setExperienceDescription,
  setExperienceEndDate,
  setExperienceRole,
  setExperienceStartDate,
} from "../redux/slice/ExperienceSlice";
import { Button, Card, CardBody, Col, Container, Placeholder, Row } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import { GoPencil } from "react-icons/go";
import { FaTrashCan } from "react-icons/fa6";
import { token } from "../token";
import ExpModal from "./ExpModal";

export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

function Experiences() {
  const experiences = useSelector((state) => state.fetchExperiences.items);
  const dispatch = useDispatch();
  const location = useLocation();
  const params = useParams();
  const [experience, setExperience] = useState(null);
  const [showExp, setShowExp] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [status, setStatus] = useState(false);

  const handleCloseExp = () => setShowExp(false);
  const handleShowExp = () => setShowExp(true);

  const fetchExperience = async (userId, expId) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        console.log("errore boh");
      }
      setStatus(true);
      const data = await response.json();
      setExperience(data);
      dispatch(setExperienceRole(data.role));
      dispatch(setExperienceCompany(data.company));
      dispatch(setExperienceStartDate(data.startDate.split("T")[0]));
      dispatch(setExperienceEndDate(data.endDate.split("T")[0]));
      dispatch(setExperienceDescription(data.description));
      dispatch(setExperienceArea(data.area));
    } catch (err) {
      console.log(err);
    }
  };

  const handlePencilClickExp = (userId, expId) => {
    fetchExperience(userId, expId);
    handleShowExp();
  };

  useEffect(() => {
    let queryParam;
    queryParam = params.userId;
    dispatch(fetchExperiences(queryParam));
  }, []);

  useEffect(() => {}, [experiences]);

  return (
    <Container>
      <h1 className="text-center my-4">PAGINA ESPERIENZE</h1>
      <Row xs={2}>
        {experiences.length > 0 ? (
          experiences.map((exp) => (
            <Col key={exp._id} className="my-2">
              <Card className="mb-3 h-100 shadow">
                <Card.Header className="d-flex justify-content-between">
                  <p className="h5 mb-0 mt-2">{exp.role}</p>
                  <div className="d-flex align-items-center">
                    <Button variant="transparent" onClick={() => handlePencilClickExp(exp.user, exp._id)}>
                      <GoPencil className="fs-5" />
                    </Button>
                    <Button variant="transparent">
                      <FaTrashCan className="fs-5" />
                    </Button>
                  </div>
                </Card.Header>
                <CardBody variant="flush">
                  <Card.Text>
                    <strong>Azienda:</strong> {exp.company}
                  </Card.Text>
                  <Card.Text>
                    <strong>Periodo:</strong> {formatDate(exp.startDate)} -{" "}
                    {exp.endDate ? formatDate(exp.endDate) : "Presente"}
                  </Card.Text>
                  <Card.Text>
                    <strong>Località:</strong> {exp.area}
                  </Card.Text>
                  <Card.Text>
                    <strong>Descrizione:</strong> {exp.description}
                  </Card.Text>
                  {exp.image && (
                    <Card.Text>
                      <Card.Img variant="top" src={exp.image} style={{ width: "500px", height: "300px" }} />
                    </Card.Text>
                  )}
                </CardBody>
              </Card>
            </Col>
          ))
        ) : (
          <Col className="offset-3">
            <Card className="shadow">
              <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                  <Card.Title className="fs-4 text-muted">Non hai aggiunto esperienze</Card.Title>
                  <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                  <Placeholder xs={8} />
                  <Placeholder className="my-2" style={{ width: "500px", height: "250px" }}></Placeholder>
                </Placeholder>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>

      {experience && (
        <ExpModal
          showAlert={showAlert}
          showExp={showExp}
          handleCloseExp={handleCloseExp}
          statusPut={status}
          userId={experience.user}
          expId={experience._id}
        />
      )}
    </Container>
  );
}
export default Experiences;

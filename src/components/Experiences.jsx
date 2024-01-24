import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperiences, selectAllExperiencesData } from "../redux/slice/ExperienceSlice";
import { Button, Card, CardBody, Col, Container, Placeholder, Row } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import { GoPencil } from "react-icons/go";
import { FaTrashCan } from "react-icons/fa6";
import { token } from "../token";

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
      const data = await response.json();
      setExperience(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let queryParam;
    queryParam = params.userId;
    dispatch(fetchExperiences(queryParam));
  }, []);

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
                    <Button variant="transparent">
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
    </Container>
  );
}
export default Experiences;

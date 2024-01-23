import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperiences, selectAllExperiencesData } from "../redux/slice/ExperienceSlice";
import { Card, ListGroup } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";

function Experiences() {
  const experiences = useSelector(selectAllExperiencesData);
  const dispatch = useDispatch();
  const location = useLocation();
  const params = useParams();

  // Funzione per formattare le date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    let queryParam;
    queryParam = params.userId;
    dispatch(fetchExperiences(queryParam));
  }, []);

  return (
    <div>
      <h1>PAGINA ESPERIENZE</h1>
      {experiences.map((exp) => (
        <Card key={exp._id} className="mb-3">
          <Card.Header as="h5">{exp.role}</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Azienda:</strong> {exp.company}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Periodo:</strong> {formatDate(exp.startDate)} -{" "}
              {exp.endDate ? formatDate(exp.endDate) : "Presente"}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Località:</strong> {exp.area}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Descrizione:</strong> {exp.description}
            </ListGroup.Item>
            {exp.image && (
              <ListGroup.Item>
                <Card.Img variant="top" src={exp.image} />
              </ListGroup.Item>
            )}
          </ListGroup>
        </Card>
      ))}
    </div>
  );
}

export default Experiences;

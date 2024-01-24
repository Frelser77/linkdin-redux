import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperiences, selectAllExperiencesData } from "../redux/slice/ExperienceSlice";
import { Card, CardBody, Col, Container, Placeholder, Row } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";

export const formatDate = (dateString) => {
	const options = { year: "numeric", month: "long", day: "numeric" };
	return new Date(dateString).toLocaleDateString(undefined, options);
};

function Experiences() {
	const experiences = useSelector(selectAllExperiencesData);
	const dispatch = useDispatch();
	const location = useLocation();
	const params = useParams();

	// Funzione per formattare le date

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
						<Col className="my-2">
							<Card key={exp._id} className="mb-3 h-100 shadow">
								<Card.Header as="h5">{exp.role}</Card.Header>
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

import React from "react";
import { Col, Row } from "react-bootstrap";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";

function Profile() {
	return (
		<Row>
			<Col>
				<Card>
					<Card.Header className="bg-primary text-white">EPICODE</Card.Header>
					<Card.Img
						variant="top"
						src="path-to-your-image.jpg"
						style={{
							width: "100px",
							height: "100px",
							borderRadius: "50%",
							margin: "0 auto",
							transform: "translateY(-50%)",
							position: "relative",
							zIndex: "1000",
						}}
					/>
					<Card.Body>
						<Card.Title>Salvatore Alessandro D'Amico</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">Junior Front-end Developer</Card.Subtitle>
						<Card.Text>Oria, Puglia, Italia</Card.Text>
						<ListGroup className="list-group-flush">
							<ListGroupItem>Disponibile a lavorare</ListGroupItem>
							<ListGroupItem>Ruoli di React Developer</ListGroupItem>
						</ListGroup>
						<Button variant="primary">Mostra dettagli</Button>
					</Card.Body>
				</Card>
			</Col>
			<Col md={2} className="d-none d-md-block">
				<h1>STEFANO WE LOVE YOU</h1>
			</Col>
		</Row>
	);
}

export default Profile;

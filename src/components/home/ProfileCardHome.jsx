import React from "react";
import { Card, ListGroup, Button, Row, Col, Image } from "react-bootstrap";
import { FaHashtag, FaCalendarPlus } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const ProfileCardHome = () => {
	const location = useLocation();

	return (
		<>
			<Card className="mb-3">
				<Card.Header
					className="bg-primary text-white position-relative d-flex justify-content-center align-items-center"
					style={{ paddingBottom: "40px" }}
				>
					{/* Profile Image */}
					<Card.Img
						src="" // Include the src for your image here
						className="rounded-circle"
						style={{
							width: "80px",
							height: "80px",
							border: "4px solid white",
							position: "absolute",
							bottom: "-40px",
							left: "50%",
							transform: "translateX(-50%)",
							backgroundColor: "gray",
						}}
					/>
					{location.pathname === "/profile/me" && (
						<Button className="position-absolute top-0 end-0 m-2">
							{/* Add your onClick handler here */}
							<GoPencil />
						</Button>
					)}
				</Card.Header>
				<Card.Body className="pt-5 text-center">
					<Card.Title className="fs-5">Salvatore Alessandro D'Amico</Card.Title>
					<Card.Subtitle className="text-muted fs-6">Junior Front-end developer</Card.Subtitle>
					{/* More card content */}
				</Card.Body>
				<ListGroup variant="flush">
					<ListGroup.Item>
						<Row>
							<Col>Collegamenti</Col>
							<Col className="text-end">29</Col>
						</Row>
					</ListGroup.Item>
					<ListGroup.Item>Espandi la tua rete</ListGroup.Item>
					<ListGroup.Item>Dai una spinta alla tua carriera</ListGroup.Item>
					<ListGroup.Item>I miei elementi</ListGroup.Item>
				</ListGroup>
			</Card>

			<Card>
				<ListGroup variant="flush">
					<ListGroup.Item>Gruppi</ListGroup.Item>
					<ListGroup.Item>
						<FaHashtag /> Hashtag seguiti
					</ListGroup.Item>
					<ListGroup.Item>
						<FaCalendarPlus /> Eventi
					</ListGroup.Item>
				</ListGroup>
				<Card.Footer>
					<small className="text-muted">Scopri di più</small>
				</Card.Footer>
			</Card>
		</>
	);
};

export default ProfileCardHome;

import React from "react";
import { Card, ListGroup, Button, Row, Col } from "react-bootstrap";
import { FaHashtag, FaCalendarPlus } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const ProfileCardHome = () => {
	const location = useLocation();

	return (
		<>
			<Card className="">
				<Card.Header
					className="bg-primary text-white position-relative"
					style={{ height: "50px", borderRadius: "8px 8px 0 0" }}
				>
					{/* Profile image should be uploaded here */}
					<Link /* to="/upload" onClick={handleShowUpload} */>
						<Card.Img
							variant="top"
							src="" // {profile && profile.image}
							className="position-absolute"
							style={{
								width: "80px",
								height: "80px",
								border: "4px solid white",
								borderRadius: "50%",
								bottom: "-40px",
								left: "90px",
								backgroundColor: "gray",
							}}
						/>
					</Link>
				</Card.Header>
				<Card.Body className="pt-5">
					{location.pathname === "/profile/me" && (
						<div className="d-flex justify-content-end">
							<Button className="pencil px-2" /* onClick={handleShowSecond} */>
								<GoPencil className="fs-4" />
							</Button>
						</div>
					)}
					<Card.Title className="mt-2 me-auto fs-2">
						{/* {profile && profile.name + " " + profile.surname} */}
					</Card.Title>
					<Card.Subtitle className="mb-2 text-muted fs-6">{/* {profile && profile.title} */}</Card.Subtitle>
					<Card.Text>{/* {profile && profile.bio} */}</Card.Text>
					<Card.Text>
						{/* {profile && profile.area} | <Link onClick={handleShow}>informazioni di contatto</Link> */}
					</Card.Text>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroup.Item>
						<Row>
							<Col>Collegamenti</Col>
							<Col className="text-end">29</Col>
						</Row>
						<Row>
							<Col>Espandi la tua rete</Col>
						</Row>
					</ListGroup.Item>
					<ListGroup.Item>Dai una spinta alla tua carriera</ListGroup.Item>
					<ListGroup.Item>I miei elementi</ListGroup.Item>
				</ListGroup>
			</Card>

			<Card className="my-3">
				<ListGroup className="list-group-flush">
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

import React, { useEffect, useState } from "react";
import { Alert, CardText, Col, Form, FormControl, FormText, Modal, Row } from "react-bootstrap";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { fetchProfile } from "../redux/slice/fetchProfileReducer";
import { useDispatch, useSelector } from "react-redux";
import ProfileCard from "./ProfileCard";
import { GoPencil } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { ImCalendar } from "react-icons/im";
import { Linkedin } from "react-bootstrap-icons";
import {
	editProfile,
	setArea,
	setBio,
	setEmail,
	setImage,
	setName,
	setSurname,
	setTitle,
	setUsername,
} from "../redux/slice/editProfileReducer";

function Profile() {
	const profile = useSelector((state) => state.fetchProfile.data);
	const dispatch = useDispatch();
	const params = useParams();
	const location = useLocation();
	const allProfiles = useSelector((state) => state.fetchAllProfiles.data);
	const [show, setShow] = useState(false);
	const [showSecond, setShowSecond] = useState(false);
	const statusPut = useSelector((state) => state.editProfile.status);
	const [showAlert, setShowAlert] = useState(false);

	const [dataToEdit, setDataToEdit] = useState({ ...profile });

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleCloseSecond = () => setShowSecond(false);
	const handleShowSecond = () => setShowSecond(true);

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(editProfile(dataToEdit));
		setShowAlert(true);
		setTimeout(() => {
			setShowAlert(false);
			handleCloseSecond();
		}, 3000);
	};

	useEffect(() => {
		let queryParam;
		if (location.pathname === "/profile/me") {
			queryParam = "me";
		} else {
			queryParam = params.userId;
		}

		dispatch(fetchProfile(queryParam));
	}, [dispatch, location.pathname, params.userId]);

	return (
		<>
			<Row className="my-4">
				<Col>
					<Card className="mb-2 shadow">
						<Card.Header className="bg-primary text-white position-relative" style={{ height: "200px" }}>
							<Card.Img
								variant="top"
								src={profile && profile.image}
								className="position-absolute"
								style={{
									width: "150px",
									height: "150px",
									border: "4px solid white",
									borderRadius: "50%",
									margin: "0 auto",
									bottom: "-15%",
									zIndex: "1000",
									backgroundColor: "gray",
								}}
							/>
						</Card.Header>
						<Card.Body>
							<div className="d-flex justify-content-end">
								<Button className="pencil px-2" onClick={handleShowSecond}>
									<GoPencil className="fs-4" />
								</Button>
							</div>
							<Card.Title className="mt-2 me-auto fs-2">{profile && profile.name + " " + profile.surname}</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">{profile && profile.title}</Card.Subtitle>
							<Card.Text>{profile && profile.bio}</Card.Text>
							<Card.Text>
								{/* QUIIIIIII */}
								{profile && profile.area} | <Link onClick={handleShow}>informazioni di contatto</Link>
							</Card.Text>
							<ListGroup className="list-group-flush">
								<ListGroupItem>Disponibile a lavorare</ListGroupItem>
								<ListGroupItem>Ruoli di React Developer</ListGroupItem>
							</ListGroup>
							<Button variant="primary">Mostra dettagli</Button>
						</Card.Body>
					</Card>
					<Card className="mb-2 shadow">
						<Card.Body>
							<Card.Title className="mb-0">Analisi</Card.Title>
							<Card.Text className="mb-2 text-muted">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 16 16"
									data-supported-dps="16x16"
									fill="currentColor"
									className="mercado-match __web-inspector-hide-shortcut__"
									width="16"
									height="16"
									focusable="false"
								>
									<path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"></path>
								</svg>{" "}
								Solo per te
							</Card.Text>
							<Card.Text className="d-flex border border-1 border-secondary border-start-0 border-top-0 border-end-0 py-3">
								<div className="me-3">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										data-supported-dps="24x24"
										fill="currentColor"
										className="mercado-match"
										width="24"
										height="24"
										focusable="false"
									>
										<path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
									</svg>
									<Link className="undecorated"> 2 visualizzazioni del profilo</Link>
								</div>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										data-supported-dps="24x24"
										fill="currentColor"
										className="mercado-match"
										width="24"
										height="24"
										focusable="false"
									>
										<path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
									</svg>
									<Link className="undecorated"> 2 comparse nei motori di ricerca</Link>
								</div>
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className="mb-2 shadow">
						<Card.Body>
							<Card.Title className="mb-0">Risorse</Card.Title>
							<Card.Text className="mb-2 text-muted ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 16 16"
									data-supported-dps="16x16"
									fill="currentColor"
									className="mercado-match __web-inspector-hide-shortcut__"
									width="16"
									height="16"
									focusable="false"
								>
									<path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"></path>
								</svg>{" "}
								Solo per te
							</Card.Text>
							<Card.Text className="mb-2 border border-1 border-secondary border-start-0 border-top-0 border-end-0 py-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									data-supported-dps="24x24"
									fill="currentColor"
									className="mercado-match"
									width="24"
									height="24"
									focusable="false"
								>
									<path d="M21 12h-1a9 9 0 00-9-9V2a10 10 0 0110 10zM11 5v1a6 6 0 016 6h1a7 7 0 00-7-7zm3 7h1a4 4 0 00-4-4v1a3 3 0 013 3zm-2 0a1 1 0 00-1.82-.54L5.32 6.6a8 8 0 00-.24 8.4 2.33 2.33 0 014.16.68l.88 3.08A8.57 8.57 0 0012 19a8 8 0 004.4-1.32l-4.86-4.86A1 1 0 0012 12zm-5 3a1.32 1.32 0 00-1.27 1L4 22h6l-1.73-6A1.32 1.32 0 007 15z"></path>
								</svg>
								<Link className="undecorated"> Modalità creazione contenuti</Link>
								<p className="ms-4 mb-0">
									<small className="ms-1 text-muted">
										Fatti scoprire, metti in risalto i contenuti sul tuo profilo e accedi agli strumenti di creazione
									</small>
								</p>
							</Card.Text>

							<Card.Text className="mb-2 border border-1 border-secondary border-start-0 border-top-0 border-end-0 py-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									data-supported-dps="24x24"
									fill="currentColor"
									className="mercado-match"
									width="24"
									height="24"
									focusable="false"
								>
									<path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
								</svg>
								<Link className="undecorated"> La mia rete</Link>
								<p className="ms-4 mb-0">
									<small className="ms-1 text-muted">Salva e gestisci i tuoi collegamenti e interessi.</small>
								</p>
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className="mb-2 shadow">
						<Card.Body>
							<Card.Title className="mb-0">Informazioni</Card.Title>
							<Card.Text className="mt-3 mb-4 text-muted">{profile && profile.bio}</Card.Text>
							<Card.Text className="d-flex py-1 border rounded-2">
								<Row className="p-1">
									<Col xs={2} className="d-flex justify-content-start">
										<div>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												role="none"
												data-supported-dps="24x24"
												fill="currentColor"
												class="mercado-match"
												width="24"
												height="24"
												focusable="false"
											>
												<path d="M18.36 3H5.64L2 9.5 12 22 22 9.5 18.36 3zm-10.7 7l2.45 6.43L4.96 10h2.7zm1.07 0h6.54L12 18.59 8.73 10zm7.61 0h2.7l-5.15 6.43L16.34 10zm3.09-1h-3.07L14.9 5h2.3l2.24 4zm-5.6-4l1.46 4H8.71l1.46-4h3.66zM6.81 5h2.3L7.65 9H4.58l2.24-4z"></path>
											</svg>
										</div>
									</Col>
									<Col xs={10}>
										<p className="mb-0 text-muted">Competenze principali</p>
										<span className="mb-0 text-muted">{profile && profile.title}</span>
									</Col>
								</Row>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				{/* SIDE BAR */}
				<Col md={3} className="d-none d-md-block ">
					<Card className="mb-2 shadow">
						<Card.Body>
							<Card.Title>Lingua del profilo</Card.Title>
							<Card.Text>Italiano</Card.Text>
							<hr />
							<CardText>Public profile & URL</CardText>
							<Card.Link href="https://www.linkedin.com/in/salvatore-alessandro-d-amico-4a1551267"></Card.Link>
						</Card.Body>
					</Card>

					<Card className="shadow">
						<Card.Body>
							<Card.Title>Altri profili consultati</Card.Title>
							{allProfiles &&
								allProfiles.map((profile, index) => index < 5 && <ProfileCard key={profile.id} profile={profile} />)}
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* MODALE */}
			<Modal show={show} onHide={handleClose} dialogClassName="my-custom-modal">
				<Modal.Header closeButton>
					<Modal.Title>{profile && profile.name + " " + profile.surname}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form className="mx-2">
						<div className="d-flex align-items-center justify-content-between">
							<FormText className="fs-5 text-black">Informazioni di contatto</FormText>
							<Button
								className="pencil px-2"
								onClick={() => {
									handleClose();
									handleShowSecond();
								}}
							>
								<GoPencil className="fs-4" />
							</Button>
						</div>
						<Form.Group className="my-3 d-flex align-items-start" controlId="exampleForm.ControlInput1">
							<Linkedin className="ms-1 me-3 mt-1 fs-5" />
							<Form.Label className="fw-semibold">
								Il tuo profilo
								{profile ? (
									<NavLink className="nav-link text-primary" to={"/profile/me"}>
										linkedi.com/in/{profile && profile.name}-{profile.surname && profile.surname}-45fde57321
									</NavLink>
								) : (
									"Registrati per visualizzare le informazioni di contatto"
								)}
							</Form.Label>
						</Form.Group>
						<Form.Group className="mb-3 d-flex align-items-start" controlId="exampleForm.ControlInput2">
							<FaPhoneAlt className="ms-1 me-3 mt-1 fs-5" />
							<Form.Label className="fw-semibold">
								Telefono
								<FormText className="d-block fw-semibold text-black">
									{profile.phone ? profile.phone : `3456789017`}
									<span className="ms-1  fw-light">(Cellulare)</span>
								</FormText>
							</Form.Label>
						</Form.Group>
						<Form.Group className="mb-3 d-flex align-items-start" controlId="exampleForm.ControlInput3">
							<MdOutlineEmail className="ms-1 me-3 mt-1 fs-5" />
							<Form.Label className="fw-semibold">
								Email
								<FormText className="d-block text-primary fw-semibold">
									{profile.email ? profile.email : "Registra la tua email"}
								</FormText>
							</Form.Label>
						</Form.Group>
						<Form.Group className="mb-3 d-flex align-items-start" controlId="exampleForm.ControlInput4">
							<ImCalendar className="ms-1 me-3 mt-1 fs-5" />
							<Form.Label className="fw-semibold">
								Compleanno
								<FormText className="d-block fw-semibold">
									{profile.boarn ? profile.boarn : "Inserisci il tuo compleanno"}
								</FormText>
							</Form.Label>
						</Form.Group>
					</Form>
				</Modal.Body>
			</Modal>

			<Modal show={showSecond} onHide={handleCloseSecond} dialogClassName="editProfileModal">
				<Modal.Header closeButton>
					<Modal.Title>Modifica di presentazione</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form className="mx-2" onSubmit={handleSubmit}>
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
								Nome
								<FormControl
									value={dataToEdit.name}
									placeholder="Inserisci il tuo nome"
									onChange={(e) => setDataToEdit({ ...dataToEdit, name: e.target.value })}
								/>
							</Form.Label>
						</Form.Group>
						<Form.Group className="mb-3 d-flex align-items-start w-100" controlId="editForm.ControlInput2">
							<Form.Label className="fw-semibold w-100">
								Cognome
								<FormControl
									value={dataToEdit.surname}
									placeholder="Inserisci il tuo cognome"
									onChange={(e) => setDataToEdit({ ...dataToEdit, surname: e.target.value })}
								/>
							</Form.Label>
						</Form.Group>
						<Form.Group className="mb-3 d-flex align-items-start w-100" controlId="editForm.ControlInput3">
							<Form.Label className="fw-semibold w-100">
								Email
								<FormControl
									value={dataToEdit.email}
									placeholder="mariorossi@gmail.com"
									onChange={(e) => setDataToEdit({ ...dataToEdit, email: e.target.value })}
								/>
							</Form.Label>
						</Form.Group>
						<Form.Group className="mb-3 d-flex align-items-start w-100" controlId="editForm.ControlInput4">
							<Form.Label className="fw-semibold w-100">
								Username
								<FormControl
									value={dataToEdit.username}
									placeholder="mario_rossi"
									onChange={(e) => setDataToEdit({ ...dataToEdit, usernam: e.target.value })}
								/>
							</Form.Label>
						</Form.Group>
						<Form.Group className="mb-3 d-flex align-items-start w-100" controlId="editForm.ControlInput5">
							<Form.Label className="fw-semibold w-100">
								Titolo
								<FormControl
									value={dataToEdit.title}
									placeholder="Attore"
									onChange={(e) => setDataToEdit({ ...dataToEdit, title: e.target.value })}
								/>
							</Form.Label>
						</Form.Group>
						<Form.Group className="mb-3 d-flex align-items-start w-100" controlId="editForm.ControlInput6">
							<Form.Label className="fw-semibold w-100">
								Bio
								<FormControl
									value={dataToEdit.bio}
									placeholder="Biografia"
									onChange={(e) => setDataToEdit({ ...dataToEdit, bio: e.target.value })}
								/>
							</Form.Label>
						</Form.Group>
						<Form.Group className="mb-3 d-flex align-items-start w-100" controlId="editForm.ControlInput7">
							<Form.Label className="fw-semibold w-100">
								Località
								<FormControl
									value={dataToEdit.area}
									placeholder="Località"
									onChange={(e) => setDataToEdit({ ...dataToEdit, area: e.target.value })}
								/>
							</Form.Label>
						</Form.Group>
						<Form.Group className="mb-3 d-flex align-items-start w-100" controlId="editForm.ControlInput8">
							<Form.Label className="fw-semibold w-100">
								Immagine
								<FormControl
									value={dataToEdit.image}
									placeholder="Immagine"
									onChange={(e) => setDataToEdit({ ...dataToEdit, image: e.target.value })}
								/>
							</Form.Label>
						</Form.Group>
						<div className="d-flex justify-content-end">
							<Button type="submit">Save</Button>
						</div>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default Profile;

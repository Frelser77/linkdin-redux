import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	deleteExperience,
	fetchExperiences,
	fetchExperienceDetails,
	updateExperienceDetails,
	setCurrentExpId,
} from "../redux/slice/ExperienceSlice";
import { Alert, Button, Card, CardBody, CardText, Col, Container, Modal, Row } from "react-bootstrap";
import { GoArrowLeft, GoPencil } from "react-icons/go";
import { FaTrashCan } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import ExpModal from "./ExpModal";
import BannerCardProfileStatic from "./home/BannerCardProfileStatic";
import SideProfilesCard from "./profile/SideProfileCard";
import BannerCardImageStatic from "./home/BannerCardImageStatic";
import { fetchMyProfile } from "../redux/slice/fetchMyProfileReducer";

export const formatDate = (dateString) => {
	const options = { year: "numeric", month: "long", day: "numeric" };
	return new Date(dateString).toLocaleDateString(undefined, options);
};

function Experiences() {
	const profile = useSelector((state) => state.fetchMyProfile.data);
	const experiences = useSelector((state) => state.fetchExperiences.items);
	const experiencesReact = useSelector((state) => state.fetchExperiences.items);
	const allProfiles = useSelector((state) => state.fetchAllProfiles.data);
	const statusPut = useSelector((state) => state.editProfile.status);
	const currentExpId = useSelector((state) => state.fetchExperiences.currentExpId);
	const [showAlert, setShowAlert] = useState(false);
	const dispatch = useDispatch();
	const params = useParams();
	const navigate = useNavigate();
	const [showExp, setShowExp] = useState(false);
	const [showDelModal, setShowDelModal] = useState(false);
	const [selectedExpId, setSelectedExpId] = useState(null);

	const handleSelectExperience = (expId) => {
		dispatch(setCurrentExpId(expId));
	};

	useEffect(() => {}, [experiencesReact]);

	useEffect(() => {
		dispatch(fetchMyProfile());
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchExperiences(params.userId));
	}, [dispatch, params.userId]);

	const goBackToProfile = () => {
		navigate(-1);
	};

	const handleShowExp = (expId) => {
		dispatch(fetchExperienceDetails({ userId: params.userId, expId }));
		handleSelectExperience(expId);
		setShowExp(true);
	};

	const handleCloseExp = () => setShowExp(false);

	useEffect(() => {
		if (statusPut === "succeeded") {
			setShowExp(false);
			dispatch(fetchExperiences(params.userId));
		}
	}, [statusPut, dispatch, params.userId]);

	const handleDelete = (expId) => {
		setSelectedExpId(expId);
		setShowDelModal(true);
	};

	const confirmDelete = () => {
		if (selectedExpId) {
			setTimeout(() => {
				setShowDelModal(false);
			}, 1500);
			dispatch(deleteExperience({ userId: params.userId, expId: selectedExpId }));
		}
	};

	return (
		<>
			<Container>
				<Row className="my-4">
					<Col xs={12} lg={9} className="">
						<Card className="">
							<CardBody>
								<Row className="">
									<div className="col-3of20">
										<Button
											variant="transparent"
											onClick={goBackToProfile}
											className="rounded-pill prev-page me-4"
											style={{ opacity: "0.6" }}
										>
											<GoArrowLeft className="" />
										</Button>
									</div>
									<div className="col-17of20">
										<CardText className="d-inline fs-4">Esperienze</CardText>
									</div>
								</Row>
							</CardBody>
							{experiences.length > 0 ? (
								experiences.map((exp) => (
									<Card.Body key={exp._id} className="mb-2 border-top border-bottom-0 border-right-0 border-left-0">
										<Row>
											<div xs={1} className="col-3of20 d-flex flex-column align-items-center justify-content-start ">
												<img
													src="https://via.placeholder.com/50"
													alt="Placeholder"
													style={{ width: "50px", height: "50px", borderRadius: "50%" }}
												/>
											</div>
											<div className="col-17of20">
												<div className="d-flex align-items-center justify-content-between">
													<Card.Title>{exp.role}</Card.Title>
													<div className="">
														<Button variant="transparent" onClick={() => handleShowExp(exp._id)}>
															<GoPencil className="fs-5" />
														</Button>
														<Button variant="transparent" onClick={() => handleDelete(exp._id)}>
															<FaTrashCan className="fs-5" />
														</Button>
													</div>
												</div>
												<Card.Subtitle className="fs-7" style={{ fontWeight: "400" }}>
													{exp.company}
												</Card.Subtitle>
												<Card.Text className="text-muted fs-7 no-margin">
													{formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : "Presente"} -{" "}
													{formatDate(exp.updatedAt)}
												</Card.Text>
												<Card.Text className="fs-7 no-margin text-muted">{exp.area}</Card.Text>
												<Card.Text className="my-2 fs-6 no-margin">
													<span className="fs-6 fw-semibold">Competenze: </span>
													{exp.description}
												</Card.Text>
											</div>
										</Row>
									</Card.Body>
								))
							) : (
								<Col className="offset-3 my-5">
									<Alert variant="primary">Non hai aggiunto esperienze</Alert>
								</Col>
							)}
						</Card>
					</Col>
					<Col lg={3} className="d-none d-lg-block">
						<BannerCardProfileStatic />
						<SideProfilesCard profiles={allProfiles} />
						<BannerCardImageStatic />
					</Col>
				</Row>

				{showExp && (
					<ExpModal
						showAlert={showAlert}
						showExp={showExp}
						handleCloseExp={handleCloseExp}
						statusPut={statusPut}
						userId={profile._id}
					/>
				)}

				<Modal show={showDelModal} onHide={() => setShowDelModal(false)} dialogClassName="addDelModal" className="mt-5">
					<Modal.Header closeButton>
						<Modal.Title>Delete Experience</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<p className="text-center fs-3 fw-semibold">Are you sure?</p>
					</Modal.Body>

					<Modal.Footer>
						<Button variant="secondary" onClick={() => setShowDelModal(false)}>
							Discard
						</Button>
						<Button variant="danger" onClick={confirmDelete}>
							Delete
						</Button>
					</Modal.Footer>
				</Modal>
			</Container>
		</>
	);
}

export default Experiences;

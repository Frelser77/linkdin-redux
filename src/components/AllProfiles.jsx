import { useSelector } from "react-redux";
import { Card, CardBody, Col, NavLink, Row } from "react-bootstrap";
import { HiUserPlus } from "react-icons/hi2";

const AllProfiles = () => {
	const profiles = useSelector((state) => state.fetchAllProfiles.data);

	return (
		<Row xs={2} sm={3} md={4} className="my-3">
			{profiles &&
				profiles.map((profile) => (
					<Col className="my-2">
						<Card className="h-100 shadow">
							<CardBody className="d-flex flex-column align-items-center">
								<div className="d-flex align-items-start mb-2 pt-2 pb-3">
									<div>
										<img
											src={profile && profile.image}
											className="rounded-circle me-2"
											style={{ width: "48px", height: "48px" }}
											alt="Profile"
										/>
									</div>
									<div className="ms-1">
										<div className="truncate">
											{profile && profile.name} {"  "}
											{profile && profile.surname}
										</div>
										<div className="text-muted">{profile && profile.title}</div>
									</div>
								</div>
								<div>
									<NavLink
										to="/messages"
										className="btn btn-outline-secondary rounded-pill ps-2 pe-3 mt-3 pb-2 py-1 text-center"
									>
										<HiUserPlus className="mx-1" />
										Collegati
									</NavLink>
								</div>
							</CardBody>
						</Card>
					</Col>
				))}
		</Row>
	);
};
export default AllProfiles;

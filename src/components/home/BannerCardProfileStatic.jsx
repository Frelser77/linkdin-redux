import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { useSelector } from "react-redux";

const BannerCardProfileStatic = () => {
	const myProfile = useSelector((state) => state.fetchMyProfile.data);

	return (
		<Card className="mb-2">
			<Card.Body>
				<Card.Title>{myProfile && myProfile.name + " " + myProfile.surname}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">stand out among other applicants</Card.Subtitle>
				<div className="d-flex align-items-center justify-content-around">
					<div style={{ width: "50px", height: "50px", borderRadius: "50%" }}>
						<img
							src={myProfile && myProfile.image}
							alt="Profile"
							style={{ width: "50px", height: "50px", borderRadius: "50%" }}
						/>
					</div>

					<FaLinkedin size={50} color="#0e76a8" className="ml-3" />
				</div>
				<Card.Text className="my-2">Get ahead in 2024 with new Premium features</Card.Text>
				<div className="text-center">
					<Button variant="outline-primary btn-sm" className="btn rounded-pill ">
						Try for free
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
};

export default BannerCardProfileStatic;

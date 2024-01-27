// SideProfilesCard.js
import React from "react";
import { Card } from "react-bootstrap";
import ProfileCard from "../ProfileCard"; // Assicurati che il percorso sia corretto

const SideProfilesCard = ({ profiles }) => {
	return (
		<Card className="">
			<Card.Body>
				<Card.Title>Altri profili consultati</Card.Title>
				{profiles &&
					profiles.map(
						(profile, index) => index < 5 && <ProfileCard key={profile.name + profile._id} profile={profile} />
					)}
			</Card.Body>
		</Card>
	);
};

export default SideProfilesCard;

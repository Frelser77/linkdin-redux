import React from "react";
import { Container, Row } from "react-bootstrap";
import ProfileCard from "./ProfileCard";
import { useSelector } from "react-redux";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const ConnectedProfile = () => {
	const profiles = useSelector((state) => state.fetchAllProfiles.data);
	const connectedProfileIds = JSON.parse(localStorage.getItem("connectedProfiles")) || [];
	const connectedProfiles = profiles && profiles.filter((profile) => connectedProfileIds.includes(profile._id));

	const toggleConnection = (profileId) => {
		const updatedConnectedProfiles = connectedProfileIds.includes(profileId)
			? connectedProfileIds.filter((id) => id !== profileId)
			: [...connectedProfileIds, profileId];

		localStorage.setItem("connectedProfiles", JSON.stringify(updatedConnectedProfiles));
	};

	return (
		<Container>
			<Row className="my-4">
				{connectedProfiles.length > 0 ? (
					connectedProfiles.map((profile) => (
						<ProfileCard
							key={profile._id}
							profile={profile}
							isConnected={connectedProfileIds.includes(profile._id)}
							toggleConnection={toggleConnection}
						/>
					))
				) : (
					<Alert variant="primary" className="mt-3">
						<h3>Non sei ancora collegato a nessun profilo.</h3>
						<Link to={"/profile"} className="undecorated">
							Collegati
						</Link>
					</Alert>
				)}
			</Row>
		</Container>
	);
};

export default ConnectedProfile;

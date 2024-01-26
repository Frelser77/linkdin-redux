import React from "react";
import { Container } from "react-bootstrap";
import ProfileCard from "./ProfileCard";
import { useSelector } from "react-redux";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const ConnectedProfile = () => {
  const profiles = useSelector((state) => state.fetchAllProfiles.data);
  const connectedProfileIds = JSON.parse(localStorage.getItem("connectedProfiles")) || [];
  const connectedProfiles = profiles && profiles.filter((profile) => connectedProfileIds.includes(profile._id));

  return (
    <Container>
      {connectedProfiles.length > 0 ? (
        connectedProfiles.map((profile) => <ProfileCard key={profile._id} profile={profile} />)
      ) : (
        <Alert variant="primary" className="mt-3">
          <h3>Non sei ancora collegato a nessun profilo.</h3>
          <Link to={"/profile"} className="undecorated">
            Collegati
          </Link>
        </Alert>
      )}
    </Container>
  );
};

export default ConnectedProfile;

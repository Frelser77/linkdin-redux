import { NavLink } from "react-router-dom";
import { PiPaperPlaneTiltDuotone } from "react-icons/pi";

const ProfileCard = ({ profile }) => {
	return (
		<div className="d-flex align-items-start mb-2 border border-1 border-secondary border-top-0 border-end-0 border-start-0 pt-2 pb-3">
			<NavLink to={`/profile/${profile._id}`}>
				<img
					src={profile && profile.image}
					className="rounded-circle me-2"
					style={{ width: "48px", height: "48px" }}
					alt="Profile"
				/>
			</NavLink>
			<div className="ms-1">
				<NavLink to={`/profile/${profile._id}`} className="undecorated">
					{profile && profile.name} {"  "}
					{profile && profile.surname}
				</NavLink>
				<div className="text-muted">{profile && profile.title}</div>
				<NavLink to="/messages" className="btn btn-outline-secondary rounded-pill px-2 py-1 my-1">
					<PiPaperPlaneTiltDuotone className="mx-1" />
					Messaggio
				</NavLink>
			</div>
		</div>
	);
};

export default ProfileCard;

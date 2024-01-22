import { NavLink } from "react-router-dom";
import { PiPaperPlaneTiltDuotone } from "react-icons/pi";

const ProfileCard = ({ profile }) => {
	return (
		<div className="d-flex align-items-start">
			<div>
				<img
					src={profile && profile.image}
					className="rounded-circle me-2"
					style={{ width: "48px", height: "48px" }}
					alt="Profile"
				/>
			</div>
			<div className="ms-1">
				<div>
					{profile && profile.name} {"  "}
					{profile && profile.surname}
				</div>
				<div className="text-muted">{profile && profile.title}</div>
				<NavLink to="/messages" className="btn btn-outline-secondary p-0 my-1">
					<PiPaperPlaneTiltDuotone className="mx-1 rounded-pill" />
					Messaggio
				</NavLink>
			</div>
		</div>
	);
};

export default ProfileCard;

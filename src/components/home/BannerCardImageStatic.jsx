import React from "react";
import { Card, Image } from "react-bootstrap";
import { useSelector } from "react-redux";

const BannerCardImageStatic = () => {
	const myProfile = useSelector((state) => state.fetchMyProfile.data);

	return (
		<div className="banner-container my-3 d-flex align-items-center">
			<Card className="">
				<Image src={"/assets/img/BannerImg.png"} style={{ objectFit: "cover" }} />
			</Card>
		</div>
	);
};

export default BannerCardImageStatic;

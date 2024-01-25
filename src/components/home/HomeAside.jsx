import { Col, Button, Card } from "react-bootstrap";
import { useState } from "react";
import { TbInfoSquareFilled } from "react-icons/tb";
import MiniFooter from "./MiniFooter";
import BannerCard from "./BannerCard";
import { useSelector } from "react-redux";

const HomeAside = () => {
	const [showMore, setShowMore] = useState(false);
	let postList = useSelector((state) => state.fetchPost.postList || []);
	console.log(postList);
	const [showCount, setShowCount] = useState(5);

	const handleShowMore = () => {
		setShowCount(showCount === 5 ? 10 : 5);
	};

	const visibleNews = postList.slice(0, showCount);

	return (
		<>
			<Card className="d-flex flex-column align-items-start mb-2 pt-2 pb-3 bg-white rounded px-2">
				<div className="d-flex justify-content-between align-items-baseline w-100">
					<h5 className="mb-0">LinkedIn Notizie</h5>

					<TbInfoSquareFilled className="ms-1" />
				</div>
				<div className="px-2 py-1 text-start">
					<ul className="px-3 py-0 list-unstiled">
						{visibleNews.map((post, index) => (
							<li key={post._id || index}>
								<div className="mb-0">
									{/* <strong>{post.text.length > 30 ? post.text.slice(0, 30) + "..." : post.text}</strong> */}
								</div>
								<p>{post.user.username && post.user.username}</p>
								<p className="mt-0 mb-2">{new Date(post.createdAt).toLocaleDateString()}</p>
							</li>
						))}
					</ul>
					<Button
						variant="light"
						className="bg-white fw-bold"
						style={{ border: "none", color: "gray" }}
						size="sm"
						onClick={handleShowMore}
					>
						{showMore ? "Mostra Meno" : "Mostra Altri"}
					</Button>
				</div>
			</Card>
			<div className="position-sticky bannerTop">
				<BannerCard />
				<MiniFooter />
			</div>
		</>
	);
};

export default HomeAside;

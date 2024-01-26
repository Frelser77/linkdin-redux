import { Button, Card, CardBody, CardHeader, Image } from "react-bootstrap";
import { it } from "date-fns/locale";
import { formatDistanceToNow } from "date-fns";
import { FaHeart, FaRegCommentDots, FaShareSquare, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, fetchAllComments, updateComment } from "../redux/slice/fetchCommentsReducer";
import { useEffect, useState } from "react";

const Post = ({ username, text, createdAt, user, postImg, postId }) => {
	const dispatch = useDispatch();
	const timeSinceCreated = formatDistanceToNow(new Date(createdAt), { addSuffix: true, locale: it });
	let isItMyProfile = false;
	const myProfile = useSelector((state) => state.fetchMyProfile.data);
	// const allComments = useSelector((state) => state.comments.comments);
	// console.log("comments", allComments);

	// const [showComments, setShowComments] = useState(false);

	// const toggleComments = () => {
	// 	setShowComments((prevShowComments) => {
	// 		return !prevShowComments;
	// 	});
	// };
	// useEffect(() => {
	// 	dispatch(fetchAllComments());
	// });

	const handleDeleteComment = (commentId) => {
		// dispatch(deleteComment(commentId));
	};

	const handleUpdateComment = ({ commentId, elementId, rate, comment }) => {
		// dispatch(updateComment({ commentId, elementId, rate, comment }));
	};

	// const handleFetchComments = (commentId) => {
	// 	dispatch(fetchAllComments());
	// };

	if (myProfile && user === myProfile._id) {
		isItMyProfile = true;
	}

	// const renderComments = () => {
	// 	if (
	// 		!allComments ||
	// 		allComments.length === 0 ||
	// 		allComments.filter((comment) => comment.elementId === postId).length === 0
	// 	) {
	// 		return (
	// 			<div>
	// 				<p>Non ci sono commenti. Lascia un commento!</p>
	// 				{/* Qui puoi inserire il form per aggiungere un commento */}
	// 				{/*onSubmit={handleNewCommentSubmit}*/}
	// 				<form>
	// 					<textarea placeholder="Scrivi un commento..." />
	// 					<button type="submit">Invia</button>
	// 				</form>
	// 			</div>
	// 		);
	// 	} else {
	// 		return allComments
	// 			.filter((comment) => comment.elementId === postId)
	// 			.map((comment) => (
	// 				<div key={comment._id}>
	// 					<p>{comment.comment}</p>
	// 					<Button onClick={() => handleDeleteComment(comment._id)}>Elimina</Button>
	// 					<Button
	// 						onClick={(event) =>
	// 							handleUpdateComment({
	// 								event,
	// 								commentId: comment._id,
	// 								elementId: comment.elementId,
	// 								rate: comment.rate,
	// 								comment: comment.comment,
	// 							})
	// 						}
	// 					>
	// 						Modifica
	// 					</Button>{" "}
	// 				</div>
	// 			));
	// 	}
	// };
	// const handleNewCommentSubmit = (event, commentId, elementId, rate, comment) => {
	// 	event.preventDefault();
	// 	dispatch(updateComment(commentId));
	// };

	return (
		<Card className="my-1">
			<CardHeader>
				<div className="d-flex align-itmes-center">
					<div className="d-flex justify-content-center align-items-center">
						<Link to={"/profile/" + user}>
							<FaUserCircle className="fs-2 me-3" />
						</Link>
					</div>
					<div className="d-flex flex-column">
						<Link
							to={isItMyProfile ? `/profile/me` : `/profile/${user}`}
							className="mb-0"
							style={{ textDecoration: "none", color: "black" }}
						>
							{username && username}
						</Link>
						<small className="text-muted">{timeSinceCreated}</small>
					</div>
				</div>
			</CardHeader>
			<CardBody>
				<p className="mb-2">{text}</p>
				{postImg && <Image src={postImg} className="w-100 scale" />}
			</CardBody>
			<Card.Footer className="d-flex align-items-center">
				<Button variant="link" className="d-flex align-items-center text-decoration-none ps-0">
					<FaHeart className="me-1 mb-0" /> {Math.floor(Math.random() * 160 + 1)}
				</Button>
				<Button variant="link" className="d-flex align-items-center text-decoration-none">
					{/* onClick={toggleComments()} */}
					<FaRegCommentDots className="me-1 mb-0" /> {Math.floor(Math.random() * 13 + 1)} commenti
				</Button>
				<Button variant="link" className="d-flex align-items-center text-decoration-none">
					<FaShareSquare className="me-1 mb-0" /> Condividi
				</Button>
			</Card.Footer>
			{/* {showComments && renderComments()} */}
		</Card>
	);
};
export default Post;

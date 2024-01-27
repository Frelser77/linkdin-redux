import { useEffect, useState } from "react";
import { Alert, Button, Card, Form, FormControl, Image, Modal, ProgressBar } from "react-bootstrap";
import { FaTrashCan } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { deletePost, editPost } from "../../redux/slice/fetchPostReducer";
import { uploadFile } from "../../redux/slice/fileUploadReducer";
import { FaHeart, FaRegCommentDots, FaShareSquare } from "react-icons/fa";
import Post from "../Post";
import { fetchAllComments } from "../../redux/slice/fetchCommentsReducer";
import { fetchMyProfile } from "../../redux/slice/fetchMyProfileReducer";

const RenderSectionContent = ({ myPosts, activeSection }) => {
	const location = useLocation();
	const status = useSelector((state) => state.fetchPost.status);
	const error = useSelector((state) => state.fetchPost.error);
	const errorUpload = useSelector((state) => state.fileUpload.error);
	const loading = useSelector((state) => state.fileUpload.loading);
	const myProfile = useSelector((state) => state.fetchMyProfile.data);
	console.log(myProfile);
	const allComments = useSelector((state) => state.comments.comments);
	const myComments = allComments.filter((comment) => comment.author._id === myProfile._id);
	console.log("mio", myComments);
	const [showDeletePostModal, setShowDeletePostModal] = useState(false);
	const [showEditPostModal, setShowEditPostModal] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [selectedFile, setSelectedFile] = useState(null);
	const [modalText, setModalText] = useState("");
	const [postId, setPostId] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllComments());
		dispatch(fetchMyProfile());
	}, [dispatch]);

	if (!myProfile) {
		return <div>Caricamento in corso...</div>;
	}

	const handleCloseEdit = () => setShowEditPostModal(false);
	const handleShowEdit = () => setShowEditPostModal(true);

	const handleCloseDelete = () => setShowDeletePostModal(false);
	const handleShowDelete = () => setShowDeletePostModal(true);

	const handleFileChange = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	const handleEditPost = (post) => {
		// setModalText(post.text);
		setPostId(post._id);

		handleShowEdit();
	};

	const confirmDeletePost = () => {
		dispatch(deletePost({ postId }));
		handleCloseDelete();
	};

	const handleEditSubmit = (event) => {
		event.preventDefault();

		const dataToPost = {
			text: modalText,
		};

		dispatch(editPost({ dataToPost, postId }));

		if (selectedFile) {
			dispatch(uploadFile({ file: selectedFile, type: "post", id: postId }));
		}
		setShowAlert(true);
		setTimeout(() => {
			setShowAlert(false);
			handleCloseEdit();
		}, 1500);
	};

	const handelDeletePost = (post) => {
		setPostId(post._id);

		handleShowDelete();
	};

	switch (activeSection) {
		case "post":
			return location.pathname === "/profile/me"
				? myPosts && (
						<div style={{ maxHeight: "500px", overflowY: "auto" }}>
							<>
								{[...myPosts].reverse().map((post) => (
									<Post
										key={post._id}
										username={myProfile.name + " " + myProfile.surname}
										text={post.text}
										createdAt={post.createdAt}
										user={post.user._id}
										postImg={post.image}
										allComments={allComments && allComments}
										postId={post._id}
										likes={post.likes}
									/>
								))}
								<Modal
									show={showEditPostModal}
									onHide={handleCloseEdit}
									dialogClassName="editPostModal"
									className="modal-index"
								>
									<Modal.Header closeButton>
										<Modal.Title>Modifica post</Modal.Title>
									</Modal.Header>
									<Modal.Body>
										{showAlert && error && <Alert variant="danger">Error: {error}</Alert>}
										{showAlert && status === "succeeded" && (
											<Alert variant="success">Post aggiornato con successo!</Alert>
										)}
										<Form className="mx-2" onSubmit={(event) => handleEditSubmit(event)}>
											<Form.Group className="mb-3" controlId="editForm.ControlInput1">
												<Form.Label className="fw-semibold w-100">
													Contenuto del post
													<FormControl
														value={modalText}
														placeholder="Cambia contenuto post"
														onChange={(e) => setModalText(e.target.value)}
													/>
												</Form.Label>
											</Form.Group>
											<Form.Group controlId="formFile" className="mb-3">
												<Form.Label>Choose a file</Form.Label>
												<Form.Control type="file" onChange={handleFileChange} />
											</Form.Group>
											<div className="d-flex justify-content-end">
												<Button type="submit">Save</Button>
											</div>
										</Form>
										{loading && <ProgressBar animated now={100} label="Uploading..." />}

										{errorUpload && <Alert variant="danger">Error: {errorUpload}</Alert>}
									</Modal.Body>
								</Modal>
								<Modal
									show={showDeletePostModal}
									onHide={handleCloseDelete}
									dialogClassName="delPostModal"
									className="mt-5 modal-index"
								>
									<Modal.Header closeButton>
										<Modal.Title>Cancella Post</Modal.Title>
									</Modal.Header>

									<Modal.Body>
										<p className="text-center fs-3 fw-semibold">Sei sicuro di voler cancellare questo post?</p>
									</Modal.Body>

									<Modal.Footer>
										<Button variant="secondary" onClick={handleCloseDelete}>
											Annulla
										</Button>
										<Button variant="danger" onClick={confirmDeletePost}>
											Cancella
										</Button>
									</Modal.Footer>
								</Modal>
							</>
						</div>
				  )
				: "";
		case "commenti":
			return (
				<div style={{ maxHeight: "500px", overflowY: "auto" }}>
					{myComments.length > 0 ? (
						myComments.map((comment) => (
							<Card key={comment._id} className="mb-3">
								<Card.Body>
									<blockquote className="blockquote mb-0">
										<p>{comment.comment}</p>
										<footer className="blockquote-footer">
											Scritto il <cite title="Source Title">{new Date(comment.createdAt).toLocaleDateString()}</cite>
										</footer>
									</blockquote>
								</Card.Body>
							</Card>
						))
					) : (
						<Alert variant="info">Non hai ancora scritto commenti.</Alert>
					)}
				</div>
			);

		case "immagini":
			return (
				// Contenuto della sezione Immagini
				"NO IMAGE"
			);
		default:
			return null;
	}
};
export default RenderSectionContent;

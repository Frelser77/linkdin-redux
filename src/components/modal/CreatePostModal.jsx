import React, { useState } from "react";
import { Modal, Button, Form, FormControl, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addPost, selectMyProfileData } from "../../redux/slice/fetchPostReducer";
import { uploadFile } from "../../redux/slice/fileUploadReducer";
import ProfileCard from "../ProfileCard";

const CreatePostModal = ({ show, handleClose, profile }) => {
	const myProfile = useSelector((state) => state.fetchMyProfile.data);
	const authenticatedUserId = myProfile?._id;
	const [postText, setPostText] = useState("");
	const [selectedFile, setSelectedFile] = useState(null);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (postText) {
			const dataToPost = { text: postText };
			dispatch(addPost({ dataToPost })).then((action) => {
				if (selectedFile && action.payload) {
					dispatch(uploadFile({ file: selectedFile, type: "post", id: action.payload._id }));
				}
			});
			setPostText("");
			setSelectedFile(null);
			handleClose();
		}
	};

	const handleFileChange = (e) => {
		setSelectedFile(e.target.files[0]);
	};

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Crea un Nuovo Post</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{authenticatedUserId && <ProfileCard profile={profile} currentUserId={authenticatedUserId} />}
				<Form onSubmit={handleSubmit}>
					<Form.Group className="mb-3" controlId="postText">
						<FormControl
							as="textarea"
							rows={3}
							placeholder="Di cosa vorresti parlare?"
							value={postText}
							onChange={(e) => setPostText(e.target.value)}
						/>
					</Form.Group>
					<Form.Group controlId="formFile" className="mb-3">
						<Form.Label>Carica un'immagine</Form.Label>
						<Form.Control type="file" onChange={handleFileChange} />
					</Form.Group>
					<Button variant="primary" type="submit">
						Pubblica
					</Button>
				</Form>
			</Modal.Body>
		</Modal>
	);
};

export default CreatePostModal;

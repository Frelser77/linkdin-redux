import { Button, Card, Col, Form, FormControl, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { HiPhoto } from "react-icons/hi2";
import { MdEventNote } from "react-icons/md";
import { RiArticleLine } from "react-icons/ri";
import Post from "../Post";
import { addMyPost, addPost, fetchAllPosts, resetPostText, setPostText } from "../../redux/slice/fetchPostReducer";
import { useEffect } from "react";
const HomeMain = () => {
  const profile = useSelector((state) => state.fetchMyProfile.data);
  const postList = useSelector((state) => state.fetchPost.postList);
  const post = useSelector((state) => state.fetchPost.post);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const dataToPost = {
      text: post.text,
    };

    dispatch(addPost({ dataToPost }));
    dispatch(addMyPost(dataToPost));
    dispatch(resetPostText());
  };

  return (
    <>
      <Card className="d-flex flex-column pt-2 pb-1 px-3 mb-3">
        <div className="py-1">
          <div className="d-flex align-items-center mb-2">
            <img
              src={profile && profile.image}
              alt="foto profilo"
              style={{ width: "38px", height: "38px", borderRadius: "50%" }}
              className="me-2"
            />

            <div className="w-100">
              <Form onSubmit={(event) => handleSubmit(event)}>
                <FormControl
                  placeholder="Avvia un post"
                  value={post && post.text}
                  className="px-3 py-2 rounded-pill w-100"
                  onChange={(event) => dispatch(setPostText(event.target.value))}
                />
              </Form>
            </div>
          </div>
          <div className="d-flex justify-content-evenly">
            <Button variant="transparent">
              <div className="d-flex align-items-center me-2">
                <HiPhoto className="fs-5 me-1" /> <span>Contenuti multimediali</span>
              </div>
            </Button>
            <Button variant="transparent">
              <div className="d-flex align-items-center me-2">
                <MdEventNote className="fs-5 me-1" />
                <span>Evento</span>
              </div>
            </Button>
            <Button variant="transparent">
              <div className="d-flex align-items-center me-2">
                <RiArticleLine className="fs-5 me-1" />
                <span>Scrivi un articolo</span>
              </div>
            </Button>
          </div>
        </div>
      </Card>
      {postList && (
        <Row className="border border-1 border-light-secondary border-end-0 border-bottom-0 border-start-0 pt-2">
          {[...postList].reverse().map((post) => (
            <Col key={post._id} xs={12}>
              <Post username={post.username} text={post.text} createdAt={post.createdAt} user={post.user._id} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};
export default HomeMain;

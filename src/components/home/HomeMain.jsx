import { Card, Col, FormControl, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { HiPhoto } from "react-icons/hi2";
import { MdEventNote } from "react-icons/md";
import { RiArticleLine } from "react-icons/ri";
import Post from "../Post";
const HomeMain = () => {
  const profile = useSelector((state) => state.fetchProfile.data);
  const postList = useSelector((state) => state.fetchPost.postList);

  return (
    <>
      <Card className="d-flex flex-column py-2 px-3 mb-3">
        <div>
          <div className="d-flex">
            <div>
              <img
                src={profile && profile.image}
                alt="foto profilo"
                style={{ width: "25px", height: "25px", borderRadius: "50%" }}
                className="me-2"
              />
            </div>
            <div className="w-100">
              <FormControl placeholder="Avvia un post" className="px-3 py-2 rounded-pill w-100" />
            </div>
          </div>
          <div className="d-flex justify-content-around my-2">
            <div className="me-2">
              <HiPhoto /> <span>Contenuti multimediali</span>
            </div>
            <div className="me-2">
              <MdEventNote />
              <span>Evento</span>
            </div>
            <div className="me-2">
              <RiArticleLine />
              <span>Scrivi un articolo</span>
            </div>
          </div>
        </div>
      </Card>
      {postList && (
        <Row className="border border-1 border-light-secondary border-end-0 border-bottom-0 border-start-0 pt-2">
          {postList.map((post) => (
            <Col key={post._id} xs={12}>
              <Post username={post.username} text={post.text} createdAt={post.createdAt} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};
export default HomeMain;

import { Col, Row } from "react-bootstrap";
import ProfileCardHome from "./ProfileCardHome";
import HomeMain from "./HomeMain";
import HomeAside from "./HomeAside";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Home = () => {
  const postList = useSelector((state) => state.fetchPost.postList);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(postList);
  });

  return (
    <Row className="my-4">
      <Col xs={3}>
        <ProfileCardHome />
      </Col>
      <Col xs={6}>
        <HomeMain />
      </Col>
      <Col xs={3}>
        <HomeAside />
      </Col>
    </Row>
  );
};

export default Home;

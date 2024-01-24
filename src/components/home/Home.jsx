import { Col, Row } from "react-bootstrap";
import ProfileCardHome from "./ProfileCardHome";
import HomeMain from "./HomeMain";
import HomeAside from "./HomeAside";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <Row className="my-4">
      <Col className="col-3of16">
        <ProfileCardHome />
      </Col>
      <Col className="col-9of16">
        <HomeMain />
      </Col>
      <Col className="col-4of16">
        <HomeAside />
      </Col>
    </Row>
  );
};

export default Home;

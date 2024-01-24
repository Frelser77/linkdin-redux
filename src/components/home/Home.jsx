import { Col, Container, Row } from "react-bootstrap";
import ProfileCardHome from "./ProfileCardHome";
import HomeMain from "./HomeMain";

const Home = () => {
  return (
    <Container>
      <Row className="my-4">
        <Col xs={3} style={{ width: "250px" }}>
          <ProfileCardHome />
        </Col>
        <Col xs={7}>
          <HomeMain />
        </Col>
        <Col xs={3}></Col>
      </Row>
    </Container>
  );
};

export default Home;

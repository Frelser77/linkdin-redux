import { Col, Row } from "react-bootstrap";
import ProfileCardHome from "./ProfileCardHome";
import HomeMain from "./HomeMain";
import HomeAside from "./HomeAside";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <Row className="my-4">
      <div className="col-3of16 flex-shrink-0">
        <ProfileCardHome />
      </div>
      <div className="col-9of16 flex-shrink-0">
        <HomeMain />
      </div>
      <div className="col-4of16 flex-shrink-0">
        <HomeAside />
      </div>
    </Row>
  );
};

export default Home;

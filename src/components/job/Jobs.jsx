import { Col, Row } from "react-bootstrap";
import JobsMain from "./JobsMain";
import JobsAside from "./JobsAside";
import MiniFooter from "../home/MiniFooter";
// import { useDispatch } from "react-redux";

const Jobs = () => {
  // const dispatch = useDispatch();

  return (
    <Row className="my-4">
      <Col xs={3} className="flex-shrink-0">
        <JobsAside />
      </Col>
      <Col xs={6} className="flex-shrink-0">
        <JobsMain />
      </Col>
      <Col xs={3} className="flex-shrink-0">
        <MiniFooter />
      </Col>
    </Row>
  );
};

export default Jobs;

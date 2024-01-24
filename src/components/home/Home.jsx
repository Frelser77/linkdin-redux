import { Col, Container, Row } from "react-bootstrap";
import ProfileCardHome from "./ProfileCardHome";
import HomeMain from "./HomeMain";
import HomeAside from "./HomeAside";

const Home = () => {
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

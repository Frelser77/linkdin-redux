import { useSelector } from "react-redux";
import { Card, CardBody, Col, Row } from "react-bootstrap";
import { HiUserPlus } from "react-icons/hi2";
import { useNavigate } from "react-router";
import { Link, NavLink } from "react-router-dom";

const AllProfiles = () => {
  const profiles = useSelector((state) => state.fetchAllProfiles.data);
  const navigate = useNavigate();

  return (
    <>
      <h2 className="mt-4 mb-3 fs-1">Profili consigliati</h2>
      <Row xs={2} sm={3} md={4} className="my-3">
        {profiles &&
          profiles.map((profile) => (
            <Col className="my-2">
              <Card className="h-100 shadow">
                <CardBody className="d-flex flex-column">
                  <div className="d-flex align-items-start mb-auto pt-2 pb-3">
                    <div>
                      <img
                        src={profile && profile.image}
                        className="rounded-circle me-2"
                        style={{ width: "48px", height: "48px" }}
                        alt="Profile"
                      />
                    </div>
                    <div className="ms-1">
                      <NavLink to={`/profile/${profile._id}`}>
                        {profile && profile.name} {"  "}
                        {profile && profile.surname}
                      </NavLink>
                      <div className="text-muted">{profile && profile.title}</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mx-auto">
                    <NavLink
                      to="/messages"
                      className="btn btn-outline-secondary rounded-pill ps-2 pe-3 mt-3 pb-2 py-1 text-center"
                    >
                      <HiUserPlus className="mx-1" />
                      Collegati
                    </NavLink>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
      </Row>
    </>
  );
};
export default AllProfiles;

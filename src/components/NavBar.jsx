import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  BellFill,
  BriefcaseFill,
  ChatDotsFill,
  HouseDoorFill,
  Linkedin,
  PeopleFill,
  Search,
} from "react-bootstrap-icons";
import InputGroup from "react-bootstrap/InputGroup";
import { useSelector } from "react-redux";

function NavBar() {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [showSubNavbar, setShowSubNavbar] = useState(false);
  const location = useLocation();
  const profile = useSelector((state) => state.fetchProfile.data);

  const changeSelectedIcon = (icon) => {
    setSelectedIcon(icon);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowSubNavbar(currentScrollY > 100 && location.pathname === "/profile/me");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-white py-0 justify-content-center sticky-top shadow-sm"
        style={{ backgroundColor: "white", border: "gainsboro 1px solid" }}
        data-bs-theme="light"
      >
        <Container className="py-0">
          <div className="d-flex align-items-center">
            <Navbar.Brand href="#" className="p-0 d-flex align-items-center">
              <Linkedin className="fs-2" style={{ color: "#0077b5" }} />
            </Navbar.Brand>
            {/* */}
            <Form
              className="d-flex me-4"
              onClick={() => changeSelectedIcon("search")}
              style={{
                border: selectedIcon === "search" ? "2px solid" : "",
                borderRadius: selectedIcon === "search" ? "8px" : "",
              }}
            >
              <InputGroup>
                <InputGroup.Text
                  id="basic-addon1"
                  style={{ backgroundColor: "rgba(220, 220, 220, 0.4)", border: "none" }}
                >
                  <Search />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Cerca"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  className="border-0 outline-0 shadow-none"
                  style={{ border: "none", backgroundColor: "rgba(220, 220, 220, 0.4)" }}
                />
              </InputGroup>
            </Form>
          </div>
          {/* */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-1 my-lg-0 align-items-start" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link
                href="#action1"
                onClick={() => changeSelectedIcon("home")}
                style={{ borderBottom: selectedIcon === "home" ? "2px solid" : "" }}
              >
                <div className="py-1 mx-2 text-center">
                  <HouseDoorFill className="mx-2" style={{ fontSize: "1.3rem" }} />
                  <p className="mb-0" style={{ fontSize: "0.75rem" }}>
                    Home
                  </p>
                </div>
              </Nav.Link>

              <Nav.Link
                href="#action2"
                onClick={() => changeSelectedIcon("rete")}
                style={{ borderBottom: selectedIcon === "rete" ? "2px solid" : "" }}
              >
                <div className="py-1 mx-2 text-center">
                  <PeopleFill className="mx-2" style={{ fontSize: "1.3rem" }} />
                  <p className="mb-0" style={{ fontSize: "0.75rem" }}>
                    Rete
                  </p>
                </div>
              </Nav.Link>
              <Nav.Link
                href="#action3"
                onClick={() => changeSelectedIcon("lavoro")}
                style={{ borderBottom: selectedIcon === "lavoro" ? "2px solid" : "" }}
              >
                <div className="my-1 mx-2 text-center">
                  <BriefcaseFill className="mx-2" style={{ fontSize: "1.3rem" }} />
                  <p className="mb-0" style={{ fontSize: "0.75rem" }}>
                    Lavoro
                  </p>
                </div>
              </Nav.Link>
              <Nav.Link
                href="#action4"
                onClick={() => changeSelectedIcon("messaggi")}
                style={{ borderBottom: selectedIcon === "messaggi" ? "2px solid" : "" }}
              >
                <div className="py-1 mx-2 text-center">
                  <ChatDotsFill className="mx-2" style={{ fontSize: "1.3rem" }} />
                  <p className="mb-0" style={{ fontSize: "0.75rem" }}>
                    Messaggi
                  </p>
                </div>
              </Nav.Link>
              <Nav.Link
                href="#action5"
                onClick={() => changeSelectedIcon("notifiche")}
                style={{ borderBottom: selectedIcon === "notifiche" ? "2px solid" : "" }}
              >
                <div className="py-1 mx-2 text-center">
                  <BellFill className="mx-2" style={{ fontSize: "1.3rem" }} />
                  <p className="mb-0" style={{ fontSize: "0.75rem" }}>
                    Notifiche
                  </p>
                </div>
              </Nav.Link>
              <div className="py-2 ms-2 pb-0 text-center">
                <Link to={"/profile/me"}>
                  <img
                    src={profile.image}
                    alt="foto profilo"
                    style={{ width: "25px", height: "25px", borderRadius: "50%" }}
                  ></img>
                </Link>
                <NavDropdown title="Tu" id="navbarScrollingDropdown" style={{ fontSize: "0.85rem", marginTop: "-5px" }}>
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showSubNavbar && (
        <Container fluid className="sub-navbar shadow-sm py-1 sticky-top">
          <Container>
            <div className="d-flex align-items-center justify-content-between">
              {/* Parte sinistra: Profilo utente */}
              <div className="d-flex align-items-center">
                <Link to={"/profile/me"}>
                  <img
                    src={profile.image}
                    alt="Profilo"
                    className="rounded-circle me-4"
                    style={{ width: "36px", height: "36px" }}
                  />
                </Link>
                <div>
                  <NavLink className="undecorated fw-bold">
                    {profile.name} {profile.surname}
                  </NavLink>
                  <div className="text-muted">{profile.title}</div>
                </div>
              </div>
              {/* Parte destra: Pulsanti */}
              <div>
                <button className="btn btn-outline-primary btn-sm me-2">Aggiungi sezione del profilo</button>
                <button className="btn btn-primary btn-sm">Disponibile per</button>
              </div>
            </div>
          </Container>
        </Container>
      )}
    </>
  );
}

export default NavBar;

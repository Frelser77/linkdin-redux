import React from "react";
import { Col, Row } from "react-bootstrap";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <Row>
      <Col>
        <Card className="mb-1">
          <Card.Header className="bg-primary text-white" style={{ height: "200px" }}>
            EPICODE
          </Card.Header>
          <Card.Body className="position-relative">
            <Card.Img
              variant="top"
              src="path-to-your-image.jpg"
              className="position-absolute"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                margin: "0 auto",
                top: "-38%",
                zIndex: "1000",
                backgroundColor: "red",
              }}
            />
            <Card.Title className="mt-5 fs-2">Salvatore Alessandro D'Amico</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Junior Front-end Developer</Card.Subtitle>
            <Card.Text>Oria, Puglia, Italia</Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Disponibile a lavorare</ListGroupItem>
              <ListGroupItem>Ruoli di React Developer</ListGroupItem>
            </ListGroup>
            <Button variant="primary">Mostra dettagli</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title className="mb-0">Analisi</Card.Title>
            <Card.Text className="mb-2 text-muted">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                class="mercado-match __web-inspector-hide-shortcut__"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"></path>
              </svg>{" "}
              Solo per te
            </Card.Text>
            <Card.Text className="d-flex">
              <div className="me-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                </svg>
                <Link className="undecorated"> 2 visualizzazioni del profilo</Link>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
                </svg>
                <Link className="undecorated"> 2 comparse nei motori di ricerca</Link>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3} className="d-none d-md-block">
        <h1>STEFANO WE LOVE YOU</h1>
      </Col>
    </Row>
  );
}

export default Profile;

import React from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";

const MiniFooter = () => {
  return (
    <div className="d-flex flex-column sticky-top">
      <div className="d-flex flex-wrap justify-content-center" style={{ color: "gray" }}>
        <p className="mx-1">Informazioni</p>
        <p className="mx-1">Accessibilità</p>
        <p className="mx-1">Centro Assistenza</p>
        <p className="mx-1">Centro sicurezza</p>

        <Dropdown>
          <Dropdown.Toggle
            variant="light"
            className="bg-none mx-1"
            style={{ border: "none", color: "gray", backgroundColor: "transparent" }}
            size="sm"
            id="dropdown-basic"
          >
            Privacy e condizioni
          </Dropdown.Toggle>
          <Dropdown.Menu className="langDrop">
            <Dropdown.Item className="dropHover" href="#/action-1">
              Termini e condizioni delle Pagine LinkedIn
            </Dropdown.Item>
            <Dropdown.Item className="dropHover" href="#/action-2">
              Informazioni sui cookie
            </Dropdown.Item>
            <Dropdown.Item className="dropHover" href="#/action-3">
              Informazioni sul copyright
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <p className="mx-1">Opzioni per gi annunci pubblicitari</p>
        <p className="mx-1">Pubblicità</p>
        <Dropdown>
          <Dropdown.Toggle
            variant="light"
            className="bg-none"
            style={{ border: "none", color: "gray", backgroundColor: "transparent" }}
            size="sm"
            id="dropdown-basic"
          >
            Servizi alle aziende
          </Dropdown.Toggle>
          <Dropdown.Menu className="langDrop">
            <Dropdown.Item className="dropHover" href="#/action-4">
              Centro amministrazione
            </Dropdown.Item>
            <Dropdown.Item className="dropHover" href="#/action-5">
              Crea una pagina aziendale <FiPlus />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <p className="mx-1">Scarica l'app LinkedIn</p>
        <p className="mx-1">Altro</p>
      </div>
    </div>
  );
};

export default MiniFooter;

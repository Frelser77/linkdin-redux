import { Card, Col } from "react-bootstrap";
import { IoSettingsSharp } from "react-icons/io5";
import { FaBookmark, FaListUl } from "react-icons/fa";
import { BsClipboard2Check, BsFillPlayBtnFill } from "react-icons/bs";

const JobsAside = () => {
  return (
    <Col className="d-flex flex-wrap">
      <Card className="d-flex flex-column align-items-start bg-white py-4 px-4">
        <div className="text-start">
          <ul className="list-unstyled mb-0">
            <li>
              <div className="d-flex align-items-center mb-4">
                <FaBookmark className="me-3 fs-4" /> <h6 className="mb-0">Le mie offerte di lavoro</h6>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center mb-4">
                <FaListUl className="me-3 fs-4" /> <h6 className="mb-0">Preferenze</h6>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center mb-4">
                <BsClipboard2Check className="me-3 fs-4" /> <h6 className="mb-0">Valutazioni delle competenze</h6>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center mb-4">
                <BsFillPlayBtnFill className="me-3 fs-4" /> <h6 className="mb-0">Indicazioni per chi cerca lavoro</h6>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center">
                <IoSettingsSharp className="me-3 fs-4" /> <h6 className="mb-0">Impostazioni di candidatura</h6>
              </div>
            </li>
          </ul>
        </div>
      </Card>
    </Col>
  );
};

export default JobsAside;

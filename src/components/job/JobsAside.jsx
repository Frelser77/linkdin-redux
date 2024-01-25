import { Col } from "react-bootstrap";
import { IoSettingsSharp } from "react-icons/io5";
import { FaBookmark, FaListUl } from "react-icons/fa";
import { BsClipboard2Check, BsFillPlayBtnFill } from "react-icons/bs";

const JobsAside = () => {
  return (
    <Col className="d-flex flex-wrap">
      <div className="my-2 shadow d-flex flex-column align-items-start mb-2 border border-1 border-secondary border-top-0 border-end-0 border-start-0 pt-1 pb-3 bg-white rounded shadow px-2">
        <div className="px-4 py-1 text-start">
          <ul className="py-5 list-unstyled">
            <li>
              <div className="d-flex flex-row align-items-center mb-2">
                <FaBookmark className="me-2 fs-5" /> <h5>Le mie offerte di lavoro</h5>
              </div>
            </li>
            <li>
              <div className="d-flex flex-row align-items-center mb-2">
                <FaListUl className="me-2 fs-5" /> <h5>Preferenze</h5>
              </div>
            </li>
            <li>
              <div className="d-flex flex-row align-items-center mb-2">
                <BsClipboard2Check className="me-2 fs-5" /> <h5>Valutazioni delle competenze</h5>
              </div>
            </li>
            <li>
              <div className="d-flex flex-row align-items-center mb-2">
                <BsFillPlayBtnFill className="me-2 fs-5" /> <h5>Indicazioni per chi cerca lavoro</h5>
              </div>
            </li>
            <li>
              <div className="d-flex flex-row align-items-center mb-2">
                <IoSettingsSharp className="me-2 fs-5" /> <h5>Impostazioni di candidatura</h5>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Col>
  );
};

export default JobsAside;

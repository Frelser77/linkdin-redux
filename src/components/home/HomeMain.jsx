import { Card, FormControl } from "react-bootstrap";
import { useSelector } from "react-redux";
import { HiPhoto } from "react-icons/hi2";
import { MdEventNote } from "react-icons/md";
import { RiArticleLine } from "react-icons/ri";
const HomeMain = () => {
  const profile = useSelector((state) => state.fetchProfile.data);
  return (
    <Card className="d-flex flex-column p-2">
      <div>
        <div className="d-flex">
          <div>
            <img
              src={profile && profile.image}
              alt="foto profilo"
              style={{ width: "25px", height: "25px", borderRadius: "50%" }}
              className="me-2"
            />
          </div>
          <div className="w-100">
            <FormControl placeholder="Avvia un post" className="px-3 py-2 rounded-pill w-100" />
          </div>
        </div>
        <div className="d-flex justify-content-between my-2">
          <div className="me-2">
            <HiPhoto /> <span>Contenuti multimediali</span>
          </div>
          <div className="me-2">
            <MdEventNote />
            <span>Evento</span>
          </div>
          <div className="me-2">
            <RiArticleLine />
            <span>Scrivi un articolo</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default HomeMain;

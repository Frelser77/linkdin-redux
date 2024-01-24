import { Card, CardBody, CardHeader } from "react-bootstrap";

const Post = ({ profile, text }) => {
  return (
    <Card>
      <CardHeader>
        <div className="d-flex">
          <div>
            <img
              src=""
              alt="foto profilo"
              style={{ width: "25px", height: "25px", borderRadius: "50%" }}
              className="me-3"
            />
          </div>
          <div>
            <p>{profile && profile.name + " " + profile.surname}</p>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <p>text</p>
      </CardBody>
    </Card>
  );
};
export default Post;

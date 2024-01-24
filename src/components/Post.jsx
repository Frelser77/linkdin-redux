import { Card, CardBody, CardHeader } from "react-bootstrap";
import { it } from "date-fns/locale";
import { formatDistanceToNow } from "date-fns";
import { FaUserCircle } from "react-icons/fa";

const Post = ({ username, text, createdAt }) => {
  const timeSinceCreated = formatDistanceToNow(new Date(createdAt), { addSuffix: true, locale: it });
  return (
    <Card className="my-1">
      <CardHeader>
        <div className="d-flex align-itmes-center">
          <div className="d-flex justify-content-center align-items-center">
            <FaUserCircle className="fs-2 me-3" />
          </div>
          <div className="d-flex flex-column">
            <p className="mb-0">{username && username}</p>
            <small className="text-muted">{timeSinceCreated}</small>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <p>{text}</p>
      </CardBody>
    </Card>
  );
};
export default Post;

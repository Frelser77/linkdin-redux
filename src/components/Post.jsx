import { Card, CardBody, CardHeader, Image } from "react-bootstrap";
import { it } from "date-fns/locale";
import { formatDistanceToNow } from "date-fns";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Post = ({ username, text, createdAt, user, postImg }) => {
  const timeSinceCreated = formatDistanceToNow(new Date(createdAt), { addSuffix: true, locale: it });
  let isItMyProfile = false;
  const myProfile = useSelector((state) => state.fetchMyProfile.data);

  if (myProfile && user === myProfile._id) {
    isItMyProfile = true;
  }

  return (
    <Card className="my-1">
      <CardHeader>
        <div className="d-flex align-itmes-center">
          <div className="d-flex justify-content-center align-items-center">
            <FaUserCircle className="fs-2 me-3" />
          </div>
          <div className="d-flex flex-column">
            <Link
              to={isItMyProfile ? `/profile/me` : `/profile/${user}`}
              className="mb-0"
              style={{ textDecoration: "none", color: "black" }}
            >
              {username && username}
            </Link>
            <small className="text-muted">{timeSinceCreated}</small>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <p className="mb-2">{text}</p>
        {postImg && <Image src={postImg} className="w-100" />}
      </CardBody>
    </Card>
  );
};
export default Post;

import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";

const SingleJob = ({ job }) => {
  const [isClosed, setisClosed] = useState(false);

  const handleClose = () => {
    setisClosed(true);
  };
  return (
    !isClosed && (
      <Card className="mb-3">
        <Card.Body>
          <Card.Link style={{ textDecoration: "none", cursor: "pointer" }}>{job.title}</Card.Link>
          <Card.Subtitle className="mb-2 text-muted">{job.company_name}</Card.Subtitle>
          <Card.Text>{job.category}</Card.Text>
          <Card.Text className="text-muted">
            {job.candidate_required_location && job.candidate_required_location}
          </Card.Text>
        </Card.Body>
        <Button
          variant="outline-secondary"
          className="position-absolute top-0 end-0 mt-2 me-2"
          onClick={() => handleClose()}
        >
          <FaTimes />
        </Button>
      </Card>
    )
  );
};

export default SingleJob;

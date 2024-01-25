import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import SingleJob from "./SingleJob";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../redux/slice/fetchJobsReducers";
import { useParams } from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5";

const JobsMain = () => {
  const [isWindowVisible, setWindowVisibility] = useState(true);

  const toggleWindowVisibility = () => {
    setWindowVisibility(!isWindowVisible);
  };

  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.entities);
  const loading = useSelector((state) => state.jobs.loading);
  const params = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (params.query !== "") {
      setSearchQuery(params.query);
      console.log(searchQuery);
      dispatch(fetchJobs(searchQuery));
    } else {
      dispatch(fetchJobs());
    }
  }, [dispatch, params.query, searchQuery]);

  if (loading === "pending") {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Row>
        <Col xs={12}>
          {jobs && jobs.length > 0
            ? jobs.map((job) => <SingleJob key={job._id} job={job} />)
            : (console.log(jobs), (<div>Nessun lavoro trovato</div>))}
        </Col>
      </Row>
      {isWindowVisible && (
        <Card className="d-flex flex-column border border-1 border-light-secondary border-end-0 border-bottom-0 border-start-0 pt-2 pb-1 px-3 my-3">
          <div className="d-flex justify-content-between align-items-center py-1">
            <h4 className="mb-0">Ricerche di offerte di lavoro suggerite:</h4>
            <Button variant="transparent" onClick={toggleWindowVisibility}>
              {isWindowVisible ? <IoCloseCircle className="fs-5" /> : "Mostra"}
            </Button>
          </div>
          <div className="py-1">
            <Button variant="outline-primary" className="mx-1 rounded-pill py-0 fw-semibold text-wrap">
              <IoSearch /> categoria bella
            </Button>
            <Button variant="outline-primary" className="mx-1 rounded-pill py-0 fw-semibold text-wrap">
              <IoSearch /> categoria ancora più bella
            </Button>
            <Button variant="outline-primary" className=" mx-1 rounded-pill py-0 fw-semibold text-wrap">
              <IoSearch /> terza categoria
            </Button>
            <Button variant="outline-primary" className=" mx-1 rounded-pill py-0 fw-semibold text-wrap">
              <IoSearch /> prov wrap
            </Button>
          </div>
        </Card>
      )}
    </>
  );
};

export default JobsMain;

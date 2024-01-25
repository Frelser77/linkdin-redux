import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import SingleJob from "./SingleJob";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../redux/slice/fetchJobsReducers";

const JobsMain = () => {
	const [isWindowVisible, setWindowVisibility] = useState(true);

	const toggleWindowVisibility = () => {
		setWindowVisibility(!isWindowVisible);
	};

	const dispatch = useDispatch();
	const jobs = useSelector((state) => state.jobs.entities);
	const loading = useSelector((state) => state.jobs.loading);

	useEffect(() => {
		dispatch(fetchJobs());
	}, [dispatch]);

	if (loading === "pending") {
		return <div>Loading...</div>;
	}

	return (
		<>
			{" "}
			{isWindowVisible && (
				<Card className="d-flex flex-column pt-2 pb-1 px-3 mb-3">
					<div className="d-flex justify-content-between align-items-center py-1">
						<h4>Ricerche di offerte di lavoro suggerite:</h4>
						<Button
							variant="light"
							className="rounded-circle "
							style={{ backgroundColor: "gainsboro" }}
							onClick={toggleWindowVisibility}
						>
							{isWindowVisible ? "X" : "Mostra"}
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
			<Row className="border border-1 border-light-secondary border-end-0 border-bottom-0 border-start-0 pt-2">
				<Col xs={12}>
					{Array.isArray(jobs)
						? jobs.map((job) => <SingleJob key={job._id} job={job} />)
						: (console.log(jobs), (<div>Nessun lavoro trovato</div>))}
				</Col>
			</Row>
		</>
	);
};

export default JobsMain;

import { Button, Card, CardBody, CardHeader, CardFooter } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

const SingleJob = ({ job }) => {
	return (
		<Card className="my-1">
			<CardHeader>
				<div className="d-flex align-items-center">
					<div className="d-flex justify-content-center align-items-center">
						{/* le aziende non mi pare abbiano immagine quindi si può cancellare questa parte */}
						<FaUserCircle className="fs-2 me-3" />
					</div>
					<div className="d-flex flex-column">
						{/* <Link to={"#"} className="mb-0" style={{ textDecoration: "none", color: "black" }}> */}
						{job.company_name && job.company_name} {/* </Link> */}
						<small className="text-muted">{new Date(job.publication_date).toLocaleDateString()}</small>
					</div>
				</div>
			</CardHeader>
			<CardBody>
				<p className="mb-0" dangerouslySetInnerHTML={{ __html: job.description }}></p>
			</CardBody>
			<CardFooter className="align-items-center justify-content-between">
				<div className="d-flex justify-content-between align-items-baseline w-100">
					<small className="text-muted">{job.candidate_required_location}</small>
					<Button variant="info" className="ms-2">
						{job.category && job.category}
					</Button>
					<Card.Link href={job.url && job.url} target="_blank" className="ms-2">
						Job Link
					</Card.Link>
				</div>
			</CardFooter>
		</Card>
	);
};

export default SingleJob;

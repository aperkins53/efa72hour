import React from "react";
import {
    Card,
    Button,
    CardTitle,
    CardText,
    CardSubtitle,
    CardBody,
} from "reactstrap";

const GitJobsResults = (props) => {
    return (
        <div className="Cards text-center align-items-center">
            <Card className="col align-items-center" style={{ background: "white", width: "420px", height: "420px", borderStyle: "solid", borderColor: "rgb(37,87,167)" }}>
                <CardBody className="cardBody">
                    <CardTitle tag="h3" style={{ position: "absolute", left: 20, top: 75, right: 20, margin: "auto" }}>{props.jobs.title}</CardTitle>
                    <CardSubtitle style={{ fontSize: "30px", fontWeight: 700, color: "rgb(37,87,167)", left: 0, top: 170, right: 0, margin: "auto", position: "absolute" }} tag="h6" className="text-muted"> {props.jobs.company}
                    </CardSubtitle>
                    <CardText style={{ position: "absolute", left: 20, top: 245, right: 20, margin: "auto" }}>
                        {props.jobs.location}
                        <br />
                        {props.jobs.type}
                    </CardText>
                    <br />
                    <Button className="mt-auto" style={{
                        position: "absolute", fontSize: "20px", fontWeight: 700, color: "white", background: "rgb(37,87,167)", left: 20, bottom: 20, right: 20, margin: "auto"
                    }} target='_blank' href={props.jobs.url}>Click For Full Job Listing</Button>

                </CardBody>
            </Card>
        </div>
    );
};

export default GitJobsResults;

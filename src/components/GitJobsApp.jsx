import React, { useState } from 'react';
import GitJobsResults from './GitJobsResults';
import {
    Container, Row, CardColumns, Col
} from 'reactstrap';
const GitJobsApp = () => {
    const [results, setResults] = useState([]);
    function fetchResults() {
        const corsURL = "https://efa-cors-anywhere.herokuapp.com/"
        // const gitJobURL = `https://jobs.github.com/positions.json?${latitude}&${longitude}`
        const gitJobURL = `https://jobs.github.com/positions.json?https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823?limit=3`
        fetch(corsURL + gitJobURL)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                setResults(json)
            }
            )
    }

    // useEffect(() => {
    //     fetchResults();
    // }, []);

    function displayJobs() {
        return results.length > 0
            ? results.splice(0, 4).map((result) =>
                <GitJobsResults jobs={result} />) : null;
    }
    return (
        <Container className="container">
            <Row className="row">
                <div>
                    <br />
                    <Col className="mt-auto">
                        <button type="button" class="btn btn-lg" style={{ fontWeight: 700, color: "white", background: "rgb(37,87,167)" }} onClick={fetchResults}>Find Jobs</button>
                    </Col>
                    <br />
                </div>
                <CardColumns className="row align-items-center">{displayJobs()}</CardColumns>
            </Row>
        </Container>
    )
};

export default GitJobsApp;
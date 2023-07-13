import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SBreadCrumb from "../../components/Breadcrumb";
import { useSelector, useDispatch } from "react-redux";
import TableWithAction from "../../components/TableWithAction";
import {
  fetchjobs,
  setDescription,
  setLocation,
} from "../../redux/jobs/action";
import SearchInput from "../../components/SearchInput";

function Jobs() {
  const dispatch = useDispatch();

  const jobs = useSelector((state) => state.jobs);
  console.log(jobs);

  useEffect(() => {
    dispatch(fetchjobs());
  }, [dispatch, jobs.description, jobs.location]);

  return (
    <Container className="mt-3">
      <SBreadCrumb textSecound={"Jobs"} />
      <Row>
        <Col>
          <p>Search Description</p>
          <SearchInput
            name="description"
            query={jobs.description}
            handleChange={(e) => dispatch(setDescription(e.target.value))}
          />
        </Col>
        <Col>
          <p>Search Location</p>
          <SearchInput
            name="location"
            query={jobs.location}
            handleChange={(e) => dispatch(setLocation(e.target.value))}
          />
        </Col>
      </Row>
      <TableWithAction
        status={jobs.status}
        thead={["Type", "Company", "Location", "Title", "Aksi"]}
        data={jobs.data}
        tbody={["type", "company", "location", "title"]}
        viewUrl={`/jobs`}
      />
    </Container>
  );
}

export default Jobs;

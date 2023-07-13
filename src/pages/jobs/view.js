import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SBreadCrumb from "../../components/Breadcrumb";
import { getData } from "../../utils/fetch";

export default function ViewJobs() {
  const { id } = useParams();
  const [html, setHtml] = useState({ __html: "" });
  const [htmlApply, setHtmlApply] = useState({ __html: "" });
  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    type: "",
    company: "",
    company_link: "",
    url: "",
    company_logo: "",
  });
  const fetchOneJobs = async () => {
    const res = await getData(`/jobs/${id}`);
    console.log(res);
    setForm({
      ...form,
      title: res.data.data.title,
      description: res.data.data.description,
      location: res.data.data.location,
      type: res.data.data.type,
      company: res.data.data.company,
      company_link: res.data.data.company_url,
      url: res.data.data.url,
      company_logo: res.data.data.company_logo,
    });
    setHtml({ ...html, __html: res.data.data.description });
    setHtmlApply({ ...htmlApply, __html: res.data.data.how_to_apply });
  };

  useEffect(() => {
    fetchOneJobs();
  }, []);

  return (
    <Container className="mt-3">
      <SBreadCrumb textSecound={"Jobs"} urlSecound={"/jobs"} textThird="View" />
      <p style={{ textAlign: "end" }}>
        {form.type} / {form.location}
      </p>
      <h1>{form.title}</h1>
      <Row>
        <Col>
          <section>
            <div dangerouslySetInnerHTML={html} />
          </section>
        </Col>
        <Col xs lg={3}>
          <Card
            style={{
              width: "20rem",
              marginBottom: "2rem",
              backgroundColor: "#F4E0B9",
            }}
          >
            <Card.Body>
              <Card.Title>{form.company}</Card.Title>
              <Image src={form.company_logo} />
              <div>
                <a href={form.company_link}>{form.company_link}</a>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem", backgroundColor: "#EFE1D1" }}>
            <Card.Body>
              <Card.Title>How To Apply</Card.Title>
              <div dangerouslySetInnerHTML={htmlApply} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

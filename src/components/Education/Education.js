import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaUniversity, FaCalendarAlt, FaBookOpen } from "react-icons/fa";

function Education() {
  const educationData = [
    {
      degree: "Bachelor of Engineering",
      institution: "Lokmanya Tilak College of Engineering, Navi Mumbai",
      duration: "2017 - 2021",
      score: "CGPA - 8.15",
      course: "Electronic and Telecommunication Engineering",
    },
    {
      degree: "Grade XII (HSC)",
      institution: "K. J. Somaiya College, Vidyavihar",
      duration: "2017",
      score: "Percentage - 64.92%",
    },
    {
      degree: "Grade X (SSC)",
      institution: "Sahyadri Vidyamandir, Bhandup",
      duration: "2015",
      score: "Percentage - 90%",
    },
  ];

  return (
    <Container fluid className="education-section" id="education">
      <Container>
        <h1 className="education-heading">
          <span className="purple">Education</span>
        </h1>
        <Row>
          {educationData.map((edu, index) => (
            <Col md={12} className="mb-4" key={index}>
              <div className="education-card">
                <h3>{edu.degree}</h3>
                <h5>
                  <FaUniversity className="icon" /> {edu.institution}
                </h5>
                <p>
                  <FaCalendarAlt className="icon" /> {edu.duration}
                </p>
                <h6 className="score">{edu.score}</h6>
                {edu.course && (
                  <p>
                    <FaBookOpen className="icon" /> {edu.course}
                  </p>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Education;

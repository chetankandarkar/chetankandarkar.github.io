import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaCode, FaCloud, FaTools } from "react-icons/fa";

function Skills() {
  const skills = [
    {
      category: "Backend",
      icon: <FaCode className="icon" />,
      technologies: [
        "Java",
        "Spring Boot",
        "Spring MVC",
        "Spring Security",
        "JDBC",
        "Data JPA",
        "MySQL",
        "Microservices",
      ],
    },
    {
      category: "Frontend",
      icon: <FaCode className="icon" />,
      technologies: ["React JS", "HTML", "CSS", "Javascript", "JSP"],
    },
    {
      category: "Cloud & DevOps",
      icon: <FaCloud className="icon" />,
      technologies: ["AWS", "Git", "Jenkins", "Sonarqube"],
    },
  ];

  return (
    <Container fluid className="skills-section" id="skills">
      <Container>
        <h1 className="skills-heading">
          My <strong className="purple">Skills </strong>
        </h1>
        <Row>
          {skills.map((skill, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card className="skill-card shadow-sm">
                <Card.Body>
                  <Card.Title>
                    {skill.icon} {skill.category}
                  </Card.Title>
                  <ul className="mt-3">
                    {skill.technologies.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Skills;

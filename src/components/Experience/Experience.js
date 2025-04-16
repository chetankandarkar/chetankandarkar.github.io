import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";


function Experience() {
    const experiences = [
      {
        title: "Software Engineer",
        company: "Euronet Services India Private Limited",
        date: "06/2024 - Present",
        location: "Mumbai",
        responsibilities: [
          "Develop, enhance, and maintain transaction APIs for seamless banking and payment processing.",
          "Design and implement a robust bank portal with secure authentication and authorization mechanisms.",
          "Work with Spring Boot, Spring MVC, and Spring Security to build and secure applications.",
          "Optimize database interactions using JPA, Hibernate, and JDBC.",
          "Collaborate with cross-functional teams including banking partners and stakeholders.",
        ],
      },
      {
        title: "Programmer Analyst",
        company: "Cognizant Technology Solutions",
        date: "02/2022 - 06/2024",
        location: "Mumbai",
        responsibilities: [
          "Developed and maintained Java-based Spring Boot applications. Managed and implemented changes across multiple services to deliver prompt solutions with minimal defects. Experience in Spring services related to the project and its various functionality.",
          "Utilized ReactJS for front end development, creating dynamic and responsive user interfaces.",
          "Deployed and managed applications on AWS, leveraging cloud services such as EC2, S3, RDS for scalable and reliable solutions.",
        ],
      },
    ];
  
    return (
        <Container fluid className="experience-section" id="experience">
          <Container>
            <h1 className="experience-heading">
            Work <strong className="purple">Experience </strong>
            </h1>
            <Row>
              {experiences.map((exp, index) => (
                <Col md={12} className="mb-4" key={index}>
                  <div className="experience-card">
                    <h3>{exp.title}</h3>
                    <h5>
                      <FaBuilding className="icon" /> {exp.company}
                    </h5>
                    <p>
                      <FaCalendarAlt className="icon" /> {exp.date} &nbsp; | &nbsp;
                      <FaMapMarkerAlt className="icon" /> {exp.location}
                    </p>
                    <ul>
                      {exp.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </Container>
      );
    }
    
    export default Experience;
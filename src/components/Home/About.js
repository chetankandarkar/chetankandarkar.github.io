import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function About() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> About Me </span> 
            </h1>
            <p className="home-about-body">
            I am a <b className="purple">  Full Stack Java Developer </b> with experience in developing and maintaining APIs and user-friendly applications. 
            <br />
              <br />I am fluent in classics like {" "}  
                <b className="purple">  Java, Spring Boot, SQL, ReactJS, and AWS. </b>

              <br />
              <br />
              My collaboration with cross-functional teams and a proven track record of delivering high-quality software reflect my dedication to creating robust technological solutions.

              <br />
              <br />
              I am committed to continuous learning and staying updated with the latest industry trends, which helps me write clean, efficient, and optimized code. 
              <br />
              <br />

              My goal is to contribute to innovative projects where I can apply my skills to build impactful digital products that add value to both users and businesses.
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar mt-5">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}
export default About;

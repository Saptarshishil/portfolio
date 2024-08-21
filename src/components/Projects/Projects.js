import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import download3 from "../../Assets/Projects/download3.jpeg";

import download from "../../Assets/Projects/download.jpeg";
import suicide from "../../Assets/Projects/suicide.png";
import download4 from "../../Assets/Projects/download4.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={download}
              isBlog={false}
              title="KIIT GPT"
              description="KIIT GPT project serves as a streamlined guide, offering detailed route descriptions for all KIIT campuses alongside comprehensive maps for efficient navigation. Additionally, it provides valuable information on faculty members within the Computer Science department.

"
              ghLink="https://github.com/Saptarshishil/PYTHON-FILE/tree/main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={download4}
              isBlog={false}
              title=" Survey of Fog Computing environment and its Simulators | Research Paper
"
              description=" Fog computing is an architectural paradigm that extends cloud computing capabilities closer to the edge of the network, where data is generated. This approach aims to address some limitations of traditional cloud computing, particularly in scenarios requiring low latency, real-time processing, and reduced network bandwidth usage.
"
              ghLink="https://github.com/Saptarshishil/Fog-Computing/tree/main"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={download3}
              isBlog={false}
              title="ML framwork to detect ASD in toddlers"
              description="

Engineered an innovative machine learning solution for identifying Autism Spectrum Disorder (ASD) in young children. The system integrates Linear Discriminant Analysis (LDA) with Support Vector Machine (SVM) techniques, resulting in an exceptional 98.10% accuracy rate in early ASD detection."
              ghLink="https://github.com/Saptarshishil/asd-detection/tree/main"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

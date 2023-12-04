import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Rivalytics"
              subtitle="freelance"
              description="A comprehensive compitetor tracking saas platform. Always stay two steps ahead of your compitetor. Just imagine you are aware of each and every action of your compitetor in real time, sounds really cool right ! .Launching on Jan 2024 stay tuned !"
              skills="golang,AWS,docker,k8s,kafka,react,rds,esc,eks"
              ghLink="https://github.com/"
              demoLink="https://github.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Qually Hire "
              subtitle="freelance"
              description="An application tracking software for resource management. Weather you are a product based company or service based company or both we got you covered. Launching on Jan 2024 stay tuned !"
              skills="golang,react,mongodb,AWS"
              ghLink="https://github.com/"
              demoLink="https://github.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="MagicTalks"
              subtitle="freelance"
              description="Interactive and anynomous chatting platform, embedded with games. Loaded with live video, audio calls feature makes it more charming."
              skills="golang,AWS,MySQL,webRTC,socket.io"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Flappy Bird"
              subtitle="pet project"
              description="A simple yet addictive golang based flappy bird game"
              skills="golang,game development"
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

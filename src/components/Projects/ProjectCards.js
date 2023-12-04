import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import './shake.css'

function ProjectCards(props) {


  const renderSkillsWithColors = () => {
    const skillsArray = props.skills.split(','); // Assuming skills are comma-separated
    return skillsArray.map((skill, index) => (
      <span
        key={index}
        style={{
          backgroundColor: "#c770f0",
          padding: '5px',
          marginRight: '5px',
          marginTop: '5px',
          borderRadius: '5px',
          display: 'inline-block',
          fontWeight: 'bolder'
        }}
      >
        {skill}
      </span>
    ));
  };



  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Header>{props.subtitle}</Card.Header>
        <Card.Title className="shaking-animation">{props.title}</Card.Title>
        <Card.Body>{renderSkillsWithColors()}</Card.Body>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {/* <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button> */}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {/* {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )} */}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;

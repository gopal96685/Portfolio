import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {

  return (
    <Card className="quote-card-view">
      <Card.Body>

        <div style={{ textAlign: "left" }}>
          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", textAlign: "left" }}>
            SDE at <strong className="purple">SIMNOVUS</strong>
          </h1>
          <Card.Subtitle style={{ textAlign: "left", marginBottom: "15px" }}>May 2021 - Dec 2023</Card.Subtitle>
        </div>


        <Card.Text>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              <br />
              <ImPointRight /> Developed a software module using <strong className="purple">Golang, Gorilla,
                and MongoDB</strong>, I designed user-friendly  <strong className="purple">REST APIs</strong>
              to simplify hardware setup. This involved translating user preferences seamlessly into effective
              hardware configurations. The code adheres to straightforward yet powerful principles
              like <strong className="purple">OOP, SOLID principles, and design patterns</strong>.
              Deployed in <strong className="purple">docker, container</strong> operates statelessly, ensuring simplicity and reliability in our technology stack.
            </p>


          </blockquote>
        </Card.Text>

        <Card.Text>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              <br />
              <ImPointRight /> Engineered a high-performance <strong className="purple">microservice container </strong>
              using the power of Golang, seamlessly managing complex hardware logs. Implemented a smooth
              <strong className="purple"> JSON-to-CSV</strong> conversion mechanism, leveraging <strong className="purple">Go-routines, channels </strong>
              to enhance data analysis capabilities.
              Unveiled <strong className="purple">transformative Key Performance Indicators (KPIs)</strong> from logs,
              fostering insightful decision-making.
            </p>


          </blockquote>
        </Card.Text>

        <Card.Text>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify", fontWeight: "bold" }}>
              <br />
              Software Integration/Modifications
            </p>
            <ul>
              <li className="about-activity" style={{ textAlign: "left", marginBottom: "10px" }}>
                <ImPointRight /> Engineered a <strong className="purple">logging system with Golang's Lumberjack package</strong>,
                amplifying development efficiency through an <strong className="purple">80% reduction in debugging time.</strong>
              </li>
              <li className="about-activity" style={{ textAlign: "left", marginBottom: "10px" }}>
                <ImPointRight /> Extended the legacy licensing system to accomodate
                <strong className="purple"> subscription-based licensing with
                  asymmetric encryption</strong>, enhancing revenue dynamics and market influence.
              </li>
              <li className="about-activity" style={{ textAlign: "left", marginBottom: "10px" }}>
                <ImPointRight /> Established a <strong className="purple">1 Gbps data pipeline using Golang's
                  SCTP connection, Go-routines, and channels</strong>, orchestrating seamless hardware data
                transmission at remarkable speeds.
              </li>
            </ul>
          </blockquote>
        </Card.Text>


        <p style={{ color: "rgb(155 126 172)" }}>
          "SaaS is the future!"{" "}
        </p>
        <footer className="blockquote-footer">Gopal</footer>

      </Card.Body>


    </Card>
  );
}

export default AboutCard;

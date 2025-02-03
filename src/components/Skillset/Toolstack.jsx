import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiRender,
  SiVercel,
  SiNetlify
} from "react-icons/si";
import { 
  FaDocker,
  FaAws,
 } from "react-icons/fa";
 import { VscAzureDevops } from "react-icons/vsc";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscAzureDevops />
      </Col>
    </Row>
  );
}

export default Toolstack;

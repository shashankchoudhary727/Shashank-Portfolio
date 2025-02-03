import React from "react";
import { Col, Row } from "react-bootstrap";
import {  DiGit } from "react-icons/di";
import {
  SiNumpy,
  SiPandas,
  SiPytorch,
  SiTensorflow, 
  SiFlask,
  SiScikitlearn
} from "react-icons/si";
import { FaPython } from "react-icons/fa";

const Mlstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy   />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Mlstack;

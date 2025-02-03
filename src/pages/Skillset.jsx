import React from "react";
import { Container } from "react-bootstrap";

import Particle from '../components/Particle'
import Techstack from "../components/Skillset/Techstack";
import Mlstack from "../components/Skillset/Mlstack"
import Toolstack from "../components/Skillset/Toolstack";
// import Leetcode from "../components/Skillset/Leetcode";
// import Github from "../components/Skillset/Github";

const Skillset = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          MERN Stack <strong className="yellow">Skillset </strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          Machine Learning <strong className="yellow">Skillset </strong>
        </h1>

        <Mlstack />

        <h1 className="project-heading">
          <strong className="yellow">Tools</strong> I use
        </h1>
        <Toolstack />

        {/* <Leetcode /> */}
        {/* <Github /> */}
      </Container>
    </Container>
  )
}

export default Skillset
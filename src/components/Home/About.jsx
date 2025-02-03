import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">Shashank Choudhary </span>
                 and I'm from <span className="yellow"> Jabalpur, Madhya Pradesh, India.</span>
                <br />
                <br />
                I am currently a 4th-year undergraduate pursuing a Bachelor of Technology in Electronics and Communication at Gyan Ganga Institute of Technology and Sciences, Jabalpur.
                <br />
                <br />
                  As a
                  <b className="yellow"> MERN Stack </b>developer,  
                  I enjoy tackling new challenges and continuously expanding my skillset.
                  <br />
                  <br />I am proficient in
                    <b className="yellow"> JavaScript and Python </b>
                    and have hands-on experience with modern technologies such as React.js, Node.js, Express, MongoDB.
                  <b className="yellow"> and NextJS.</b>
                  <br />
                  <br />
                  I have a passion for working
                  with building <b className="yellow">AI/ML models </b> and exploring <b className="yellow">Data Science </b>techniques.
                  <br />
                  <br />
                  My interests include working with
                  <i>
                    <b className="yellow"> neural networks, machine learning algorithms, and analyzing datasets </b>
                    to derive meaningful insights. I also enjoy delving into emerging technologies such as
                    <b className="yellow"> Generative AI.</b>
                  </i>
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/shashankchoudhary727/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://x.com/Shashank727_/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://linkedin.com/in/shashank-choudhary-548041296/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/shashank727.c/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About
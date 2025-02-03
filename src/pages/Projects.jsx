import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import zomato from "../assets/projects/zomato.png";
import gemini from "../assets/projects/gemini.png";
import chatapp from "../assets/projects/chatapp.png";
import summarizer from "../assets/projects/summarizer.png";
import digits from "../assets/projects/digits.png"

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatapp}
              isBlog={false}
              title="Friend Chat App"
              description="Chat Application is a real-time messaging platform built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.io for seamless, instant communication. It features secure authentication with JWT, a responsive UI, and real-time message updates. The app supports one-on-one chats, efficient message storage in MongoDB, and a smooth user experience with WebSocket technology for instant message delivery."
              ghLink="https://github.com/shashankchoudhary727/Chat-app-using-MERN"
              // demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gemini}
              isBlog={false}
              title="Gemini Clone"
              description="Gemini Clone is a React-based AI chat application powered by the Google Gemini API 1.5 Flash. It offers intelligent, interactive conversations and tracks chat history. The app features a responsive design for both desktop and mobile devices. Start new conversations effortlessly with a clean, intuitive interface."
              ghLink="https://github.com/shashankchoudhary727/Gemini-clone"
              // demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digits}
              isBlog={false}
              title="Hand Written Digits Recognition"
              description="Handwritten Digit Recognition is an AI-based system that identifies digits (0-9) from handwritten input using deep learning. It typically employs convolutional neural networks (CNNs) trained on datasets like MNIST. The model extracts features from images and classifies them with high accuracy. This technology is widely used in banking, postal services, and digital automation."
              ghLink="https://github.com/shashankchoudhary727/Handwritten-Digit-Recognition"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={summarizer}
              isBlog={false}
              title="Text Summarizer End to End Project"
              description="This End-to-End Text Summarization Project generates concise summaries from long text documents using NLP techniques. It follows a structured pipeline, including data ingestion, transformation, model training, and evaluation with the Pegasus model. The project ensures high-quality summaries and is deployment-ready with a web interface. It also integrates CI/CD workflows for automation and scalability."
              ghLink="https://github.com/shashankchoudhary727/Text-Summarizer-End-to-End-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zomato}
              isBlog={false}
              title="Zomato Data Analysis"
              description="This project explores Zomato data using Python and key libraries like Pandas, NumPy, Matplotlib, and Seaborn. It analyzes restaurant trends, online vs. offline orders, price preferences, and ratings. Insights reveal popular restaurant types, customer preferences, and order patterns. Visualizations, data cleaning, and statistical analysis make the findings easy to interpret."
              ghLink="https://github.com/shashankchoudhary727/Zomato-data-analysis"
              // demoLink=""
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
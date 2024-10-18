import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/JavaNetworking.png";
import projImg2 from "../assets/img/speech_recognition.png";
import projImg3 from "../assets/img/independent-white.png";
import colorSharp2 from "../assets/img/simple3.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Client-Server",
      description: "A Java Networking Project",
      imgUrl: projImg1,
      link: "https://github.com/BennyMota/JavaNetworkingProgramming",
    },
    {
      title: "Speech Recognition",
      description: "A Speech Recognition and Speech Synthesis in a Winforms App",
      imgUrl: projImg2,
      link: "https://github.com/BennyMota/SpeechRecognition",
    },
    {
      title: "Independent Studios",
      description: "Independent Studios Website design",
      imgUrl: projImg3,
      link: "https://github.com/BennyMota/Independent-Studios",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have worked on numerous projects over the years and below are some of them: </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
import { Container, Row, Col, Button } from "react-bootstrap";
import headerImg from "../assets/img/header-photo.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import gitIcon from "../assets/img/github-1.svg";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Benny Mota`}</h1>
                  <p>
                    I am passionate about technology and driven by a commitment
                    to continuous learning. I approach every challenge with a
                    dynamic mindset, combining technical expertise with a deep
                    curiosity for innovation. By staying adaptable and embracing
                    emerging technologies, I consistently deliver fresh,
                    effective solutions to real-world problems.
                    <br />
                  </p>
                  <p>Checkout my Github</p>
                  <div className="git-icon">
                    <a
                      href="https://github.com/BennyMota"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={gitIcon} alt="GitHub profile" />
                    </a>
                  </div>
                  <a href="Benny Lehlohonolo Mota – Software Developer Cv.pdf" download>
                    <Button variant="primary">
                      Download My CV <ArrowRightCircle size={25} />
                    </Button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Portrait of Benny Mota" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


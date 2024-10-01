import python from "../assets/img/python-logo.png";
import java from "../assets/img/java-logo.png";
import javascript from "../assets/img/javascript-logo.png";
import git from "../assets/img/Git-logo.png";
import html from "../assets/img/html-logo.png";
import css from "../assets/img/css-logo.png";
import docker from "../assets/img/docker-logo.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/simple3.jpg"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Languages and Technologies in my Tech Stack</h2>
                        <br></br>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <a href="https://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank"><img src={python} alt="Image" /></a>
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                            <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" target="_blank"><img src={java} alt="Image" /></a>
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                            <a href="https://simple.wikipedia.org/wiki/JavaScript" target="_blank"><img src={javascript} alt="Image" /></a>
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                            <a href="https://git-scm.com/" target="_blank"><img src={git} alt="Image" /></a>
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                            <a href="https://www.docker.com/resources/what-container/" target="_blank"><img src={docker} alt="Image" /></a>
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                            <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"><img src={html} alt="Image" /></a>
                                <h5>Html</h5>
                            </div>
                            <div className="item">
                            <a href="https://en.wikipedia.org/wiki/CSS" target="_blank"><img src={css} alt="Image" /></a>
                                <h5>CSS</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
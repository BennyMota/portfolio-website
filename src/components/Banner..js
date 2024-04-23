import {Container, Row, Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import HeaderImg from "../assets/img/header-img.svg";

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className = "align-items-center">
                    <Col xs={12} md={6} xl ={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{"Hi, I'm webdecoded"}<span className="wrap">Web Developer</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col>
                        <img src="" alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

import react from "react";
import { Link } from "react-router-dom";
import man from '../../assest/man.png';
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/Hero.css";
function Hero() {
  return (
    <section id="hero_section">
      <Container>
        <Row className="row">
          <Col lg={6} md={8} sm={12} className="col_1">
            <h3 className="title">
              {" "}
              we promote your <br />
              <span> busnisses</span>
            </h3>
            <p>
              We are dedicated to helping your business grow and reach new
              heights through tailored promotional strategies and innovative
              solutions
            </p>
            <div className="btn-wrapper">
              <Link className="btn" to="/">
                Get Started
              </Link>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}className="col_2">
          <div className="hexagon-bg"></div>
          <img src={man} alt="Man with Laptop" className="man-img" />
            
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Hero;

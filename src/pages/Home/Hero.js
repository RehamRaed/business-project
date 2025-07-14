import React from "react";
import { Link } from "react-router-dom";
import man from "../../assest/man.png";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "../../styles/Hero.css";

function Hero() {
  return (
    <section id="hero_section">
      <Container>
        <Row className="row">
          <Col lg={6} md={8} sm={12} className="col_1">
            <motion.h3
              className="title"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              we promote your <br />
              <span> busnisses</span>
            </motion.h3>

            <motion.p
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We are dedicated to helping your business grow and reach new
              heights through tailored promotional strategies and innovative
              solutions
            </motion.p>

            <motion.div
              className="btn-wrapper"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link className="btn" to="/">
                Get Started
              </Link>
            </motion.div>
          </Col>

          <Col lg={6} md={6} sm={12} className="col_2">
            <motion.div
              className="hexagon-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.div>

            <motion.img
              src={man}
              alt="Man with Laptop"
              className="man-img"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;

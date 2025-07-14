import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import group from '../../assest/tiebhoch.png';
import '../../styles/Contact.css';
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const inputs = [
  { placeholder: "Your Name...", type: "text" },
  { placeholder: "Your Phone...", type: "tel" },
  { placeholder: "Your Email...", type: "email" },
  { placeholder: "Your Message...", type: "textarea" }
];

function Contact() {
  return (
    <section id="contact_section">
      <Container>
        <Row className="row">
          <Col lg={7}>
            <div className="img_container">
              <img src={group} alt="contact_img" />
            </div>
          </Col>
          <Col lg={5}>
            <motion.h1
              initial={{ y: -40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              Contact Us
            </motion.h1>

            <div>
              {inputs.map((input, index) => (
                <motion.input
                  key={index}
                  className="custom-input"
                  autoComplete="off"
                  {...(input.type === "textarea"
                    ? { as: "textarea", rows: 4, placeholder: input.placeholder }
                    : { type: input.type, placeholder: input.placeholder })}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                />
              ))}
            </div>

            <motion.div
              className="btn-wrapper"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 * (inputs.length + 1) }}
            >
              <Link className="btn" to="/">
                Submit
              </Link>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../styles/Blog.css';
import blog from '../../assest/hepb9638.png';
import { motion } from "framer-motion";

function Blog() {
    return (
        <section id="blog_section">
            <Container>
                <Row className="blog_row">
                    <Col lg={5}>
                        <motion.h2
                            initial={{ y: -40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6 }}
                        >
                            we help business launch, grow and succeed
                        </motion.h2>

                        <motion.p
                            initial={{ y: -40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Our team offers the expertise and solutions to help your business thrive in a competitive market. From strategic planning to growth, we ensure your success by providing tailored services and innovative approaches to meet your needs.
                        </motion.p>

                        <motion.div
                            className="btn-wrapper"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <Link className="btn" to="/">
                                Get Started
                            </Link>
                        </motion.div>
                    </Col>

                    <Col lg={7} className="sec_col">
                        <div className="img_style"></div>
                        <div className="img_container">
                            <img src={blog} alt="blog_img" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Blog;

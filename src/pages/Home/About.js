import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bag from '../../assest/bag-shopping-svgrepo-com(2).svg';
import code from '../../assest/code-compare-svgrepo-com.svg';
import network from '../../assest/network-svgrepo-com(1).svg';
import '../../styles/About.css';
import women from '../../assest/4f2a48426ebbd78fe75ed1c16b36dae7.jpg';
import { Link } from "react-router-dom";
import edit from '../../assest/edit-square-svgrepo-com.svg';
import open from '../../assest/open-folder-svgrepo-com.svg';
import { motion } from "framer-motion";

const dataCards = [
    {
        image: code,
        title: "Development",
        paragraph: "Developing cutting-edge solutions that drive progress and meet your evolving needs"
    },
    {
        image: network,
        title: "Integration",
        paragraph: "Seamlessly integrating solutions to enhance functionality and improve user experience."
    },
    {
        image: bag,
        title: "Branding",
        paragraph: "Building a strong brand identity that resonates with your audience and sets you apart"
    }
];

function About() {
    return (
        <>
            <section id="about_section">
                <Container>
                    <Row className="first_row">
                        <Col lg={{ span: 8, offset: 2 }} className="text-center">
                            <motion.h3
                                initial={{ y: -50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                We Provides Shortage Remarkable<br /> Ideas
                            </motion.h3>
                            <motion.p
                                initial={{ y: -50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                We provide innovative and exceptional ideas designed to address challenges and meet your needs in the most effective and creative ways, ensuring remarkable results every time."
                            </motion.p>
                        </Col>
                    </Row>

                    <Row className="seconed_row">
                        {dataCards.map((cardData, index) => (
                            <Col md={6} lg={4} className="mb-4 mb-md-0 about_col" key={index}>
                                <motion.div
                                    className="about-text text-center"
                                    initial={{ y: 30, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 * index }}
                                    viewport={{ once: true }}
                                >
                                    <div>
                                        <img src={cardData.image} alt="about_icon" className={`custom-img-style-${index}`} />
                                    </div>
                                    <h3>{cardData.title}</h3>
                                    <h5>{cardData.paragraph}</h5>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>

                    <Row className="third_row">
                        <Col lg={7} className="trow_fcol">
                            <motion.div
                                className="about_img"
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                            >
                                <img src={women} alt="business_women" />
                            </motion.div>

                            <motion.div
                                className="call"
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h4>get a price quote today!</h4>
                                <p>Contact us now for pricing and details.</p>
                                <Link to='/'>📞+1253467892</Link>
                            </motion.div>
                        </Col>

                        <Col lg={5} className="trow_scol">
                            <motion.h3
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                We have business skills that will increase your earnings!
                            </motion.h3>

                            <motion.p
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                If you dream of starting your own business or enhancing your skills in the business world, we are here to guide you. With our expertise, you can achieve success and financial independence through well-planned and easy steps.
                            </motion.p>

                            <motion.div
                                className="grid_info"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <div className="icon"><img src={edit} alt="f_icon" /></div>
                                <div>
                                    <h3>Start Your Own Business in Minutes</h3>
                                    <p>We provide you with the tools and guidance needed to launch your entrepreneurial journey quickly and efficiently.</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="grid_info"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="icon"><img src={open} alt="s_icon" /></div>
                                <div>
                                    <h3>Open a Business Account Online</h3>
                                    <p>Whether you're looking to expand your business, you can easily open a business account to manage your transactions securely.</p>
                                </div>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default About;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../../components/layouts/Cards";
import '../../styles/Services.css';
import cloud from '../../assest/cloud-computing-1-svgrepo-com.svg';
import business from '../../assest/report-linechart-svgrepo-com.svg';
import report from '../../assest/report-pie-chart-8-svgrepo-com(1).svg';
import decision from '../../assest/pencil-svgrepo-com(3).svg';
import customer from '../../assest/setting-svgrepo-com(1).svg';
import solution from '../../assest/office-idea-bulb-solution-business-svgrepo-com.svg';
import { motion } from "framer-motion";

const Services_Cards = [
    { id: 1, icon: cloud, title: "Cloud Computing", paragraph: " Cloud computing enables easy access to data and applications from anywhere using the internet efficiently.", link: "Read More" },
    { id: 2, icon: business, title: "Business Strategy", paragraph: " business strategy helps organizations achieve goals through effective planning and  decision-making.", link: "Read More" },
    { id: 3, icon: report, title: "Reports Analysis", paragraph: "Analyzing reports provides valuable insights for data-driven decisions and improvement in business performance.", link: "Read More" },
    { id: 4, icon: decision, title: "Decision Maker", paragraph: "Making informed decisions requires analyzing data, evaluating options and selecting the best possible solution.", link: "Read More" },
    { id: 5, icon: customer, title: "Customer Oriented", paragraph: "Being customer-oriented means delivering services and solutions that meet needs and experience.", link: "Read More" },
    { id: 6, icon: solution, title: "Solutions Focused", paragraph: "Focusing on solutions fosters innovation and efficiency to resolve problems and improve overall productivity.", link: "Read More" }
];

function Services() {
    return (
        <section id="services_section" className="services-section">
            <div className="stars-bg"></div>

            <Container>
                <Row>
                    <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
                        <motion.h2
                            initial={{ y: -40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6 }}
                        >
                            Whats Services We Are Offering To <br />Our Customers
                        </motion.h2>

                        <motion.p
                            initial={{ y: -40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            "We offer smart solutions, strategic planning, cloud computing, and data analysis to enhance efficiency and success."
                        </motion.p>
                    </Col>
                </Row>

                <Row className="row-cards">
                    {Services_Cards.map((cardData, index) => (
                        <Cards
                            key={index}
                            id={index + 1}
                            icon={cardData.icon}
                            title={cardData.title}
                            paragraph={cardData.paragraph}
                            link={cardData.link}
                        />
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Services;

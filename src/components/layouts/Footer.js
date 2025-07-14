import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";
import '../../styles/Footer.css';
import arrow from '../../assest/arrow-up-svgrepo-com(1).svg'
function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const listenToScroll = () => {
        const heightToHidden = 250;
        const windowScroll = window.scrollY || document.documentElement.scrollTop;

        if (windowScroll > heightToHidden) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);

        return () => {
            window.removeEventListener("scroll", listenToScroll);
        };
    }, []);

    return (
        <>
            <section className="footer">
                <Container>
                    <Row>
                        <hr />
                        <Col>
                            <div className="list_container">
                                <ul className="list-unstyled mb-0 text-center">
                                    <li><Link to="/"> @ 2023 <span> M Com </span> . All Rights Reserved</Link></li>
                                    <li><Link to="/">About Us</Link></li>
                                    <li><Link to="/">Terms Of Us</Link></li>
                                    <li><Link to="/">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {isVisible && (
                <div className="scroll_top" onClick={scrollToTop}>
                    <img src={arrow} alt="arrow_icon"/>
                </div>
            )}
        </>
    );
}

export default Footer;
